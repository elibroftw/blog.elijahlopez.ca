---
title: "How to fix Unable to Get Local Issuer Certificate"
date: 2022-11-13T13:11:52-05:00
tags:
  - tutorial
  - python
  - devops
summary: "Troubleshoot and fix the 'unable to get local issuer certificate' SSL error when making HTTPS requests in Python, often caused by missing intermediate certificates in the server's chain."
---

So you were trying to use `requests` or `httpx` to access a website, in my case my own, and you got an SSL verify error:

```py
requests.exceptions.SSLError: HTTPSConnectionPool(host='domain', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)')))
```

Your browser has no problems with the SSL verification. What gives? If a Man in the middle attack was occuring, your browser would tell you the website is unsafe, so an attacker is not the problem.

You searched the issue on a search engine and Stackoverflow tells you that you need to disable the verification or update certifi.
Disabling verification is an unsafe/temporary work around, and the second didn't work, did it? What's the actual problem?

The problem is that the website is only sending you their public certificate and not the entire certificate chain. Browsers are smart (or dumb)
enough to fill in the gaps, but when security is in fact a concern, a library might not do the same. How do we fix this?

The first thing you should do is contact the website owner and tell them that they are not sending the entire chain certificate and it's causing issues.

If you are the website owner what do you need to do? Well if you were in charge of [generating the CSR](https://www.ssldragon.com/blog/how-to-install-an-ssl-certificate-on-heroku/), then you are capable of fixing the issue. When you buy a certificate from a certificate authority, you are actually buying the right to seek verification. To get verified, a certificate signing request (CSR) is required. To generate a CSR, a private key must be generated. After submitting the CSR to the certificate authority, like Sectingo (previously known as Comodo), they will give you your websites public certificate as well as a bundle. Someone new to SSL might not understand what the bundle is; Adding .crt extension at the end may clear is up; it's the missing intermediate certificates.

To fix the issue, rather than add only your websites public certificate to your reverse-proxy/webserver, you must combine your websites certificate with the bundle and create a chain certificate. In other words, create a new file with certificates in this order:

1. Domain
2. Certificates in the bundle

If you have `cat` installed, you can use the command `cat domain.crt .ca-bundle > chain.crt`. On Windows, you can rename the file extensions or use Quicklook to read the contents of the file and copy paste them to a new text file.

Lastly, you need to add the certificate (and possibly the private key) to your webserver.

If you are using Heroku, you can go to settings, and click edit endpoint details under "Add certificate". Test out requests again.

I hope this fixed your issue, as a lot of my time was wasted because of poor Heroku docs the first time I added certificates. They did not emphasize combining the certificates.
