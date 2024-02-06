---
title: "How to Install Ruby on MacOS"
date: 2024-02-05T21:28:03-05:00
draft: false
tags: [
  'macos',
  'tutorial'
]
---

This is how you install Ruby on MacOS and you don't have to reopen the terminal.

```zsh
brew install ruby-install chruby
ruby-install -V
echo "# enable chruby" >> ~/.zshrc
echo "source /usr/local/share/chruby/chruby.sh" >> ~/.zshrc
echo "source /usr/local/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.3.0" >> ~/.zshrc
. ~/.zshrc
ruby-install ruby
```

Can you believe you have to read this blog post to install ruby? Neither can I. I had to install ruby myself because of some bug in cocoapods 0.15.0 that prevented me from building my react-native application for iOS and when I used `sudo gem install cocoapods -v 1.14.3` it complained about my ruby version! All the other tutorials are written by LOW IQ individuals and wasted more time than it took to write this blog post.
