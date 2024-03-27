---
title: "SIM Swapping: Why SMS 2FA Is Unsecure"
date: 2023-07-09T19:38:38-04:00
draft: false
tags:
  - cryptocurrency
  - cybersecurity
  - opinion
---

A lot of companies provide their users with SMS for 2FA in case their users reuse passwords across multiple services. However, users who are forced to use SMS 2FA or choose to use SMS 2FA can be left completely insecure, especially with financially related services which oddly use non-token based 2FA (many crypto exchanges).

If a criminal wants to steal your cryptocurrency, they are not going to abide by identity theft laws.

SIM swapping is when a malicious actor uses your government ID, such as a social security number (USA) or social insurance number (Canada) to pretend to have lost access to their phone, and subsequently call the telecommunication provider to essentially switch over service to their SIM from the old one. Once a valid service is secured, the malicious actor can simply use the password leaks they found and break into your account.

It's even worse if you use SMS 2FA for your email account.

## PSA: Use One Time Password and 2FAS for 2-Factor Authentication

When presented an option to use 2 factor authentication, also go with the authenticator app which is one time tokens. [2FAS](https://2fas.com/) is a great app for this.

## PSA: DO NOT USE SMS FOR GOOGLE 2-STEP VERIFICATION BACKUP

When setting up 2-Step verification, Google will ask you to add a backup option and prompts you with a phone number form by default instead of the backup codes. This backup option will leave you insecure if your identity gets stolen which is more plausible than dying in a car accident.

Instead of phone number backup, use **backup codes** and save them to a local [KeePassXC](https://keepassxc.org/download/) database that is locked with **a master password you do not use for any online services**.
