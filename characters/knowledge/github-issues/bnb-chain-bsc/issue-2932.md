# [bsc] BEP-520: Short Block Interval Phase One: 1.5 seconds

- **Issue**: #2932
- **Status**: closed
- **Created**: 3/3/2025, 10:18:29 PM
- **Updated**: 3/14/2025, 5:02:44 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2932

## Description

### Description

[BEP-520: Short Block Interval Phase One – 1.5 Seconds](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-520.md)

bytecode change for ValidatorContract can refer [feat: Short Block Interval Phase One – 1.5 Seconds for BEP-520](https://github.com/bnb-chain/bsc-genesis-contract/pull/618)

### Rationale

tell us why we need these changes...

### Example

add an example CLI or API response...

### Changes

1. Add support for Millisecond Representation in Block Header, allowing users to retrieve the new milliTimestamp field via RPC.
2. Increase the epoch length from 200 to 500. The transition occurs at the first block where Number % 500 == 0 after the Lorentz hard fork.
3. Increase `initialBackOffTime`
4. Adjust GasLimitBoundDivisor from 256 to 1024.
5. Double Blob MinBlocksForBlobRequests and introduce MinTimeDurationForBlobRequests to determine whether blob data is needed.
6. Trigger distributeFinalityReward every 200 blocks instead of every epoch.
7. update bytecode for ValidatorSetContract
8. Increase cache sizes for headerCacheLimit, tdCacheLimit, and inMemorySnapshots.
## Comments

This issue has 1 comments. View them at https://github.com/bnb-chain/bsc/pull/2932.

