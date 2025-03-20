# [bsc] pbs: fix an inaccurate bid result log

- **Issue**: #2959
- **Status**: closed
- **Created**: 3/18/2025, 4:26:28 AM
- **Updated**: 3/18/2025, 4:44:02 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2959

## Description

### Description
This PR only change the misleading log, like:
```
t=2025-03-11T11:17:47+0000 lvl=info msg="[BID ARRIVED]" ...
...
t=2025-03-11T11:17:48+0000 lvl=info msg="Successfully sealed new block"...
t=2025-03-11T11:17:48+0000 lvl=info msg="[BID RESULT]" win=true[first]...
```
Sometimes "bestBid == nil" does not mean it is the first bid, if new block was just imported during the bid simulation, the bestBid will be cleared as well. In this case, the bid is stale and useless.

Keep the SetBestBid right now, as it will be cleared later anyway. Once we have more confidence, it can be removed


### Rationale
NA

### Example
NA

### Changes
NA