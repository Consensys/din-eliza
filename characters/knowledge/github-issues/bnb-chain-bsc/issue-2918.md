# [bsc] core/txpool/legacypool/legacypool.go: add gasTip check when reset

- **Issue**: #2918
- **Status**: closed
- **Created**: 2/25/2025, 3:20:29 AM
- **Updated**: 2/25/2025, 3:58:20 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2918

## Description

### Description
If we're reorging an old state, reinject all dropped transactions, there are MEV transaction have zero gas price. They should not add to the txpool.

### Rationale

tell us why we need these changes...

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
