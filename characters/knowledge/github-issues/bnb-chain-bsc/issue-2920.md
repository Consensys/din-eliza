# [bsc] Urgent: "personal unlockAccount" Method Not Available on BSC Node

- **Issue**: #2920
- **Status**: open
- **Created**: 2/25/2025, 11:42:45 PM
- **Updated**: 3/10/2025, 3:18:24 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2920

## Description

I am currently running a BSC full node and have encountered an issue where the `personal.unlockAccount` method is not available. Despite enabling `allow-insecure-unlock` and including `"personal"` in the `HTTPModules` configuration, the method remains undefined in the Geth console.  

**Node Details:**  
- **Geth Version:** v1.5.6-847cef93-20250214  
- **Network:** BSC Mainnet (Chain ID: 56)  
- **Sync Mode:** Full  
- **HTTP API Enabled:** `admin, personal, eth, net, web3, txpool, parlia`  
- **Configuration:**  
  - `allow-insecure-unlock` enabled  
  - `HTTPModules` includes `"personal"`  
  - `WSPort` and `HTTPPort` properly configured  
  - start command: 
geth_linux --cache=8000 --config /opt/bsc/config.toml --datadir /opt/bsc/node --rpc.allow-unprotected-txs --http --maxpeers=500 --ws --syncmode=full --history.transactions=0 --allow-insecure-unlock --tries-verify-mode=none --db.engine=pebble --http.api "admin,personal,eth,net,web3,txpool,parlia"


log:

INFO [02-26|04:49:31.971] IPC endpoint opened                      url=/opt/bsc/node/geth.ipc
ERROR[02-26|04:49:31.972] Unavailable modules in HTTP API list     unavailable=[personal] available="[admin debug web3 eth txpool mev parlia miner net]"
INFO [02-26|04:49:31.972] HTTP server started                      endpoint=127.0.0.1:8545 auth=false prefix= cors= vhosts=localhost


Despite restarting the node and updating to the latest version, the issue persists. Could you please advise on resolving this problem? Any guidance or documentation references would be greatly appreciated.  

## Comments

This issue has 13 comments. View them at https://github.com/bnb-chain/bsc/issues/2920.

