# [bsc] draft release v1.3.1

- **Issue**: #1928
- **Status**: closed
- **Created**: 10/17/2023, 10:29:46 PM
- **Updated**: 2/18/2025, 12:55:09 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/1928

## Description

## Description
Release v1.3.1 is another maintenance release, it mainly has these changes:
- 1.Support PBSS
- 2.Performance Improvement, it reduced the validation cost dramatically.
- 3.Dependency upgrade, especially upgrade Golang from v1.19 to v1.20 and several other dependencies.

### About PBSS
PBSS stands for: Path-Based-Storage-Scheme, which is used to optimize the MPT trie tree access, to improve its efficiency and also brings the inline state prune. You could refer this post on how it works: [Geth Path-Based Storage Model and Newly Inline State Prune](https://nodereal.io/blog/en/geth-path-based-storage-model-and-newly-inline-state-prune/)

Currently, PBSS is disabled by default, use this new flag to enable it: `--state.scheme path`
**Important**
Before use PBSS, you need to make sure your MPT storage in levelDB are already in PBSS format. There are 2 options to get the PBSS storage:
- 1.Full sync from genesis with the flag: `--state.scheme path`.  // Not recommend, could take 3 months to catch up the latest block.
- 2.Use the converting tool, refer: https://github.com/bnb-chain/bsc/pull/1882.  // Recommend, could take ~3 days to complete the MPT convert from HashBased to PBSS.

Another thing worth to note is that in the high-pressure situation of the BSC validator scenario, the `nodebuffer` disk writing of PBSS will become a performance bottleneck. We have optimized this and made the disk writing operation become asynchronous in the background by using `asynnodebuffer`.

## Change Log
FEATURE
* [\#1881](https://github.com/bnb-chain/bsc/pull/1881) feat: active pbss
* [\#1882](https://github.com/bnb-chain/bsc/pull/1882) cmd/geth: add hbss to pbss convert tool
* [\#1916](https://github.com/bnb-chain/bsc/pull/1916) feat: cherry-pick pbss patch commits from eth repo in v1.13.2
* [\#1939](https://github.com/bnb-chain/bsc/pull/1939) dependency: go version to 1.20 and some dependencies in go.mod
* [\#1955](https://github.com/bnb-chain/bsc/pull/1955) eth, trie/triedb/pathdb: pbss patches
* [\#1962](https://github.com/bnb-chain/bsc/pull/1962) cherry pick pbss patches from go-ethereum

BUGFIX
* [\#1923](https://github.com/bnb-chain/bsc/pull/1923) consensus/parlia: fix nextForkHash in Extra filed of block header
* [\#1950](https://github.com/bnb-chain/bsc/pull/1950) fix: 2 APIs of get receipt related
* [\#1951](https://github.com/bnb-chain/bsc/pull/1951) txpool: fix a potential crash issue in shutdown;
* [\#1963](https://github.com/bnb-chain/bsc/pull/1963) fix: revert trie commited flag after delete statedb mpt cache

IMPROVEMENT
* [\#1948](https://github.com/bnb-chain/bsc/pull/1948) performance: commitTire concurrently
* [\#1949](https://github.com/bnb-chain/bsc/pull/1949) code: remove accountTrieCache and storageTrieCache
* [\#1954](https://github.com/bnb-chain/bsc/pull/1954) trie: keep trie prefetch during validation phase

### Example
NA

### Compatibility
PBSS will have a new MPT storage scheme, although it is still based the Key/Value database, like LevelDB. HashBased storage could not use PBSS and vice versa.## Comments

This issue has 2 comments. View them at https://github.com/bnb-chain/bsc/pull/1928.

