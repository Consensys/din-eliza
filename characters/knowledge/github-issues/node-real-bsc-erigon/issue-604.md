# [bsc-erigon] Sync failing to complete

- **Issue**: #604
- **Status**: closed
- **Created**: 2/5/2025, 10:58:33 AM
- **Updated**: 3/4/2025, 10:17:55 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/604

## Description

#### System information

Erigon version: Docker container `v1.3.0-beta1`

OS & Version: Linux

Commit hash: `906a3e64826d4185d73e1e81278bc5e753d6e2fc6615b5a7b767f3e9718b64b5`

Erigon Command (with flags/config):
```
--datadir="/data"
      --chain=bsc
      --port=30305
      --authrpc.port=8551
      --torrent.port=42069
      --private.api.addr=127.0.0.1:9090
      --http --http.addr=0.0.0.0 --http.port=8545
       --ws
      --metrics --metrics.addr=0.0.0.0 --metrics.port=6060
      --http.api=eth,debug,net,trace,web3,erigon,bsc
      --prune.mode=minimal
```

Consensus Layer: embedded

Consensus Layer Command (with flags/config): embedded

Chain/Network: BSC

#### Expected behaviour
Sync should complete and transition seamlessly to following the chain's head after reaching completion.

#### Actual behaviour
Sync worked fine, taking about 24h from an empty db to nearly the head of the chain.  Once it reached the head, it seems like erigon fails to transition from syncing to following the chain.  The client gets stuck in stage 2, collecting block headers until after a few hours it eventually progresses to stage 3 and catches up.

The sync progress graph demonstrates the normal-looking sync behaviour while it's catching up to the head of the chain, then the much slower sync progress sonce it's caught up.
![Image](https://github.com/user-attachments/assets/183b0f90-d0ed-4e54-8d9f-389150d3c6f0)

Erigon got within 50 blocks of the head of the chain, but seems to be waiting for sufficient heads before progressing to the next stage.  Because of this it switches between waiting in stage 2 to re-syncing to the head of the chain on a ~10h period.
![Image](https://github.com/user-attachments/assets/36a701e7-3b5c-4499-a56d-3df5d36ac906).

#### Steps to reproduce the behaviour
Run the below docker container from an empty DB.  About a day
```
services:
  erigon:
    image: ghcr.io/node-real/bsc-erigon:latest
    container_name: bsc_erigon
    restart: unless-stopped
    ports:
      - "30305:30305"   # P2P port (change if running multiple nodes)
      - "8552:8551"     # Auth RPC port
      - "8546:8545"     # HTTP JSON-RPC API
      - "42070:42069"   # Torrent port
      - "9091:9090"     # Private API
      - "6060:6060"     # Metrics port
    volumes:
      - ./data:/data   # Store blockchain data persistently
    environment:
      - CHAIN=bsc
    command: >
      --datadir="/data"
      --chain=bsc
      --port=30305
      --authrpc.port=8551
      --torrent.port=42069
      --private.api.addr=127.0.0.1:9090
      --http --http.addr=0.0.0.0 --http.port=8545
       --ws
      --metrics --metrics.addr=0.0.0.0 --metrics.port=6060
      --http.api=eth,debug,net,trace,web3,erigon,bsc
      --prune.mode=minimal
```

Once synced, it stays in stage 2 with the below logs for ~10h, then progresses to the remaining stages as normal.
```
[INFO] [02-05|15:57:05.883] [2/9 Headers] Wrote block headers        number=46396557 blk/second=0.333 alloc=12.0GB sys=23.5GB invalidHeaders=0 rejectedBadHeaders=0
[WARN] [02-05|15:57:05.883] [downloader] Added future link           hash=0x70d359360221f85dca483ea8bab28f99a549427a319659dfd7aa738b584ed347 height=46396558 timestamp=1738771028
[WARN] [02-05|15:57:05.886] [downloader] Added future link           hash=0x70d359360221f85dca483ea8bab28f99a549427a319659dfd7aa738b584ed347 height=46396558 timestamp=1738771028
[WARN] [02-05|15:57:06.887] [downloader] Added future link           hash=0x70d359360221f85dca483ea8bab28f99a549427a319659dfd7aa738b584ed347 height=46396558 timestamp=1738771028
[WARN] [02-05|15:57:06.904] [downloader] Added future link           hash=0x70d359360221f85dca483ea8bab28f99a549427a319659dfd7aa738b584ed347 height=46396558 timestamp=1738771028
[WARN] [02-05|15:57:06.904] [downloader] Added future link           hash=0x70d359360221f85dca483ea8bab28f99a549427a319659dfd7aa738b584ed347 height=46396558 timestamp=1738771028
```

#### Backtrace

````
[backtrace]
````
## Comments

This issue has 14 comments. View them at https://github.com/node-real/bsc-erigon/issues/604.

