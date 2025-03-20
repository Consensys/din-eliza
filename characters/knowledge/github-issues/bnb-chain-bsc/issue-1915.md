# [bsc] core/txpool: ignore nil sub when subpool have been shut down

- **Issue**: #1915
- **Status**: closed
- **Created**: 10/11/2023, 9:09:30 AM
- **Updated**: 2/18/2025, 12:55:59 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/1915

## Description

### Description

core/txpool: ignore nil sub when subpool have been shut down

### Rationale

keep continue subscribing result of txs, 
when stop geth, report error as following

```
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x2 addr=0x18 pc=0x1003ea414]

goroutine 25748 [running]:
github.com/ethereum/go-ethereum/event.JoinSubscriptions.func1.2({0x0?, 0x0?})
	github.com/ethereum/go-ethereum/event/multisub.go:34 +0x34
created by github.com/ethereum/go-ethereum/event.JoinSubscriptions.func1
	github.com/ethereum/go-ethereum/event/multisub.go:32 +0x8c
```

It's caused by nil subscription when subpool has been shut down.

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
