# [bsc] triedb/pathdb: fix nil field for stateSet

- **Issue**: #2827
- **Status**: closed
- **Created**: 12/25/2024, 9:02:15 PM
- **Updated**: 3/3/2025, 2:11:40 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2827

## Description

### Description

triedb/pathdb: fix nil field for stateSet

### Rationale
fix the issue [The Node panic by assignment to entry in nil map](https://github.com/bnb-chain/bsc/issues/2826)

decoding `stateSet` may be skipped, leading to nil field.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
