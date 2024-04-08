---
title: "Excel FILTER Formula on Table Excluding Headers"
date: 2024-04-08T11:30:07-04:00
draft: false
tags:
  - excel
  - finance
  - tutorial
---

Enter a variant of the formula below where Table1 is the name of the table (Ctrl + T to create tables in Excel). Since we are using a formula in another sheet, it might be prudent to place this on row 3 to make room for custom headers on row 1 and custom data (or another filter) on row 2.

```excel
# Enter this in A5
=FILTER(Table1[Stock]:Table1[Status],NOT(ISBLANK(Table1[Status])))
# Enter this in C5 or the width of the first formula + 1
=FILTER(Table1[Speculation]&"",NOT(ISBLANK(Table1[Status])))
```

The reason there are two formulas is because empty cells show up as "0" by filter, so if we need spill-overs, we need to use the `&""` modifier on each array separately.

Here is a snippet of Table1

| Stock                               | Status | Speculation                                 | Ticker |
|-------------------------------------|--------|----------------------------------------------|--------|
| DOLLARAMA INC. (XTSE:DOL)             | HOLD   | Possibly over-valued                         | DOL     |
| Canadian Pacific Kansas City Limited (XTSE:CP) | BUY    |                                              | CP      |
| Vale SA (XNYS:VALE)                    |       |                                              | VALE    |
| ABBVIE INC. (XNYS:ABBV)                | BUY    |                                              | ABBV    |
| PROSPECT CAPITAL CORPORATION (XNAS:PSEC) |       |                                              | PSEC    |
| THE BANK OF NOVA SCOTIA (XTSE:BNS)      | BUY    |                                              | BNS     |
| WHITEHORSE FINANCE, INC. (XNAS:WHF)    |       |                                              | WHF     |
| STELLUS CAPITAL INVESTMENT CORPORATION (XNYS:SCM) | BUY    |                                              | SCM     |
| LAMAR ADVERTISING COMPANY (XNAS:LAMR)   |       |                                              | LAMR    |
| NEXTERA ENERGY PARTNERS UNT (XNYS:NEP)  | BUY    |                                              | NEP     |
| THE TORONTO-DOMINION BANK (XTSE:TD)    |       |                                              | TD      |

After I used the formula on Table1, I got the following table. Notice that the data excludes any headers and only includes the wanted columns that had a Status.

|                                | | | |
|-------------------------------------|--------|--------------|--------|
| DOLLARAMA INC. (XTSE:DOL)             | HOLD   | Possibly over-valued | DOL     |
| Canadian Pacific Kansas City Limited (XTSE:CP) | BUY    |             | CP      |
| ABBVIE INC. (XNYS:ABBV)                | BUY    |             | ABBV    |
| THE BANK OF NOVA SCOTIA (XTSE:BNS)      | BUY    |             | BNS     |
| STELLUS CAPITAL INVESTMENT CORPORATION (XNYS:SCM) | BUY    |             | SCM     |
| NEXTERA ENERGY PARTNERS UNT (XNYS:NEP)  | BUY    |             | NEP     |
| BRITISH AMERICAN TOBACCO P.L.C. (XNYS:BTI) | BUY    | Undervalued | BTI     |
| SUN LIFE FINANCIAL INC (XTSE:SLF)     | HOLD   |             | SLF     |
| Brazilian Petroleum Corporation - Petrobras (XNYS:PBR.A) | HOLD   | Do not top-up | PBR.A   |
| 3M COMPANY (XNYS:MMM)                   | BUY    | Undervalued | MMM     |
| PFIZER INC. (XNYS:PFE)                  | BUY    | Undervalued | PFE     |

_<caption>the data contains entries missing in the first snippet because the original table was used</caption>_
