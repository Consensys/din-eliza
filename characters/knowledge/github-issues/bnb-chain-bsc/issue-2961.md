# [bsc] metric: add more block monitor metrics;

- **Issue**: #2961
- **Status**: closed
- **Created**: 3/19/2025, 5:34:09 AM
- **Updated**: 3/19/2025, 9:36:19 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2961

## Description

### Description

This PR will add new metrics about block txsize, gasused. It can help to monitor the traffic of the chain.

### Example

Add new metrics:
```bash
chain_insert_txsize{job=~"$jobs"}
chain_insert_gasused{job=~"$jobs"}
```

### Changes

Notable changes: 
* metric: add more block monitor metrics;
* ...
