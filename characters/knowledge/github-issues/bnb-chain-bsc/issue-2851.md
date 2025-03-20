# [bsc] eth/tracers: fix call nil OnSystemTxFixIntrinsicGas

- **Issue**: #2851
- **Status**: closed
- **Created**: 1/12/2025, 10:18:39 PM
- **Updated**: 3/3/2025, 2:11:27 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2851

## Description

### Description

eth/tracers: fix call nil OnSystemTxFixIntrinsicGas

### Rationale

1. FlatCallTracer.OnSystemTxFixIntrinsicGas=CallTracer.OnSystemTxFixIntrinsicGas
2. ensure OnSystemTxFixIntrinsicGas not equal to nil before call it
3. remove useless empty func `OnSystemTxFixIntrinsicGas` in noopTracer

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
