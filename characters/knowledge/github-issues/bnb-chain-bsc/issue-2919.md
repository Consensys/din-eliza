# [bsc] miner: fix commitWork not interrupted properly

- **Issue**: #2919
- **Status**: closed
- **Created**: 2/25/2025, 9:31:38 PM
- **Updated**: 3/3/2025, 2:10:13 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2919

## Description

### Description

miner: fix commitWork not interrupted properly

### Rationale

a validator is mining block `N`, but not in turn.

an in turn block with Number `N` arrived, so a chainHeadCh event trigged.

but this validator is not allowed to mine block `N+1`,

in this senario, the `commitwork` for Number `N` will not be interrupted properly!

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
## Comments

This issue has 1 comments. View them at https://github.com/bnb-chain/bsc/pull/2919.

