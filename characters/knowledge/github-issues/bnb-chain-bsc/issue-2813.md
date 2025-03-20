# [bsc] ethdb/pebble: roll back sync mode when write

- **Issue**: #2813
- **Status**: closed
- **Created**: 12/19/2024, 2:36:16 AM
- **Updated**: 3/3/2025, 2:14:43 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2813

## Description

### Description

ethdb/pebble: roll back sync mode when write

### Rationale

introduced by ‘[core, ethdb/pebble: run pebble in non-sync mode](https://github.com/ethereum/go-ethereum/pull/30573)’
roll back it for now, it may be enabled after more tests by storage team in the future.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
