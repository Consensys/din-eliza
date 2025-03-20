# [bsc] core/state: revert the interface of StateDB.Commit

- **Issue**: #2774
- **Status**: closed
- **Created**: 11/27/2024, 1:57:24 AM
- **Updated**: 3/3/2025, 2:14:34 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2774

## Description

### Description

core/state: revert the interface of StateDB.Commit

### Rationale

the param `postCommitFuncs` is used to work with pipecommit,
now the pipecommit feature is removed, so just delete it

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
