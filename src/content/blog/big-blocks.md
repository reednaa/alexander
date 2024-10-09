---
title: An Argument for more than Big Blocks.
author: Alexander Lindgren
pubDatetime: 2024-10-09T18:00:00+02:00
slug: big-blocks
featured: false
draft: false
tags:
  - bitcoin
  - scaling
description:
  Meditating on the block size wars, home stakers, and how to scale block chains. 
---

The prior weeks have been oddly *nostalgic*. Solo stakers have argued that Ethereum needs to be light and everyone needs to be able to run a Validator. On the other hand, there are several extensions to Ethereum that would make Ethereum more competitive but requires increased hardware requirements.

## The Blocksize Wars

In 2015, Bitcoin was slowly but surely gaining more on-chain traction and if it continued, blocks would become full in 2017. Bitcoin was for payments and if that was the goal, full blocks would not suffice. Everyone understood that the path wasn’t sustainable. When I discovered the debate in late 2015, it was all about 8MB Bitcoin blocks. By adding 7 additional blocks worth of space to every block, the issue could be pushed several years into the future, and it would provide plenty of time for the community to find better scaling solutions. There was only problem 1 problem: Satoshi Nakamoto had hard-coded 1 MB blocks in Bitcoin Core, and it would require a hard fork to change it.

Like then and today, Bitcoin Nodes can be run on an incredibly low powered machine. Some are even capable of running it on Raspberry Pis. One fear was that increasing the requirements to run a node would make it more expensive to run, and only people with strong computers & data centers would be able to fully validate Bitcoin transactions. Instead, more people would rely on SPV clients that don’t validate that the block history is valid. Additionally, with Segwit technically scaling Bitcoin to 4 MB blocks and the lightning network to compress many transactions into 1 it was more deemed more important for the network to remain lightweight than to increase the blocksize. With the Bitcoin Cash fork and the countless other forks failing to catch on, big blockers lost the war.

Looking around the room, there is a plethora of chains and they all have hardware requirements that vary wildly. Bitcoin remains as lightweight as ever. Ethereum has slowly scaled by increasing the gas limit as clients have become more performant but can easily be run on an inexpensive Nuc. Solana went with the opposite approach and instead aims to use the best hardware available to provide as much performance as possible.

## For Big Blocks

I was and still am a proponent of big blocks for several reasons: I believe Bitcoin should scale along with both technology and client optimizations; larger blocks allows much broader use cases for scaling; current Bitcoin scaling solution like the Lightning Network requires at least 1 transaction for every single person; and the current block limit is not feasible to onboard everyone.

For the same reasons, I believe Ethereum should scale as performance increases. [Nethermind](https://github.com/NethermindEth/nethermind) recently released [v1.29.0](https://github.com/NethermindEth/nethermind/releases/tag/1.29.0#performance-improvements:~:text=Performance improvements) where they showed they can sustain ~790 MGas/s with a min of ~315.5 MGas/s on a high-end computer. Ethereum Mainnet averages 2.5 MGas/s with no missed slots. For context, 10’th gen Nuc i5 (which is often recommended for validators) has [1/10’th the performance of their workstation](https://www.cpubenchmark.net/compare/5031vs4759vs3542/AMD-Ryzen-9-7950X-vs-Intel-i5-1240P-vs-Intel-i5-10210U), which implies a sustained throughput of ~30 MGas/s.

### Scaling

Each protocol has chosen different ways to scale. Solana wants to be a be-all and end-all blockchain for compute by being on the bleeding edge. Bitcoin is hyper conservative such that if you build something on it, it should remain working as long as Bitcoin does. Ethereum is a general purpose VM that can be used to build almost anything on top, including rollups.

I don't believe Solana's path is the right one. Home validators / node runners are dedicated supporters that will fight for your chain. Solana validators is an exclusive and expensive club that you can't just easily join.
I don't believe Bitcoin's path is the right one. Being hyper conservative, including not even adopting small soft forks like OP_CAT activation, is detrimental to adoption as it limits what can be built.
I believe Ethereum's path is the right one. Every single home staker is someone that will always favor Ethereum over competitors. Not only do they know ever so slightly more about how Ethereum works, they are also activly contributing to Ethereum being decentralised. That makes them proud.