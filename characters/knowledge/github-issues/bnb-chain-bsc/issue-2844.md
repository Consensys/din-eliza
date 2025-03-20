# [bsc] internal/ethapi: support GetFinalizedBlock by common ratio validators

- **Issue**: #2844
- **Status**: closed
- **Created**: 1/6/2025, 2:26:20 AM
- **Updated**: 3/3/2025, 2:11:30 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2844

## Description

### Description

internal/ethapi: support GetFinalizedBlock by common ratio validators

### Rationale

the number of validators may change in one network,
and the number may be different in different networks.
but the user want to use the api `GetFinalizedBlock` at some fixed ratio of validators, such as opBNB.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
