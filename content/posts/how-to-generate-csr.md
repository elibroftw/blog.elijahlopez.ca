---
title: "How to Generate a CSR Using openssl"
date: 2022-01-25T13:14:03-05:00
draft: false
tags: [
  'tutorial',
  'devops'
]
---

```sh
openssl req -newkey rsa:4096 -keyout elijahlopez.ca.key -out elijahlopez.ca.csr -config .\elijahlopez.ca.csr.conf
```

```powershell
& 'C:\Program Files\Git\usr\bin\openssl.exe' req -newkey rsa:4096 -keyout elijahlopez.ca.key -out elijahlopez.ca.csr -config .\elijahlopez.ca.csr.conf
```

Here is a pretty and succinct guide on creating a Certificate Signing Request (CSR).

For the tutorial, replace all `{ Sample value }` with your values.

## Instructions

### Generating a Key

This avoids entering passphrases when generating the CSR.

`openssl genpkey -algorithm ed25519 > { lenerva.com }.key`

The filename for me is *`lenerva.com`*`.key`.

### Create a CSR Config File

Do this once and reuse forever.

Filename: `{ lenerva.com }.csr.cnf`

```conf
[ req ]
prompt                      = no
distinguished_name          = req_distinguised_name
[ req_distinguised_name ]
countryName                 = { CA }
stateOrProvinceName         = { Ontario }
localityName                = { Toronto }
organizationName            = { LeNerva Inc. }
commonName                  = { lenerva.com }
emailAddress                = { security@lenerva.com }
subjectAltName              = @alt_names
[alt_names]
DNS.1                       = { lenerva.com }
DNS.2                       = { www.lenerva.com }
```

### Generating the CSR

`openssl req -new -out { lenerva.com }.csr -key { lenerva.com }.key -config { lenerva.com }.csr.cnf`

### Read CSR as a Human

`openssl req -in { lenerva.com }.csr -text -nout`

## Jargon

| Name | Summary                     |
| :--- | --------------------------: |
| CSR  | Certificate Signing Request |
| SAN  | Subject Alternative Name    |

## Resources

- Pinter, Jannis. [Create ED25519 certificates for TLS with OpenSSL](https://blog.pinterjann.is/ed25519-certificates.html)
- [SSL Dragon: How to Install an SSL Certificate on Heroku/](https://www.ssldragon.com/blog/how-to-install-an-ssl-certificate-on-heroku/)

## How to use Certificates from the Certificate Authority

### Combining the Certificate

Sentigo sends us a zip file with the domain certificate and the authority certificate "bundle" as well. We however, want our servers to the send the full certificate chain, otherwise network requests from non-browsers will fail to verify the SSL (speaking from experience using the requests module on my website). Note that a browser will not report any errors as they are "smart" enough to fill in the gaps as a lone certificate can be implied to be signed by a certificate authority. Don't ask me how it really works as I am speaking from a memory of me reading the rationale two or three years ago.

`cat domain.crt domain.ca-bundle > domain.chain.crt`

To manually do this: Create a new file chain.crt which is nothing but the contents of the domain.crt file followed by the contents of the ca-bundle file. If you are confused, you can look at my website's github where I have all [three files located](https://github.com/elibroftw/website/tree/master/ssl).

### Unencrypted Private Key

Finally, you can print out the private key like so

```sh
openssl rsa -in domain.key
```

```powershell
& 'C:\Program Files\Git\usr\bin\openssl.exe' rsa -in domain.key
```
