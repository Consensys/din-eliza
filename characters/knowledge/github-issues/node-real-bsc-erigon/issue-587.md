# [bsc-erigon]  If  node  in the snapshot prune phase, the synchronization process will be affected, causing the block to lag behind

- **Issue**: #587
- **Status**: open
- **Created**: 1/2/2025, 6:47:42 AM
- **Updated**: 2/19/2025, 2:38:07 AM
- **URL**: https://github.com/node-real/bsc-erigon/issues/587

## Description

`version：bsc-erigon_v1.3.0-alpha7
ec2 instance:  i4i.4xlarge 
Startup parameter：/root/bsc-erigon/erigon \
--datadir="/root/node" \
--chain=bsc \
--port=30303 \
--http.port=8545 \
--authrpc.port=8551 \
--torrent.port=42069 \
--private.api.addr=127.0.0.1:9090 \
--http --ws \
--http.addr=0.0.0.0 \
--rpc.batch.limit=300 \
--http.vhosts=* \
--prune.mode=archive \
--prune.distance.blocks=900000 \
--prune.distance=900000 \
--http.api=eth,debug,net,trace,web3,erigon,bsc \
--nat=none`





issue： We have three Erigon nodes, but these nodes enter the snapshot prune phase simultaneously. During this phase, block synchronization is affected, causing the nodes to fall behind in block height. This situation lasts for approximately 17 minutes each time. Is there any way to mitigate this impact?
<img width="1487" alt="image" src="https://github.com/user-attachments/assets/71f61a8d-e18e-402f-85c3-11e4f14109ef" />
<img width="1781" alt="image" src="https://github.com/user-attachments/assets/19195267-95f8-4c87-9789-41157242009f" />




## Comments

This issue has 59 comments. View them at https://github.com/node-real/bsc-erigon/issues/587.

