# [bsc] eth/fetcher: remove light mode in block fetcher

- **Issue**: #2804
- **Status**: closed
- **Created**: 12/15/2024, 10:34:26 PM
- **Updated**: 3/3/2025, 2:12:33 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2804

## Description

### Description

eth/fetcher: remove light mode in block fetcher

### Rationale

bsc no longer support light client any more, so remove light mode in block fetcher.

by the way, in go-ethereum client, `BlockFetcher` has been removed totally, 
so changes in this PR will not cause more conflicts when do upstream.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
