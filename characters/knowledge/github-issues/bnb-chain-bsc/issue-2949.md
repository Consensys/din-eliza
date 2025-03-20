# [bsc] metrics: add more block/vote stats;

- **Issue**: #2949
- **Status**: closed
- **Created**: 3/12/2025, 2:21:57 AM
- **Updated**: 3/12/2025, 4:25:15 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2949

## Description

### Description

This PR will add more metrics for later shorter block interval. It can monitor the block/vote delay between validators, it help to monitor the validator network, and optimizes the p2p msg forward efficient.

### Example

Here are some metrics examples, it can help to optimize the network and find msg broadcast issues.

<img width="1665" alt="image" src="https://github.com/user-attachments/assets/05226470-1af3-410f-ab25-04c7d31ea175" />
<img width="834" alt="image" src="https://github.com/user-attachments/assets/ca76a708-255d-4b5b-b8a3-f63dc22e3027" />

### Changes

Notable changes: 
* metrics: add some block/vote metrics;
* ...
