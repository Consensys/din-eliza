# [bsc] Feature: to optimise the current mining logic

- **Issue**: #2947
- **Status**: open
- **Created**: 3/11/2025, 6:24:20 PM
- **Updated**: 3/11/2025, 6:24:20 PM
- **URL**: https://github.com/bnb-chain/bsc/issues/2947

## Description

# Rationale
To follow the FF design more strictly, blocks of "no-turn-with-attestation" should be preferred over "in-turn-without-attestation".
It could avoid validator delay broadcast too much.

# Implementation
For a validator, during mining, it imported a block:
-  if it is a in-turn-with-attestation: stop minning
- if it is a in-turn-without-attestation: keep mining and collect votes, once enough vote to get the attestation, just broadcast the block to flip the imported one.

Notice: should be more cautious to check if it will bring more reorg or not first.