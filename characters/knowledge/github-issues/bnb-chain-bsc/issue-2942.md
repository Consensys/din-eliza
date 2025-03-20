# [bsc] refactor: use t.TempDir() instead of os.MkdirTemp

- **Issue**: #2942
- **Status**: open
- **Created**: 3/8/2025, 3:32:15 AM
- **Updated**: 3/14/2025, 9:56:39 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2942

## Description

### Description

`TempDir()` is a method introduced in Go 1.15 for `testing.T`. It automatically creates a temporary directory and cleans it up after the test is complete, eliminating the hassle of manually handling errors and cleanup.  More detail about TempDir  https://pkg.go.dev/testing#B.TempDir

### Rationale

tell us why we need these changes...

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
## Comments

This issue has 1 comments. View them at https://github.com/bnb-chain/bsc/pull/2942.

