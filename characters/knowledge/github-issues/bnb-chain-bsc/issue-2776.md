# [bsc] eth, eth/downloader: remove references to LightChain, LightSync

- **Issue**: #2776
- **Status**: closed
- **Created**: 11/27/2024, 10:25:21 PM
- **Updated**: 3/3/2025, 2:14:32 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2776

## Description

### Description

eth, eth/downloader: remove references to LightChain, LightSync

### Rationale

lightclient is not supported in bsc now, so we can remove `LightChain` and `LightSync `

in geth, this has been done
https://github.com/ethereum/go-ethereum/pull/29711

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
