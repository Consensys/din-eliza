# [bsc] Draft release v1.4.16

- **Issue**: #2767
- **Status**: closed
- **Created**: 11/25/2024, 2:11:10 AM
- **Updated**: 2/25/2025, 7:55:28 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2767

## Description

## Description
**v1.4.16** is a maintenance release, which mainly include:
- Fix a multi-DB bug, which failed to prune historical data from main db after BSC support 4844
- Add the code framework of BSC next hardfork: Pascal
- Systemcontract code cleanup, which is part of Pascal hard fork without a BEP.
- New feature: [overflowpool](https://github.com/bnb-chain/bsc/pull/2660), it tries to enhance the current TxPool to support large traffic.
-  Add some tool for trouble shoot, JSTool and PythonTool

## ChangeList
### BUGFIX
* [\#2736](https://github.com/bnb-chain/bsc/pull/2736) ethclient: move TransactionOpts to avoid import internal package;
* [\#2755](https://github.com/bnb-chain/bsc/pull/2755) fix: fix multi-db env
* [\#2759](https://github.com/bnb-chain/bsc/pull/2759) fix: add blobSidecars in db inspect
* [\#2764](https://github.com/bnb-chain/bsc/pull/2764) fix: add blobSidecars in db inspect

### FEATURE
* [\#2692](https://github.com/bnb-chain/bsc/pull/2692) feat: add pascal hardfork
* [\#2718](https://github.com/bnb-chain/bsc/pull/2718) feat: add Prague hardfork
* [\#2734](https://github.com/bnb-chain/bsc/pull/2734) feat: update system contract bytecodes of pascal hardfork
* [\#2737](https://github.com/bnb-chain/bsc/pull/2737) feat: modify LOCK_PERIOD_FOR_TOKEN_RECOVER to 300 seconds on BSC Testnet in pascal hardfork
* [\#2660](https://github.com/bnb-chain/bsc/pull/2660) core/txpool/legacypool: add overflowpool for txs
* [\#2754](https://github.com/bnb-chain/bsc/pull/2754) core/txpool: improve Add() logic, handle edge case

### IMPROVEMENT
* [\#2727](https://github.com/bnb-chain/bsc/pull/2727) core: clearup testflag for Bohr
* [\#2716](https://github.com/bnb-chain/bsc/pull/2716) minor Update group_prover.sage
* [\#2735](https://github.com/bnb-chain/bsc/pull/2735) concensus/parlia.go: make distribute incoming tx more independence
* [\#2742](https://github.com/bnb-chain/bsc/pull/2742) feat: remove pipecommit
* [\#2748](https://github.com/bnb-chain/bsc/pull/2748) jsutil: put all js utils in one file
* [\#2749](https://github.com/bnb-chain/bsc/pull/2749) jsutils: add tool GetKeyParameters
* [\#2756](https://github.com/bnb-chain/bsc/pull/2756) nancy: ignore github.com/golang-jwt/jwt/v4 4.5.0 in .nancy-ignore
* [\#2757](https://github.com/bnb-chain/bsc/pull/2757) util: python script to get stats of reorg
* [\#2758](https://github.com/bnb-chain/bsc/pull/2758) utils: print monikey for reorg script
* [\#2714](https://github.com/bnb-chain/bsc/pull/2714) refactor: Directly swap two variables to optimize code

### Changes
NA
