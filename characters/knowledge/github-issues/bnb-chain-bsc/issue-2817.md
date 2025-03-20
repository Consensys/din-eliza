# [bsc] metrics: fix Label type

- **Issue**: #2817
- **Status**: closed
- **Created**: 12/20/2024, 1:30:24 AM
- **Updated**: 3/3/2025, 2:14:45 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2817

## Description

### Description

metrics: fix Label type

### Rationale

type `Label` in metrics is only defined bsc,
after recently sync, the code of it is not compatible with other similar in metrics.
It lead to the info carried by the `lable` type is lost, this PR is to fix it.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
