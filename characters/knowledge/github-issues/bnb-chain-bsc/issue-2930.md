# [bsc] Draft release v1.5.7

- **Issue**: #2930
- **Status**: closed
- **Created**: 2/27/2025, 10:38:44 PM
- **Updated**: 2/28/2025, 6:07:33 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2930

## Description

## Description
v1.5.7 is for BSC mainnet [Pascal hard fork](https://forum.bnbchain.org/t/bnb-chain-roadmap-mainnet/936#p-1418-h-1pascal-wip-8), which will be enabled at: `2025-03-20 02:10:00 AM UTC`, all BSC mainnet nodes need to upgrade to v1.5.7 before the hard fork time. For this upgrade, simply binary replacement should be enough.

Besides hard fork, v1.5.7 also include one bugfix and some improvements:
- 1.fix the windows binary release, which is caused by a mismatched dependency.
- 2.increase the efficient GasLimit by reducing the gas reserved for systemTx, after v1.5.7 blocks can almost reach 140M GasLimit target now(previously it was 120M), which would increase the network throughput.
- 3.performance improvement by removing unnecessary signer recover code.
- 4.update the TxPool gastip check logic, so some zero-gasprice transactions that are added by block reorg will be dropped, it would be helpful to Megafuel.

## ChangeLog
v1.5.7 conduct small upstream code merge to follow the latest pectra hard fork and apply some bug fix. There are two PR for the code merge:
* [\#2897](https://github.com/bnb-chain/bsc/pull/2897) upstream: merge tag 'geth-v1.15.1' into bsc-develop
* [\#2926](https://github.com/bnb-chain/bsc/pull/2926) upstream: pick bug fix from latest geth

Besides code merge, there are also several important bugfix/improvements, and setup mainnet Pascal hard fork time:
### FEATURE
* [\#2928](https://github.com/bnb-chain/bsc/pull/2928) config: update BSC Mainnet hardfork date: Pascal & Praque

### BUGFIX
* [\#2907](https://github.com/bnb-chain/bsc/pull/0000) go.mod: downgrade bls-eth-go-binary to make it same as the prysm-v5.0.0

### IMPROVEMENT
* [\#2896](https://github.com/bnb-chain/bsc/pull/2896) consensus/parlia: estimate gas reserved for systemTxs
* [\#2912](https://github.com/bnb-chain/bsc/pull/2912) consensus/parlia: improve performance of func IsSystemTransaction
* [\#2916](https://github.com/bnb-chain/bsc/pull/2916) miner: avoid to collect requests when getting pending blocks
* [\#2913](https://github.com/bnb-chain/bsc/pull/2913) core/vm: add basic test cases for blsSignatureVerify
* [\#2918](https://github.com/bnb-chain/bsc/pull/2918) core/txpool/legacypool/legacypool.go: add gasTip check when reset
