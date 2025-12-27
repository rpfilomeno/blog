---
title: 'Crystalwire 1.0 Release'
description: |
  When you don't care about the firewall but need the jumping graphs that track which process consumes all your bandwidth, it's like Glasswire for terminals!
pubDate: 'Mar 22 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_Q1P7VbHkWC.png'
---
When you don't care about the firewall but need the jumping graphs that track which process consumes all your bandwidth, it's like Glasswire for terminals!

Crystalwire is a command-line tool that monitors network bandwidth usage for each running process in real-time. It utilizes the psutil library for gathering system information and displays the data in a user-friendly format.

## Installation
1. Clone the project
```bash
gh repo clone rpfilomeno/crystalwire
```
2. install 'crystalwire' the dependencies
```bash
pip install -r requirements.txt
```
## Usage
Once installed, you can run 'crystalwire' from the command line:
```bash
python -m crystalwire.main
```
