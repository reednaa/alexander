---
title: Bitcoin is Delightfully Simple!
author: Alexander Lindgren
pubDatetime: 2024-10-02T20:15:00+02:00
slug: simple-bitcoin
featured: false
draft: false
tags:
  - bitcoin
description:
  I still love Bitcoin even though it has not changed since its inception.
---

After 9 years in the cryptocurrency space, from a Bitcoin maximalist, to Raiblocks (Nano) lover, to Ethereum fat chain proponent, to finally a multichain believer. I have seen Raiblocks complete their Proof of Captcha distribution, Ethereum migrated from PoW to PoS, and Solana grow into a vibrant ecosystem. Meanwhile, Bitcoin has not changed. It is still the same PoW chain, with the same script support, except witness data has been separated from the main blockchain.

I am a fan of simplicity. The single most important question for me when I am designing a protocol is *how can I make this simpler?* It is the same reason why I am a huge fan of CFMMs and the reason why Bitcoin still holds a special place in my heart. Let me explain.

## Bitcoin Block Validation

Each Bitcoin block contains a blockheader and a list of transaction. The blockheader further contains a version, the previous block hash, transaction merkle tree root, timestamp, difficulty bits, and lastly a proof of work scratch pad. To check if a block is valid, you need to do the following:

1. Is the difficulty bits set according to the network rules?
2. Is the hash of the blockheader smaller than indicated by the difficulty bits?
3. Is the previous block hash the head of your current chain?

If you stop here, you just created an SPV client. Notice how we never verified any transactions and could fully rely on the blockheader. (which is 80 bytes). This is possible because of the trust assumptions of PoW. Using merkle proofs, you can prove that a transaction was included in the Bitcoin blockchain. Notable, such a client requires 69 MB to store all blockheaders. If you instead stored the hashes, you would only require 28 MB. For context, at Solana’s current throughput it would take 4 seconds to post the entire light client on-chain. Let's continue with the block validation.

4. Is the time set correctly?

Mining pools can now switch over to building on the newly found block. They do this because if this is a valid block, any mining on the previous block is wasted and in the rare event someone got this far in validation and validation fails, they will waste more money than the mining pools. As no transactions have yet to be examined, any blocks mined at this moment will be empty.

5. Does the block's transactions’ hashes generate the merkle root?
6. Do all inputs refer to unspent outputs, and does all input scripts match the output scripts?

We have now fully validated a Bitcoin block. If you read as fast as me, in less than 2 minutes. Isn’t that unbelievable? Satoshi Nakamoto designed this scheme in 2008 and released it on the 3 January 2009, and it has not changed since then.

## Bitcoin is Beautiful

Proof of Work is what makes this entire scheme possible and beautiful. To generate a block header that passes the second verification step, you have to expend a lot of work. For comparison, to verify a blockheader you need to expend less energy than it takes to load this website. No other major cryptocurrency is this simple. Every time I use Bitcoin, it secretly makes me happy that I know the trick behind magic internet money.

Now you know as well.
