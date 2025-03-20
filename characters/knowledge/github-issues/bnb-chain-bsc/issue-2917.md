# [bsc] error logs flood caused by removeAuthorities

- **Issue**: #2917
- **Status**: closed
- **Created**: 2/25/2025, 3:20:15 AM
- **Updated**: 2/28/2025, 12:51:40 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2917

## Description

when remove an non-SetCodeTxType transaction, error logs flood
```
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0xD5bf9221fCB1C31Cd1EE477a60c148d40dD63DC1 hash=0x626fdf205a5b1619deb2f9e51fed567353f80acbd522265b455daa0821c571d9
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0xc5098ce789965A19A17987e02b0F789E65A21F16 hash=0x626fdf205a5b1619deb2f9e51fed567353f80acbd522265b455daa0821c571d9
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0x563D4ADD8461dA7B617e0da08Bb096A0971DF49e hash=0x626fdf205a5b1619deb2f9e51fed567353f80acbd522265b455daa0821c571d9
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0xD5bf9221fCB1C31Cd1EE477a60c148d40dD63DC1 hash=0xe2cb74e63fec1d7a4ffc9fe3a39a1dc8a8fca4c752bb70037c24d286572967f9
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0xc5098ce789965A19A17987e02b0F789E65A21F16 hash=0xe2cb74e63fec1d7a4ffc9fe3a39a1dc8a8fca4c752bb70037c24d286572967f9
t=2025-02-25T03:11:06+0000 lvl=error msg="Authority with untracked tx" addr=0x563D4ADD8461dA7B617e0da08Bb096A0971DF49e hash=0xe2cb74e63fec1d7a4ffc9fe3a39a1dc8a8fca4c752bb70037c24d286572967f9## Comments

This issue has 2 comments. View them at https://github.com/bnb-chain/bsc/issues/2917.

