# [bsc] cherry pick pbss patches from go-ethereum

- **Issue**: #1962
- **Status**: closed
- **Created**: 11/3/2023, 12:13:34 AM
- **Updated**: 2/24/2025, 10:49:47 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/1962

## Description

### Description

   * [eth, trie/triedb/pathdb: reallocate excess memory to clean cache #27964](https://github.com/ethereum/go-ethereum/pull/27964/commits), Adjust the cache size settings according to the configuration to use pathdb more reasonably.
   * [trie/triedb/pathdb: improve dirty node flushing trigger #28426](https://github.com/ethereum/go-ethereum/pull/28426), added precautions for flushing nodebuffer to ensure the reliability of state data

### Rationale

N/A

### Example

N/A


### Changes

Notable changes: 

N/A

