# [bsc] Revert "internal/ethapi: remove td field from block (#30386)"

- **Issue**: #2836
- **Status**: closed
- **Created**: 12/30/2024, 9:29:07 PM
- **Updated**: 3/3/2025, 2:11:36 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2836

## Description

This reverts commit 40fd887df6812033f96941181549693d2cd5444d.

### Description

Revert "internal/ethapi: remove td field from block (#30386)"

### Rationale

`td` is not useful for ethereum EL, because the forkchoice is decide by CL.
but bsc still need the field `td` via rpc.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
