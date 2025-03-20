# [bsc-erigon] Erigon V3 - RunBook 

- **Issue**: #441
- **Status**: open
- **Created**: 7/16/2024, 3:50:02 AM
- **Updated**: 3/3/2025, 4:17:47 AM
- **URL**: https://github.com/node-real/bsc-erigon/issues/441

## Labels

- documentation

## Description

#### Latest State (2025.01.17)
 | | archive  | full   |  minimal  |
|-------|-------|-------|-------|
| Bsc   |  4.9T  | 2.2T   | 400G | 
| Chapel   |  450G  | *  | * | 



#### System Requirements
Bsc Archive: RAM > 32GB,  Disk > 5TB.
Chapel Archive: RAM > 16GB, Disk > 500GB.

Speed will benefit from bigger RAM and better CPU frequencies.  

#### Start Command 
```
./erigon --datadir=./data --chain=bsc(chapel) --port=30303 --http.port=8545 --authrpc.port=8551 --torrent.port=42069 --private.api.addr=127.0.0.1:9090 --http --ws --torrent.download.rate=1g --torrent.download.slots=400 --http.api=eth,debug,net,trace,web3,erigon,bsc,admin
```
#### Keep All Blobs (default is false).
`--bsc.blobSidecars.no-pruning=true`

#### Sync Mode
`--prune.mode=minimal` keep latest `100000` block and state(EIP-4444). 
`--prune.mode=full`  keep all blocks and latest `100000` block state
`--prune.mode=archive` the default sync mode

#### Experiment Fast-Node
 This will sync without calculate merkle root.  Save 350GB in Bsc and have better performance. 
```
## Remove commitment
./erigon seg rm-state --domain=commitment --datadir=./data
rm -rf datadir/chaindata
## Restart  with  env flag
ERIGON_DISCARD_COMMITMENT=true
```## Comments

This issue has 1 comments. View them at https://github.com/node-real/bsc-erigon/issues/441.

