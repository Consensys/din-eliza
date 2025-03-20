# [bsc] pbs: enable GreedyMergeTx by default

- **Issue**: #2955
- **Status**: closed
- **Created**: 3/17/2025, 11:29:03 AM
- **Updated**: 3/17/2025, 10:33:11 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2955

## Description

### Description
"GreedyMergeTx" was introduced previously by https://github.com/bnb-chain/bsc/pull/2363/ to maximum the validator's reward and also increase the block space utilization rate.
It should be enabled by default, as it is a desired feature for validators.
And also clear up a duplicated log message.

> Notice: pls ignore the nancy check failure, as it will be fixed in https://github.com/bnb-chain/bsc/pull/2951
### Rationale
NA

### Changes
NA