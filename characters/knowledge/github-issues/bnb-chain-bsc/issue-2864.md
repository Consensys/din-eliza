# [bsc] Subject: BSC Node Syncing Issue – Current Block Ahead of Highest Block

- **Issue**: #2864
- **Status**: closed
- **Created**: 1/23/2025, 3:19:08 AM
- **Updated**: 2/27/2025, 12:43:48 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2864

## Description

I am experiencing an issue with my Binance Smart Chain (BSC) full node while syncing. Below are the details of my setup and the issue encountered:

System Information
Geth version: Geth/v1.4.16-2df94c37-20241125/linux-amd64/go1.21.13
OS & Version: Linux (Ubuntu 22.04)
Commit hash: (if applicable)

Expected Behaviour
The node should sync properly, with the currentBlock value progressing until it matches the highestBlock.

Actual Behaviour
The currentBlock is ahead of the highestBlock, which is causing an unexpected sync state.

Command Output:
> eth.syncing.highestBlock - eth.syncing.currentBlock
-120
Syncing Details:

{
  currentBlock: 46012765,
  highestBlock: 46012644,
  startingBlock: 46012642,
  syncedAccounts: 0,
  txIndexFinishedBlocks: 603136,
  txIndexRemainingBlocks: 45409630
}


Steps to Reproduce the Behaviour

restarted bnb core


Observed the block difference using eth.syncing.
Checked peer count with admin.peers.length (90 peers connected).

Also we are facing this error: InvalidResponseError: Returned error: transaction indexing is in progress

## Comments

This issue has 6 comments. View them at https://github.com/bnb-chain/bsc/issues/2864.

