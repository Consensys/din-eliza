# [bsc] core/txpool: accept SetCodeTxType transactions for test purpose

- **Issue**: #2821
- **Status**: closed
- **Created**: 12/22/2024, 9:53:22 PM
- **Updated**: 3/3/2025, 2:11:49 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2821

## Description

### Description

core/txpool: accept SetCodeTxType transactions for test purpose

### Rationale

support SetCodeTxType txs in pool is [not done ](https://github.com/ethereum/go-ethereum/pull/30949)

for testing, we follow [prague-devnet-4](https://github.com/ethereum/go-ethereum/compare/master...lightclient:go-ethereum:prague-devnet-4#diff-3b03ebf997a1699ce8e84a53a4b3981e403e74e2f90128eb188ad4226703970c): add it into legacypool for simplicity.


### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
