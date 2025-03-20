# [bsc] rpc: close the connection after do requests

- **Issue**: #2858
- **Status**: closed
- **Created**: 1/17/2025, 2:32:25 AM
- **Updated**: 3/3/2025, 2:11:24 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2858

## Description

### Description

rpc: close the connection after do requests

### Rationale

it cause the sever report
```
"http: Accept error: accept tcp [::]:6060: accept4: too many open files; retrying in 640ms"
```

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
