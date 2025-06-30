---
title: "Elliptical Curve Notes"
date: 2025-05-30T23:35:35-04:00
draft: true
tags:
  - math
---

7.1.1: A nonsingular cubic curve (7.2) with coefficients in a field F and with at least one point with coordinates in F (that are not all zero) is said to be an elliptic curve over F

A curve is said to be nonsingular when there is no point [x, y, z] on the curve where all three partial derivatives vanish

Weierstrass form

<img class=equation-tall src="https://latex.codecogs.com/svg.image?y^2=x^3+ax+b">

The conditions to be nonsingular are much more complicated in the following Weierstrass form:

<img class=equation-tall src="https://latex.codecogs.com/svg.image?h^*=p\frac{\sigma_S}{\sigma_F}">

To implement modular arithemetic in Rust, you have to create the Struct and implement every method yourself. I repeat, do not use Residue from the Crypt Big Int library because their entire library is about reducing the montgomery form rather than just a single number. This was confusing since the optimized modular arithmetic does not require limbs.
