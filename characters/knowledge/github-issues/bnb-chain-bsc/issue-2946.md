# [bsc] Feature: need a mechanism to cleanup long queued transactions

- **Issue**: #2946
- **Status**: open
- **Created**: 3/11/2025, 6:12:45 PM
- **Updated**: 3/11/2025, 6:12:57 PM
- **URL**: https://github.com/bnb-chain/bsc/issues/2946

## Description

# Rationale
There are many dungling transactions that are queued in txpool, these transactions are not executable due to nonce notch (they don't meet the nonce consistent requirement)


# Implementation
**Option-1:**
- mark the timestamp of when the transactions was queued
- for these accounts that have been queued for more than a certain threshold(1 day?), only keep the first queued tx in txpool, flush the others into database
- on node shutdown: put the queued transaction into database along with timestamp
- on node restart: reload these transactions with timestamp

Notice: this could eliminate lots of queued transactions, but did not solve the issue fundamentally. Welcome new ideas to address it, especially to avoid malicious attack by sending nonce-notch transactions.