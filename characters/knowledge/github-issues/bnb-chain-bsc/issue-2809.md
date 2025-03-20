# [bsc] refactor: remove outdated prune-block/pruneancient tool, implement it by tail-deletion

- **Issue**: #2809
- **Status**: open
- **Created**: 12/17/2024, 4:04:09 AM
- **Updated**: 3/17/2025, 11:47:52 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2809

## Description

### Description

This PR will remove prune-block/pruneancient tool, it can be replaced by tail-deletion, which is more easy & efficient for managing block history.

The PR will auto-detect the legacy offset metadata from db, and reset the tail metadata of freezer tables. So it's safe to run `--history.blocks` with the old pruneancient/prune-block feature.

### Changes

Notable changes: 
* misc: remove outdated prune-block tools
* chain: support new online prune block tool;
* freezer: remove prunedfreezer;
* freezer: support online prune by block history;
## Comments

This issue has 8 comments. View them at https://github.com/bnb-chain/bsc/pull/2809.

