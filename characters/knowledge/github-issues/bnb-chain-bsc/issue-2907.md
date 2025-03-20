# [bsc] go.mod: downgrade bls-eth-go-binary to make it same as the prysm-v5.0.0

- **Issue**: #2907
- **Status**: closed
- **Created**: 2/22/2025, 8:14:33 AM
- **Updated**: 2/24/2025, 1:30:51 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2907

## Description

### Description
To fix the windows binary panic issue,  check: https://github.com/bnb-chain/bsc/issues/2903

Meanwhile, it also updates some other dependencies:
- a.github.com/herumi/bls-eth-go-binary v1.31.0 -> v0.0.0-20210917013441-d37c07cfda4e
make it same as prysm-v5.0.3
- b.github.com/wealdtech/go-eth2-types: v2.8.2 -> v2.5.2
make it same as prysm-v5.0.3
- c.github.com/ferranbt/fastssz: v0.1.3 -> v0.0.0-20210120143747-11b9eff30ea9 
make it same as prysm-v5.0.3


### Rationale
NA

### Example
NA

### Changes
NA
## Comments

This issue has 2 comments. View them at https://github.com/bnb-chain/bsc/pull/2907.

