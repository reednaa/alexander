---
title: Interopability Integration Experiences
author: Alexander Lindgren
pubDatetime: 2024-09-30T18:00:00+02:00
slug: interopability-experiences
featured: false
draft: false
tags:
  - interopability
  - wormhole
  - layerzero
  - chainlink
  - hyperlane
  - polymer
description:
  Comparing messaging protocols, Wormhole, LayerZero, Chainlink's CCIP, Hyperlane, and Polymer from a builder's perspective
---
Today, more chains exist than ever before. More importantly, there are now major competing chain ecosystems. It doesn’t matter if you are a [Bitcoin](https://bitcoin.org/en/), [Ethereum](https://ethereum.org/), [Solana](https://solana.com), or [Ton](https://ton.org) maximalist, you must realize that each of these not only have a community but a community of chains. This is not the way to broad adoption, this is fragmentation. It infuriates users, and we risk turning an early proponent into a for life hostile opponent. With a good reason. The road forward requires interoperability to enable applications to be built natively cross-chain.

Building native cross-chain applications is not difficult. It just requires a new way of thinking and some courage. There is 1 hurdle you have to pass – which interoperability provider are you going to use? For now, let’s ignore security and talk about parameters that are easier to quantify: cost, complexity, flexibility, and contract integration speed. While most projects only integrate one cross-chain messaging protocol. At [Cata Labs](https://catalabs.org), I've scoped five integrations. Let me tell you my story from a builder’s perspective.

### LayerZero
[LayerZero](layerzero.network/) is convoluted and messy, even their own engineers have trouble understanding it. It is expensive, locked down, annoying configs, and relaying parameters. I could talk endlessly about design decisions I believe are directly detrimental to adoption. Nevertheless, LZ benefit from best in class network support making it the best candidate for applications that want to get on every chain. Especially upcoming chains where they often have day 1 support. LayerZero supports 85 chains. It took us 5 months to do the integration.

### Wormhole
[Wormhole](https://wormhole.com) is simple. Most verification is done by a single contract and after optimizing it, Wormhole is by far the cheapest. Wormhole is incredibly flexible because of the simple and easily auditable on-chain footprint. It makes for a delightful integration experience. Sadly, network support is poor and they are relatively slow to expand. Described this way, Wormhole is the polar opposite of LayerZero. Wormhole supports 45 chains. Wormhole was the first integration which caused it to take longer, it took us 20 days. If it was our second integration, it would probably have taken 4–5 days.

### Chainlink
[Chainlink](https://chain.link) is a walled garden. If you don’t build your application specifically for CCIP, it is unlikely to be compatible. You are beholden to Chainlink’s decisions, and there is nothing you can do about it. In a DeFI vs CeFi world, CCIP represents CeFi. Like any good tradfi company, they are incredibly slow to support new technologies at 15 supported chains. After extensive research, we found no integration path.

### Hyperlane
[Hyperlane](hyperlane.xyz) is a zoo. They support the widest range of validation mechanisms by using a simple approach: You specify what logic is used to validate messages. This is a double-edged sword: It is amazing for chain compatibility, but it also presents a problem: which mechanisms to use and where? Unlike the other protocols mentioned here, Hyperlane support permission-less deployments. This allows anyone to add Hyperlane though at significantly reduced security. In a way it feels like Hyperlane ends up trying to do everything but fails to do a single thing well. At varying levels of security, Hyperlane supports 58 chains. It took us 3 days to the contract integration.

### Polymer
[Polymer](https://www.polymerlabs.org) is different. The gold standard for cross-chain messaging – IBC – is written in the DNA of Polymer. Instead of chain IDs, Polymer use channels IDs. Instead of multisigs Polymer uses light clients. Light clients should make it more permissionless and more secure than competitors. As they aren't live on mainnet, it remains to see how the strategy will pay off. It took around 2 weeks to do the contract integration for testnet.

## Conclusion
At the end of the day, which one should you use? If you are unlikely to venture beyond Wormhole’s supported chains, I would choose Wormhole. If you need to be on the very edge and are willing to swim with closed eyes, LayerZero is likely a better choice for you. If you need a blue corporate hand holding you, you should choose CCIP.

Let me know if you are interested in a deep dive into how we integrated each protocol and the difficulties we experience along the way.
