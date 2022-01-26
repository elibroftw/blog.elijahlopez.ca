---
title: "How to Generate a CSR Using openssl"
date: 2022-01-25T13:14:03-05:00
draft: false
tags: [
  "tutorial",
]
---

Here is a pretty and succint guide on creating a Certificate Signing Request (CSR).
I used the ed25519 algorithm because RSA is less secure, slower, and results in a longer public-key.
I didn't get a chance to test this, but just comment down below if something didn't work.

For the tutorial, replace all `{ Sample value }` with your values.

## Instructions

### Generating a Key

This avoids entering passphrases when generating the CSR.

`openssl genpkey -algorithm ed25519 > { lenerva.com }.key`

The filename for me is *`lenerva.com`*`.key`.

### Create a CSR Config File

Filename: `{ lenerva.com }.csr.cnf`

```conf
[ req ]
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

Pinter, Jannis. [Create ED25519 certificates for TLS with OpenSSL](https://blog.pinterjann.is/ed25519-certificates.html)
