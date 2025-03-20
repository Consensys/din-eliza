# [bsc] Draft release v1.4.12

- **Issue**: #2586
- **Status**: closed
- **Created**: 7/16/2024, 3:28:43 AM
- **Updated**: 2/18/2025, 10:17:25 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2586

## Description

## Description

it is a maintenance release with some bug fix and enhancement.

## Rationale
NA

## Changes

### BUGFIX
* [\#2557](https://github.com/bnb-chain/bsc/pull/2557) fix: fix state inspect error after pruned state
* [\#2562](https://github.com/bnb-chain/bsc/pull/2562) fix: delete unexpected block
* [\#2566](https://github.com/bnb-chain/bsc/pull/2566) core: avoid to cache block before wroten into db
* [\#2567](https://github.com/bnb-chain/bsc/pull/2567) fix: fix statedb copy
* [\#2574](https://github.com/bnb-chain/bsc/pull/2574) core: adapt highestVerifiedHeader to FastFinality
* [\#2542](https://github.com/bnb-chain/bsc/pull/2542) fix: pruneancient freeze from the previous position when the first time
* [\#2564](https://github.com/bnb-chain/bsc/pull/2564) fix: the bug of blobsidecars and downloader with multi-database
* [\#2582](https://github.com/bnb-chain/bsc/pull/2582) fix: remove delete and dangling side chains in prunefreezer

### FEATURE
* [\#2513](https://github.com/bnb-chain/bsc/pull/2513) cmd/jsutils: add a tool to get performance between a range of blocks
* [\#2569](https://github.com/bnb-chain/bsc/pull/2569) cmd/jsutils: add a tool to get slash count
* [\#2583](https://github.com/bnb-chain/bsc/pull/2583) cmd/jsutill: add log about validator name

### IMPROVEMENT
* [\#2546](https://github.com/bnb-chain/bsc/pull/2546) go.mod: update missing dependency
* [\#2559](https://github.com/bnb-chain/bsc/pull/2559) nancy: ignore go-retryablehttp@v0.7.4 in .nancy-ignore
* [\#2556](https://github.com/bnb-chain/bsc/pull/2556) chore: update greenfield cometbft version
* [\#2561](https://github.com/bnb-chain/bsc/pull/2561) tests: fix unstable test
* [\#2572](https://github.com/bnb-chain/bsc/pull/2572) core: clearup testflag for Cancun and Haber
* [\#2573](https://github.com/bnb-chain/bsc/pull/2573) cmd/utils: support use NetworkId to distinguish chapel when do syncing
* [\#2538](https://github.com/bnb-chain/bsc/pull/2538) feat: enhance bid comparison and reply bidding results && detail logs
* [\#2568](https://github.com/bnb-chain/bsc/pull/2568) core/vote: not vote if too late for next in turn validator
* [\#2576](https://github.com/bnb-chain/bsc/pull/2576) miner/worker: broadcast block immediately once sealed
* [\#2580](https://github.com/bnb-chain/bsc/pull/2580) freezer: Opt freezer env checking
