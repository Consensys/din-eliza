# [bsc] release: prepare for release v1.4.13

- **Issue**: #2632
- **Status**: closed
- **Created**: 8/7/2024, 3:40:31 AM
- **Updated**: 2/18/2025, 10:14:44 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2632

## Description

### Description
Release v1.4.13 is a **hard fork release for BSC Testnet**, the HF name is: [Bohr](https://forum.bnbchain.org/t/bnb-chain-roadmap-mainnet/936#h-5bohr-wip-26), there are 4 BEPs in Bohr:
- [BEP-341: Validators can produce consecutive blocks](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-341.md)
- [BEP-402: Complete missing fields in Block Header to generate Signature](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-402.md)
- [BEP-404: Clear Miner History when Switching Validators Set](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-404.md)
- [BEP-410: Add Agent for Validators](https://github.com/bnb-chain/BEPs/pull/410)

Among these BEPs, **BEP-341** holds the most significance as it proposes a change to the block production protocol. However, BEP-341 will only come into effect after the affirmative outcome of a governance vote.
And **BEP-402** updates the block header signature logic, please pay special attention if your product involves the logic of block header verification.
The other 2 BEPs, **BEP-404** and **BEP-410** are for some enhancement and unlikely to have compatibility issue.

The target Bohr hard fork time will be:
- Testnet: 2024-08-20 01:23:16 AM UTC
- Mainnet: it is not determined yet, target Later Sep 2024

### Change Log

**BUGFIX**
* [\#2602](https://github.com/bnb-chain/bsc/pull/2602) fix: prune-state when specify --triesInMemory 32
* [\#2579](https://github.com/bnb-chain/bsc/pull/00025790) fix: only take non-mempool tx to calculate bid price

**FEATURE**
* [\#2634](https://github.com/bnb-chain/bsc/pull/2634) config: setup Testnet Bohr hardfork date
* [\#2482](https://github.com/bnb-chain/bsc/pull/2482) BEP-341: Validators can produce consecutive blocks
* [\#2502](https://github.com/bnb-chain/bsc/pull/2502) BEP-402: Complete Missing Fields in Block Header to Generate Signature
* [\#2558](https://github.com/bnb-chain/bsc/pull/2558) BEP-404: Clear Miner History when Switching Validators Set
* [\#2605](https://github.com/bnb-chain/bsc/pull/2605) feat: add bohr upgrade contracts bytecode
* [\#2614](https://github.com/bnb-chain/bsc/pull/2614) fix: update stakehub bytecode after zero address agent issue fixed
* [\#2608](https://github.com/bnb-chain/bsc/pull/2608) consensus/parlia: modify mining time for last block in one turn
* [\#2618](https://github.com/bnb-chain/bsc/pull/2618) consensus/parlia: exclude inturn validator when calculate backoffTime
* [\#2621](https://github.com/bnb-chain/bsc/pull/2621) core: not record zero hash beacon block root with Parlia engine

**IMPROVEMENT**
* [\#2589](https://github.com/bnb-chain/bsc/pull/2589) core/vote: vote before committing state and writing block
* [\#2596](https://github.com/bnb-chain/bsc/pull/2596) core: improve the network stability when double sign happens
* [\#2600](https://github.com/bnb-chain/bsc/pull/2600) core: cache block after wroten into db
* [\#2629](https://github.com/bnb-chain/bsc/pull/2629) utils: add GetTopAddr to analyse large traffic
* [\#2591](https://github.com/bnb-chain/bsc/pull/2591) consensus/parlia: add GetJustifiedNumber and GetFinalizedNumber
* [\#2611](https://github.com/bnb-chain/bsc/pull/2611) cmd/utils: add new flag OverridePassedForkTime
* [\#2603](https://github.com/bnb-chain/bsc/pull/2603) faucet: rate limit initial implementation
* [\#2622](https://github.com/bnb-chain/bsc/pull/2622) tests: fix evm-test CI
* [\#2628](https://github.com/bnb-chain/bsc/pull/2628) Makefile: use docker compose v2 instead of v1

### Example
NA

### Compatibility
NA## Comments

This issue has 1 comments. View them at https://github.com/bnb-chain/bsc/pull/2632.

