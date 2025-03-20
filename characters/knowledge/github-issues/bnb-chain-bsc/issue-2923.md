# [bsc] Prune ancient data doesn't work in case PathScheme or TrieDirtyDisabled

- **Issue**: #2923
- **Status**: closed
- **Created**: 2/26/2025, 5:03:45 PM
- **Updated**: 3/18/2025, 3:58:51 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2923

## Description

https://github.com/bnb-chain/bsc/blob/df229e7d8dedf87f5d4a54aa01b2467de6253c54/core/blockchain.go#L1828-L1836

In either of these two cases, we miss `rawdb.WriteSafePointBlockNumber`

So, which causes the ancient pruning check to fail

https://github.com/bnb-chain/bsc/blob/82e0d8c5b17de1c3c201c92f7d8f035280572715/core/rawdb/prunedfreezer.go#L269-L274
## Comments

This issue has 2 comments. View them at https://github.com/bnb-chain/bsc/issues/2923.

