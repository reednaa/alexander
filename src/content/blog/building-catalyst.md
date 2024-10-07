---
title: Building Catalyst
author: Alexander Lindgren
pubDatetime: 2024-10-07T19:50:00+02:00
slug: building-catalyst
featured: false
draft: false
tags:
  - catalyst
  - amm
description:
  How do design a cross-chain AMM by generalising the constant products AMM. This is my journey. 
---

My journey to building [CatalystAMM](https://catalyst.exchange) and completing the generalization of the constant product AMMs has origins in 2017.

[Bancor](https://bancor.network) made records by completing – at the time – the largest ICO ever. They promised to eliminate middlemen by using BNT as an intermediary between trades. Their strategy was to price assets based on the ratio between their token holdings a supply of BNT. By cleverly engineering the relationship, they had created a path invariance between the 2 tokens. 

### Path Invariance

Shortly after Bancor’s ICO [Vitalik](https://vitalik.eth.limo) commented on the situation: [On Path Independence](https://vitalik.eth.limo/general/2017/06/22/marketmakers.html). He formalized a path-independent market maker – called a Constant Function Market Maker today – that would later inspire [Hayden Adams](https://x.com/haydenzadams) to develop [Uniswap](https://uniswap.org). Unbeknownst to him at the time, the idea contained in a [162 line smart contract](https://github.com/haydenadams/uniswap-retro/blob/0c09ade9479694de328a6f3826f9037fd7620d7e/smart_contracts/uniswap.sol#L104-L106) has become a constant presence on Ethereum and rollups ever since.

## Constant Product

What makes the constant product AMM so ingenious? It has an important and unique property: The price function slope is – relative to balances – constant everywhere. In other words, if you want to buy a constant percentage of the vault twice, say $1\%$, it will also cost you a constant percentage of the vault, in your case $1.0101\%$, regardless of the current vault state. This property effectively lets a single deposit of $100$ USDC and $100$ Tokens market make forever, for all prices. It is easy to prove:

Establish the trading equation: 
$$X · Y = k = (X + x) \cdot (Y - y) ⇒ y = \frac{Y · x}{X + x}$$

Let's define the percentage relationship: $x = X \cdot a$ and $y = Y \cdot b$.

Solving for $b$ ⇒
$$Y · b = \frac{Y \cdot X \cdot a}{X + X \cdot a} ⇒ b = \frac{a}{1 + a}$$

This property was important for the first generation of DeFi and is still important for long tail assets that would otherwise have trouble finding a market. It is a promise that as long as you can get people to provide liquidity for a token – and not withdraw it – you are guaranteed to always have a market for your token.

## Integrating Price Functions

I am fascinated that such simple mathematics leads to these beautiful results, and I wanted to do more. Specifically, I had my cross-hair on a cross-chain AMM. I love integrations – no wonder given my Insurance Mathematics background – and I thought why not get inspiration from Lebesgue integrals.

The idea is simple, assume that you have a value function $P(u)$ that describes how much you value $1$ token given you have $u$ tokens. Assume you have $X$ tokens, then we can describe the value of a change, $x$, in your portfolio as: $\int_X^{X+x} P(u)\ du$. If you paired 2 such integrations together, you would get: 
$$\int_X^{X+x} P(u) \ du = ∫_{Y-y}^Y P(u) \ du$$

Notice how each side of the equation is independent of the other side!

If we use $P(u) = \frac{1}{u}$, the equation becomes $\ln(X+x)-\ln(X)=\ln(Y)-\ln(Y-y)$ and solved for $y$ results in the equation $$y = \frac{Y · x}{X + x}$$
We just discovered that you can write the constant product AMM as 2 independent equations that can be computed on 2 different chains. The last argument to seal the deal, the one Vitalik described in **On Path Independence**, is very simple. It is given to us for free. Integrals are by definition path independent as long as the integrant is continuous (*a.e.*) which $P(u) = \frac{1}{u}$ is!

### On Integrals
Looking back, the rationale for using integrations as a pricing mechanism makes a lot of sense. By defining the CFMM based on the ideal price curve – which is its performance – instead of an abstract balance equation, you can get more easily digestable results. Any functions that is continous and decreasing can now be turned into a CFMM, even a cross-chain CFMM.

![Comparing price function divisions](@assets/images/img.svg)

The above picture shows that if you have a pricing function and wants to trade along it, you need to make each trade infinitesimal small to make the error 0. This is the purpose of the integral!

## Catalyst AMM

[CatalystAMM](https://catalyst.exchange) have been using these equations on mainnet for 4 months to swap between 3 chains, and soon you will be able to deploy own pools with these equations using either [Wormhole](https://wormhole.com) or [LayerZero](https://layerzero.network) as the messaging protocol to send the integration results cross-chain. 

If you are clever, you may have caught a mistake in the Path independence proof. Catalyst is live on 3 chains, but I only showed path independence on 2. That is for another day.