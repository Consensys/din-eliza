# [bsc] ci: check generate and tidy in 'Build Test' ci

- **Issue**: #2794
- **Status**: closed
- **Created**: 12/10/2024, 3:06:59 AM
- **Updated**: 3/3/2025, 2:12:37 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2794

## Description

### Description

ci: do more test in build ci

### Rationale

do the following test in the build ci
```
check_tidy
check_generate
check_baddeps
```
if any one fails , the `Build Test` will fail
### Example

if some one forget to modify `gen_config.go` after modifying `eth/ethconfig/config.go`,
`Build Test` will fail now

if some one forget to do `go mod tidy` after change `go.mod`,
`Build Test` will also fail

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
