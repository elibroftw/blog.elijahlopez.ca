---
title: "Running Python as a Scheduled Task (Windows)"
date: 2019-05-23T22:34:21-05:00
tags:
  - tutorial
  - programming
  - python
summary: "Learn how to schedule Python scripts to run automatically using Windows Task Scheduler. This guide covers creating a .bat file and configuring task settings for seamless background execution of your Python programs."
---

To run python in the background is easy, to do it in the background and as a scheduled task is harder.

If you want to just run a script in the background, you can use

`pythonw "script.py"`

or change your script's extension to .pyw, and then call the script.
Here's how to schedule a task

1. Create `run.bat` in your project directory with the content `python "script.py`
2. Open up Task Scheduler (search from the Start menu).
3. On the left sidebar, click "Task Scheduler Library."
4. Click "Create Basic Task…"
5. Enter the task name, description, and click next.
6. Select your trigger, I needed "When the computer starts."
7. Action is "Start a program."
8. Program/script will be the bat file you created in Step 1
9. Make sure "Start in" is your project directory.
9. Click next, and check "Open the Properties dialog…"
10. Have "Run whether user is logged on or not" checked (if your trigger is running when the computer starts).
11. Have "Hidden" checked.
12. Change "Configure for:" to the correct option. Windows 10, in my case.
13. Tinker with the other options if you need to.
14. Click "OK." You will need to provide your password.
15. Test the task by clicking "Run" on the right panel.

If the task did not execute (or it did but not in the background) it may be that you didn't follow the steps properly (e.g. I forgot to set the configure for).
I hope you found this helpful. Leave a comment or email me if you have any issues.
