# [bsc-erigon] Corruption at prune stage [7/9 Execution Prune] for Normalized odd number of arguments by adding nil

- **Issue**: #619
- **Status**: closed
- **Created**: 2/21/2025, 5:53:31 AM
- **Updated**: 3/4/2025, 10:18:14 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/619

## Description

#### System information


Erigon version:  v1.3.0-beta1 

Erigon Command (with flags/config):

Consensus Layer: none

Consensus Layer Command (with flags/config): 
archive mode 

Chain/Network: bsc mainnet

#### Expected behaviour
works

#### Actual behaviour
```
 pruning table periodic progress ChangeSets3=blockNum LOG15_ERROR= LOG15_ERROR="Normalized odd number of arguments by adding nil"
```

#### Steps to reproduce the behaviour
after some io slowdown /stuck -> restart  -> move for stage7 -> stuck at post-stage7 pruning for above error -> if restart again would be moving &stuck again 

#### Backtrace

````
[backtrace]
````
## Comments

This issue has 1 comments. View them at https://github.com/node-real/bsc-erigon/issues/619.

