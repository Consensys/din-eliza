# [bsc] Fast node sync is very very slow

- **Issue**: #2953
- **Status**: closed
- **Created**: 3/14/2025, 3:19:02 PM
- **Updated**: 3/18/2025, 4:28:44 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2953

## Description

#### System information

Geth version: `1.5.7-0449349b-20250228`
OS & Version: Linux
Commit hash : (if `develop`)

#### Expected behaviour
The fast node should be synced much more quickly


#### Actual behaviour
4 Days & it's on block number `7327673` at the time of opening the issue 

#### Steps to reproduce the behaviour
```sh
geth --config $BSC_CONFIG --datadir $DATA_DIR --rpc.allow-unprotected-txs --history.transactions 0 --tries-verify-mode none --state.scheme path --http --http.addr 0.0.0.0 --ws --ws.addr 0.0.0.0 --ws.port 8555 --http.api "eth, net, web3, txpool, parlia, debug" --ws.api "eth, net, web3, txpool, parlia, debug" --db.engine pebble --syncmode full --cache 20000 --verbosity 3
```

### PC Specs
14-Core CPU
48GB RAM
1 TB NVME SSD

Snapshot using: Fast node https://github.com/48Club/bsc-snapshots

#### Backtrace

````
[backtrace]
````


## Comments

This issue has 6 comments. View them at https://github.com/bnb-chain/bsc/issues/2953.

