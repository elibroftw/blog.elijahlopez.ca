---
title: "PSA: Avoid Data Corruption by Syncing to the Disk"
date: 2025-02-09T14:07:09-05:00
draft: false
tags:
  - programming
  - rust
  - python
  - computer-science
  - cybersecurity
---

A few weeks ago, I was playing Call of Duty Black Ops 6 after a new update was released. Mid-game, my laptop encountered a Blue Screen of Death. When my laptop rebooted and I went to play music, I found that [Music Caster](https://github.com/elibroftw/music-caster/) - Music Player I developed and daily drive - had its settings reset. To fix this bug, I was planning on implementing a _backup before overwriting_ pattern, but then realized I should use this problem as an opportunity to benchmark the leading Large Language Models found on [LiveCodeBench](https://livecodebench.github.io/leaderboard.html). Among the models I tested, only _Deepseek R1_ enlightened me with the wisdom of the flushing the disk cache via a call to `os.fsync` (Python). Even then, it did not realize that os.fsync was not available on macOS, but that's a minor fault. I subsequently checked another code base (Rust) I was working on for the same bug, and lo and behold, it was missing a call to sync the disk cache! Thanks to my humble benchmark of DeepSeek R1, two applications are now safer from potential data corruption bugs.

I have included two code reviews below, one in Python and one in Rust. These illustrate the specific problem on how a data corruption bug show up in code, and an as best as I can solution to avoid the bug. Feel free to code review my solutions! My goal is a collectively approved solution. The scenario involves saving to a config-like file. For context, in my music player's case, it would overwrite the file very often in order to persist the playback progress.

### Python Code Review

This is a naive implementation to saving a config file. With such a verbose introduction, it's easy to tell there is a bug if the system crashes. What's not easy is getting the implementation to the proposed solution. It's easy to say "write to a temporary file and then replace atomically," and harder to implement the solution flawlessly.

```py
try:
    with open(SETTINGS_FILE, 'w', encoding='utf-8') as outfile:
        json.dump(settings, outfile, indent=2, escape_forward_slashes=False)
except OSError as e:
    pass # omitted
```

<br>
<details><summary>Solution</summary>

1. Write to a temporary file. `NamedTemporaryFile` is the way to go as it also has more secure default file permissions (owner-only permissions) than simply opening a file to write to it. Note that `SETTINGS_FILE` is an instance of `pathlib.Path`
2. Ensure that this temporary file won't be deleted upon close since we need to replace the persistent settings file
3. Ensure that if there is a program buffer regarding writing to files, that this buffer is flushed
4. Ensure that the OS disk cache is flushed to the physical disk via `os.fsync` and `F_FULLFSYNC` on macOS
    - Unfortunately Python's [`os.fsync`](https://docs.python.org/3/library/os.html#os.fsync) is unavailable on macOS, which is a great example of it's lack luster cross platform ability. On macOS, we need to use [`fcntl.fcntl(tmp_file.fileno(), fcntl.F_FULLFSYNC)`](https://github.com/rust-lang/rust/commit/d602a6b942e32f4f9a36b6c44471cfcd80a81bb6#diff-8ab68a7768c78998ca029efe4870677bc8722b5ac0bed5fb68944086202fe0e0R534)
    - I have made a [post](https://discuss.python.org/t/call-f-fullfsync-in-os-fsync-for-macos/79332) on the Python forums asking to support fsync on macOS similar to Rust's implementation of sync_all. I would appreciate some likes on this.
    - Technically, you could also write three if statements and use [os.fdatasync](https://docs.python.org/3/library/os.html#os.fdatasync) when running on Unix, but I'd argue it's better to migrate away from Python at that point!
5. Close the temporary file
6. Atomically replace the settings file with the temporary file

```py
from tempfile import NamedTemporaryFile
try:
    import fcntl
except ImportError:  # not supported in Windows
    pass
try:
    tmp_file = NamedTemporaryFile(mode='w', encoding='utf-8', prefix=SETTINGS_FILE.name, dir=SETTINGS_FILE.parent, suffix='.tmp', delete=False)
    json.dump(settings, tmp_file, indent=2, escape_forward_slashes=False)
    # send to kernel buffer
    tmp_file.flush()
    # inform OS to write to disk to avoid a situation where the file is replaced but not written to
    if platform.system() == 'Darwin':
        fcntl.fcntl(tmp_file.fileno(), fcntl.F_FULLFSYNC)
    else:
        os.fsync(tmp_file.fileno())
    tmp_file.close()
    # an atomic operation which avoids any settings file corruption at crash
    os.replace(tmp_file.name, SETTINGS_FILE)
    settings_last_modified = os.path.getmtime(SETTINGS_FILE)
    # this atomic operation ensures that a settings.file will exist if the system crashes before/after the system call
    os.replace(tmp_file, SETTINGS_FILE)
except OSError as e:
    pass
```

</details>

### Rust Code Review

Can you spot the bug in this Rust code? Looks good to me. Right?

This is the typically smart solution, however as I mentioned since the start of this article, there is an oversight! It's a mistake even senior software engineers can make without an adequate understanding of how OS file system really works. We call flush as if the data will be flushed from the program buffer straight to the disk, but in reality, the data is flushed from the program buffer to the kernel buffer / disk cache! Therefore, we need to ensure that the data is synced to the disk before we call persist (which is an atomic replace/rename).

```rs
use tempfile::{NamedTempFile, PersistError};
// inside a function called save
    let mut file = NamedTempFile::new_in(MY_DIR)?;
    file.write_all(&json)?;
    file.flush()?;
    file.persist(MY_DIR.join("config.json"))?;
```

<br>
<details><summary>Solution</summary>

To ensure that the file is synced to the disk before we persist the temporary file, call [file.as_file_mut().sync_data()](https://doc.rust-lang.org/std/fs/struct.File.html#method.sync_data).

```rs
use tempfile::{NamedTempFile, PersistError};
// inside a function called save
    let mut file = NamedTempFile::new_in(MY_DIR)?;
    file.write_all(&json)?;
    file.flush()?;
    file.as_file_mut().sync_data()?;
    file.persist(MY_DIR.join("config.json"))?;
```

</details>
