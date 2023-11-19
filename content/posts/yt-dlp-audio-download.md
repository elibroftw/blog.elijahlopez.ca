---
title: "yt-dlp Audio Download Tutorial"
date: 2023-05-22T20:33:19-04:00
draft: false
tags: [
    'tutorial'
]
---

Since my [yt-dlp propaganda on YouTube is getting many views](https://www.youtube.com/watch?v=Tq9qpA2QOTI), I thought I'd create this article and a future video on how to use yt-dlp to download audio from websites, primarily YouTube.

<details><summary>Installing yt-dlp</summary>

- [Windows download](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe)
  - `winget install yt-dlp`
  - `choco install yt-dlp`
  - `scoop install yt-dlp`
- [macOS download](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos)
  - `brew install yt-dlp`
- [Linux download](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp)
  - `sudo pacman -Syu yt-dlp --noconfirm`

  - ```sh
    sudo add-apt-repository ppa:tomtomtom/yt-dlp    # Add ppa repo to apt
    sudo apt update                         # Update package list
    sudo apt install -y yt-dlp              # Install yt-dlp
    ```

- Via Python 3+
  - Windows: `python -m pip install -U yt-dlp`
  - Other: `python3 -m pip install -U yt-dlp`

</details>

## Installing ffmpeg

- Windows 10+: `winget install ffmpeg`
  - If winget is not installed, you can install it [from here](https://apps.microsoft.com/store/detail/app-installer/9NBLGGH4NNS1)
- [Linux](https://ffmpeg.org/download.html#build-linux)
- [MacOS](https://ffmpeg.org/download.html#build-mac)

## Downloading Audio

You can try using `yt-dlp` before resorting to `python -m yt_dlp` like I did. In my case I installed yt-dlp with Python's pip because yt-dlp is embedded in my music player, [Music Caster](https://github.com/elibroftw/music-caster/#readme).

```sh
python -m yt_dlp <URL> -xciw -f "bestaudio/best" --audio-quality 0 --audio-format mp3 --embed-thumbnail --embed-metadata -o "%(title)s.%(ext)s"
```

If the video doesn't have the artist in the title, use the following output template instead: `-o "%(creator,uploader,channel)s - %(title)s.%(ext)s"`

### Example

If you are using yt-dlp on youtube videos, you can either supply the URL or just the ID.

```sh
python -m yt_dlp UTwB8iJOux0 -xciw -f "bestaudio/best" --audio-quality 0 --audio-format mp3 --embed-thumbnail --embed-metadata -o "%(title)s.%(ext)s"
# python -m yt_dlp https://www.youtube.com/watch?v=UTwB8iJOux0&pp=ygUVc2V3ZXJzbHZ0IGFsbCB0aGUgam95 -xciw -f "bestaudio/best" --audio-format mp3 --embed-thumbnail --embed-metadata -o "%(title)s.%(ext)s"
```

[command line flags](https://github.com/yt-dlp/yt-dlp#filesystem-options)

<details><summary>terminal output</summary>

```sh
[youtube] Extracting URL: UTwB8iJOux0
[youtube] UTwB8iJOux0: Downloading webpage
[youtube] UTwB8iJOux0: Downloading android player API JSON
[info] UTwB8iJOux0: Downloading 1 format(s): 251
[info] Downloading video thumbnail 41 ...
[info] Writing video thumbnail 41 to: Sewerslvt - all the joy In life was gone once you left.webp
[dashsegments] Total fragments: 1
[download] Destination: Sewerslvt - all the joy In life was gone once you left.webm
[download] 100% of    5.87MiB in 00:00:02 at 2.68MiB/s
[ExtractAudio] Destination: Sewerslvt - all the joy In life was gone once you left.mp3
Deleting original file Sewerslvt - all the joy In life was gone once you left.webm (pass -k to keep)
[Metadata] Adding metadata to "Sewerslvt - all the joy In life was gone once you left.mp3"
[ThumbnailsConvertor] Converting thumbnail "Sewerslvt - all the joy In life was gone once you left.webp" to png
[EmbedThumbnail] ffmpeg: Adding thumbnail to "Sewerslvt - all the joy In life was gone once you left.mp3"
```

</details>

## Metadata Editing

![Downloaded File Metadata in Music Caster](/images/yt-dlp/music-caster-metadata-before-edit.png)

yt-dlp is not smart enough to add all metadata nor the correct album cover, so if you are on Windows, you can use [Music Caster](https://github.com/elibroftw/music-caster/#readme) to further edit the metadata and add the correct cover art.

![Metadata Edited in Music Caster](/images/yt-dlp/music-caster-metadata-edited.png)
