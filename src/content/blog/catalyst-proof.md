---
title: Proof that Catalyst is Secure
author: Alexander Lindgren
pubDatetime: 2024-10-21T21:55:00+02:00
slug: catalyst-proof
featured: false
draft: false
tags:
  - catalyst
  - amm
description:
  Proving that Catalyst is secure for multi asset multi chain pools.
---
When we were fundraising for [CatalystAMM](https://catalyst.exchange) I had no proof that our protocol was secure for multi-asset pools. I didn’t tell [0xJim](x.com/0xjim) either. We had been pitching 3+ chain pools with ever scaling efficiency as more chains were added. The issue: I could only mathematically prove that the equations were safe for 2 assets / chains.

While preparing for an audit, our auditors asked for system invariants they could fuzz against. I know the system invariants because I could compute our protocol's CFMM invariants based on the swap curves. However, this is a tiresome process:

1. Compute the integrals for the given price functions. 
2. Derive the swap equations. Specifically, amplified is not fun to compute.
3. Compute the liquidity equations, again amplified is not fun.

I believe in simplicity, and there is no way these beautiful equations wouldn’t let me do this in a simpler way. The only issue with these invariants is that they only hold atomically. As soon as any swap is inflight, the invariants momentarily break.

The exhaustive proof for the 2 chain state is based on the additive integral property for definite integrals. Using this property, you can show that regardless of how you arrange chain swaps, you can’t exit the 1d invariance plane. This proof by itself does not scale into N dimensions.

During a review of our audit documentation, I got frustrated. Not only is this annoying to me, but also for auditors and monitoring system health. You can’t ask every single user to not swap because we need to check if the system is still secure. 

I had been playing around with random liquidity curves in an attempt to replicate various other AMMs cross-chain when I discovered that the logarithm of the constant product invariant, $\ln(x \cdot y \cdot z) = \ln(k)$, is $\ln(x) + \ln(y) + \ln(z) = K$ which is a sum. This is not a surprise, but it is a sign.

Let us examine a state transition from this perspective, i.e. a swap from A to B:

$$K = \ln(x) + \ln(y) = \ln(x) + \left(\ln(x-a) - \ln(x)\right) + \ln(y)$$
$$ = \ln(x + a) + \ln(y) + \left(\ln(y - b) - \ln(y)\right) = \ln(x + a) + \ln(y - b)$$

If we define $\ln(x-a) - \ln(x) = \ln(y - b) - \ln(y) = U$ then this proves the constant product AMM can be generalised to N many assets and chains cross-chain. The actual proof requires us to add a sum of $\sum_i^N \ln(i)$, but since these are constant, subtracting them doesn't take anything away from the proof. We can take it further:

$$K = \int^x p(u) \ d u + \int^y p(u) \ d u = \left(\int^{x+a} p(u) \ d u - U\right) + \int^y p(u) \ d u$$
$$=\int^{x+a} p(u) \ d u + \left(\int^y p(u) - U \right) =\int^{x+a} p(u) \ d u + \int^{y-b} p(u) \ d u$$

and it is a proof that any AMM we generate like this is secure cross-chain. But we can take it even further. Let’s examine a set of differentiable functions. The sum then defines:

$$K = \sum_i^N P_i(i) = \sum_i^N \left( \int^i p(u) \ du - C_i \right) => K' = \sum_i^N \int^i p(u) \ du$$

Any AMM that can be written as a sum of independent differentiable functions can be a cross-chain AMM!