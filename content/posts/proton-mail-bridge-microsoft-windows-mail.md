---
title: "Proton Mail Bridge Microsoft Windows Mail"
date: 2023-07-25T13:59:08-04:00
draft: false
tags: [
    "windows",
]
---

I got my Windows 11 laptop back and was able to add my Proton Mail account to the default Mail app that comes preinstalled on Windows.
I'm not sure if this will work on Windows 10, but I will test that out on Thursday.
I hope these instructions are clear enough for everyone else since Proton Mail does not have any articles and did not want to give paying customers (me) any support on how to do this.

1. Install [Proton Mail Bridge](https://proton.me/mail/bridge)
2. Log into Proton Mail Bridge
3. If you have more than one Proton Mail address, toggle split addresses
4. Open Mail app
5. Click Settings (cog) and then management accounts
6. Click Add account
7. Click advanced setup
8. Click Internet email
9. Use the user name in the bridge app for the email address and user name.
10. For password, use the password found in the bridge app for IMAP
11. Set account name to "Proton Mail"
12. Enter your name in the next field or whatever you want to be called
13. Copy the IMAP port in the bridge app
14. Enter 127.0.0.1:IMAPPORT for incoming email server (e.g. 127.0.0.1:1143)
15. Set account type to IMAP4 (or whichever IMAP is latest on your screen)
16. Copy SMTP port in bridge app
17. Enter 127.0.0.1:SMTPPORT for outgoing email server (e.g. 127.0.0.1:1027)
18. If you need to add other accounts, add accounts to mail but with a different email address and user name

If you need pictures, please comment and I will update the article to include pictures.
