---
title: "How to Withdraw USD From Deel to Wise Without USD Account Details"
date: 2024-08-16T13:48:55-04:00
draft: false
tags:
  - finance
  - canada
  - taxes
  - usa
---

So recently, my coworker and I who reside in Canada started getting paid in USD on Deel. One of the ways we could withdraw money is to open a US branch account with one of the big banks (RBC, TD, BMO, etc.), withdraw from Deel, transfer the money to a US dollar account in Canada, and if you don't want to do Norbert's Gambit in a direct investing account bi-weekly, you can pay 200+ basis points of FX fees to convert to CAD. That's assuming the direct investing account even supports DIY Norbert's Gambit (RBC does).

So what about Wise? Well the reason I have to write this article in the first place is because Wise has a join-list for the USD account details. You can still hold USD though. Only when I converted 1 CAD to 1 USD, could I see a US account with a join list for the account details. Wise provided some information that I can accept USD through the GBP account. So that's what we have to do. The comparison section just goes over the expected fees if I used RBC instead of Wise.

## Fees Napkin Comparisons

### RBC

Assuming you only use the freely provided savings accounts, you would pay the minimum of $9.95 (fee per trading order) x 2 = C$19.90 (15 basis points on 10k USD) and 2.27% per currency swap. This is assuming you are extremely fee averse, and that transferring to another Canadian bank is free. Most likely, you will also have a chequing account and avoid the hassle of direct investing, which is at least an additional 30 basis points.

### Wise

With Wise, fees are simply. US$5 per withdrawal due to SWIFT plus at most 28 basis points per conversion from USD to CAD. You can actually do the conversion while sending the money straight to a CAD account. The fees for sending the money to your bank account should be less than C$2.00 (excluding FX fees) regardless of the amount being transferred out of Wise.

## Adding Wise UK as a Bank Transfer

1. In Wise, simply open a GBP account, and click on the Global bank details. You'll need this for step 8.
  ![Wise GBP Account Details](/posts/how-to-withdraw-usd-from-deel-to-wise/wise-gbp-account-details.webp)
2. In Deel, click Finance, Withdrawal methods, and then "Add method."
3. Click Bank transfer. DO NOT CLICK ON "Wise", I have tried it before, and it does not work.
  ![Deel Add Bank Transfer](/posts/how-to-withdraw-usd-from-deel-to-wise/deel-add-bank-transfer.webp)
4. Set custom method name to "Wise UK - USD"
5. Set Country of recipient's bank to "United Kingdom." Note I tried to do this using the Canadian account and it did not work.
6. Set Currency to "USD - US Dollar"
7. Click "SWIFT" underneath currency
  At this point, the UI should look like this.
8. Copy IBAN and SWIFT from Wise GBP global account. Note that IBAN and Swift appear in the reversed order in comparison to on Wise.
9. Click Next and add address

## Deel WIthdrawal Process

1. In Deel, click "withdraw" and select the WIse UK method.
2. Wait 6 hours
3. When you get an Email from wise that a deposit was received, you can safely set Wise as the default method for automatic withdrawals.
