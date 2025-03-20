# [bsc] consensus/parlia: improve performance of func IsSystemTransaction

- **Issue**: #2912
- **Status**: closed
- **Created**: 2/24/2025, 4:09:47 AM
- **Updated**: 3/3/2025, 2:10:28 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2912

## Description

### Description

consensus/parlia: improve performance of func IsSystemTransaction

### Rationale

when use v1.5.x to do benchmark before prague hardfork, strange things happen: the performance downgrades a lot.

Reason is that, when importing a block, for every txs, need to apply func `IsSystemTransaction`.

In func `IsSystemTransaction`, use `p.signer` which is a `pragueSigner`,

but when getting `Sender` for txs, use signer `cancunSigner`,

different type of signers lead to cache missing.

so in this PR, avoid to get sender in `IsSystemTransaction` when possible.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
