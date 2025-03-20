# [bsc-erigon] BSC Chapel Archive stuck with [2/9 Headers] No block headers to write on different blocks

- **Issue**: #603
- **Status**: closed
- **Created**: 2/4/2025, 7:17:00 AM
- **Updated**: 2/25/2025, 10:28:29 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/603

## Description

#### System information
Erigon version: erigon version 1.3.0-beta1-95aaa15alogs
OS & Version: Linux Kubernetes

**Erigon Command (with flags/config)**
```
erigon \
  --chain=chapel \
  --datadir=/home/erigon/persistence/data \
  --http.addr=0.0.0.0 \
  --rpc.accessList=/home/erigon/acl-config/acl.json \
  --rpc.batch.limit=1000 \
  --rpc.txfeecap=100 \
  --http.api=eth,erigon,web3,net,debug,txpool,trace \
  --http.vhosts=* \
  --http.corsdomain=null \
  --http \
  --ws \
  --db.pagesize=4096 \
  --ethash.dagdir=/home/erigon/persistence/dag \
  --identity=nd-xxx-xxx-xxx \
  --private.api.addr=0.0.0.0:9090 \
  --private.api.ratelimit=31872 \
  --rpc.returndata.limit=150000 \
  --metrics \
  --metrics.addr=0.0.0.0 \
  --healthcheck \
  --port=30303 \
  --db.size.limit=1TB \
  --p2p.protocol=68 \
  --rpc.batch.limit=1000 \
  --bsc.blobSidecars.no-pruning=true \
  --prune.mode=archive
  --log.console.verbosity=debug
```

**Consensus Layer
Consensus Layer Command (with flags/config)**
N/A

**Chain/Network**
BSC Chapel

#### Expected behaviour
Erigon should sync properly and write block headers.

#### Actual behaviour
Facing No block headers issue on different blocks

#### Steps to reproduce the behaviour
1. Start Erigon with the provided flags on the Chapel network to sync from scratch.

#### Steps to troubleshoot
1. Restarting the nodes multiple times, deleting all the data and resyncing from scratch.
2. Unwind stage_exec and stage_headers:
```
integration stage_exec --chain chapel --unwind 1000 --datadir /home/erigon/persistence/data  
integration stage_headers --unwind 1000 --chain chapel  
```

Sometimes this helped, but eventually, the node stopped syncing at stage 2 with different block

#### Backtrace
````
Defaulted container "erigon" out of: erigon, generate-keys (init)
[DBUG] [02-04|12:02:55.734] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:03:06.870] [txpool] Commit                          written_kb=0 in=6.071234ms
[DBUG] [02-04|12:03:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=11
[DBUG] [02-04|12:03:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=10
[DBUG] [02-04|12:03:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=12 static=6 i/o timeout=3
[DBUG] [02-04|12:03:22.592] [txpool] Commit                          written_kb=0 in=4.800749ms
[INFO] [02-04|12:03:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=5.3GB sys=5.7GB invalidHeaders=0 rejectedBadHeaders=0
[DBUG] [02-04|12:03:35.736] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:03:38.315] [txpool] Commit                          written_kb=0 in=4.819023ms
[DBUG] [02-04|12:03:49.241] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:03:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[DBUG] [02-04|12:03:54.038] [txpool] Commit                          written_kb=0 in=4.843881ms
[DBUG] [02-04|12:04:09.761] [txpool] Commit                          written_kb=0 in=4.953605ms
[DBUG] [02-04|12:04:10.741] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:04:19.731] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=23
[DBUG] [02-04|12:04:19.731] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=23 static=6 i/o timeout=5
[DBUG] [02-04|12:04:19.733] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=20
[INFO] [02-04|12:04:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[DBUG] [02-04|12:04:25.484] [txpool] Commit                          written_kb=0 in=4.50097ms
[DBUG] [02-04|12:04:41.208] [txpool] Commit                          written_kb=0 in=4.942952ms
[DBUG] [02-04|12:04:45.746] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:04:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:04:52.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:04:52.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:04:56.937] [txpool] Commit                          written_kb=0 in=10.080062ms
[DBUG] [02-04|12:05:01.498] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:05:12.662] [txpool] Commit                          written_kb=0 in=12.025079ms
[WARN] [02-04|12:05:16.228] [p2p] No GoodPeers 
[INFO] [02-04|12:05:16.375] [mem] memory stats                       Rss=7.4GB Size=0B Pss=7.3GB SharedClean=53.8MB SharedDirty=0B PrivateClean=1.5GB PrivateDirty=5.8GB Referenced=5.4GB Anonymous=5.8GB Swap=0B alloc=3.6GB sys=5.8GB
[INFO] [02-04|12:05:19.695] [txpool] stat                            pending=0 baseFee=0 queued=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:05:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=34 static=6 i/o timeout=7
[DBUG] [02-04|12:05:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=30
[DBUG] [02-04|12:05:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=35
[DBUG] [02-04|12:05:20.753] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:05:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.7GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:05:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.7GB sys=5.8GB
[DBUG] [02-04|12:05:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:05:28.378] [txpool] Commit                          written_kb=0 in=4.613503ms
[DBUG] [02-04|12:05:44.102] [txpool] Commit                          written_kb=0 in=6.28667ms
[INFO] [02-04|12:05:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:05:52.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:05:52.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:05:55.759] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:05:59.823] [txpool] Commit                          written_kb=0 in=4.516203ms
[DBUG] [02-04|12:06:13.754] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:06:15.547] [txpool] Commit                          written_kb=0 in=4.29322ms
[DBUG] [02-04|12:06:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=35
[DBUG] [02-04|12:06:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=41 static=6 i/o timeout=10
[DBUG] [02-04|12:06:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=47
[INFO] [02-04|12:06:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:06:22.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:06:22.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:06:31.270] [txpool] Commit                          written_kb=0 in=4.967402ms
[DBUG] [02-04|12:06:35.764] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:06:46.994] [txpool] Commit                          written_kb=0 in=5.210587ms
[INFO] [02-04|12:06:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:06:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:06:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:07:02.718] [txpool] Commit                          written_kb=0 in=6.344283ms
[DBUG] [02-04|12:07:15.768] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:07:18.440] [txpool] Commit                          written_kb=0 in=5.400409ms
[DBUG] [02-04|12:07:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=45
[DBUG] [02-04|12:07:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=59
[DBUG] [02-04|12:07:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=53 static=6 i/o timeout=12
[INFO] [02-04|12:07:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.7GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:07:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.7GB sys=5.8GB
[DBUG] [02-04|12:07:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:07:26.012] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:07:34.163] [txpool] Commit                          written_kb=0 in=4.583865ms
[DBUG] [02-04|12:07:49.887] [txpool] Commit                          written_kb=0 in=4.646906ms
[INFO] [02-04|12:07:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:07:52.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:07:52.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:07:55.771] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:08:05.609] [txpool] Commit                          written_kb=0 in=4.45726ms
[WARN] [02-04|12:08:16.228] [p2p] No GoodPeers 
[INFO] [02-04|12:08:16.351] [mem] memory stats                       Rss=6.1GB Size=0B Pss=6.0GB SharedClean=53.8MB SharedDirty=0B PrivateClean=1.5GB PrivateDirty=4.5GB Referenced=5.2GB Anonymous=4.5GB Swap=0B alloc=3.5GB sys=5.8GB
[INFO] [02-04|12:08:19.695] [txpool] stat                            pending=0 baseFee=0 queued=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:08:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=65 static=6 i/o timeout=15
[DBUG] [02-04|12:08:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=55
[DBUG] [02-04|12:08:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=71
[DBUG] [02-04|12:08:21.333] [txpool] Commit                          written_kb=0 in=4.623554ms
[INFO] [02-04|12:08:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:08:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:08:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:08:30.776] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:08:37.057] [txpool] Commit                          written_kb=0 in=5.250164ms
[DBUG] [02-04|12:08:38.271] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:08:52.780] [txpool] Commit                          written_kb=0 in=5.1154ms
[INFO] [02-04|12:08:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:08:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:08:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:09:08.502] [txpool] Commit                          written_kb=0 in=4.444858ms
[DBUG] [02-04|12:09:15.782] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:09:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=72 static=6 i/o timeout=18
[DBUG] [02-04|12:09:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=83
[DBUG] [02-04|12:09:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=60
[INFO] [02-04|12:09:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:09:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:09:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:09:24.225] [txpool] Commit                          written_kb=0 in=4.323115ms
[DBUG] [02-04|12:09:39.949] [txpool] Commit                          written_kb=0 in=4.905737ms
[DBUG] [02-04|12:09:50.530] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:09:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:09:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:09:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:09:55.673] [txpool] Commit                          written_kb=0 in=5.193684ms
[DBUG] [02-04|12:09:55.788] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:10:11.396] [txpool] Commit                          written_kb=0 in=4.663199ms
[DBUG] [02-04|12:10:19.731] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=95
[DBUG] [02-04|12:10:19.731] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=83 static=6 i/o timeout=20
[DBUG] [02-04|12:10:19.733] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=70
[INFO] [02-04|12:10:22.830] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:10:22.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:10:22.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:10:27.119] [txpool] Commit                          written_kb=0 in=4.62463ms
[DBUG] [02-04|12:10:35.791] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:10:42.842] [txpool] Commit                          written_kb=0 in=4.358414ms
[INFO] [02-04|12:10:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:10:52.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:10:52.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:10:58.566] [txpool] Commit                          written_kb=0 in=4.900109ms
[DBUG] [02-04|12:11:02.788] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:11:10.796] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:11:14.288] [txpool] Commit                          written_kb=0 in=5.139733ms
[WARN] [02-04|12:11:16.228] [p2p] No GoodPeers 
[INFO] [02-04|12:11:16.352] [mem] memory stats                       Rss=6.0GB Size=0B Pss=6.0GB SharedClean=53.8MB SharedDirty=0B PrivateClean=1.5GB PrivateDirty=4.4GB Referenced=5.2GB Anonymous=4.4GB Swap=0B alloc=3.6GB sys=5.8GB
[INFO] [02-04|12:11:19.695] [txpool] stat                            pending=0 baseFee=0 queued=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:11:19.731] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=107
[DBUG] [02-04|12:11:19.731] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=94 static=6 i/o timeout=22
[DBUG] [02-04|12:11:19.733] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=80
[INFO] [02-04|12:11:22.828] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:11:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:11:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:11:30.011] [txpool] Commit                          written_kb=0 in=4.807619ms
[DBUG] [02-04|12:11:45.735] [txpool] Commit                          written_kb=0 in=5.368547ms
[DBUG] [02-04|12:11:50.799] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:11:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:11:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:11:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:12:01.462] [txpool] Commit                          written_kb=0 in=9.333088ms
[DBUG] [02-04|12:12:15.045] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:12:17.181] [txpool] Commit                          written_kb=0 in=5.025524ms
[DBUG] [02-04|12:12:19.719] Couldn't add port mapping                proto=udp extport=30303 intport=30303 interface="UPnP or NAT-PMP" err="no UPnP or NAT-PMP router discovered"
[DBUG] [02-04|12:12:19.719] Couldn't add port mapping                proto=tcp extport=30303 intport=30303 interface="UPnP or NAT-PMP" err="no UPnP or NAT-PMP router discovered"
[DBUG] [02-04|12:12:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=90
[DBUG] [02-04|12:12:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=119
[DBUG] [02-04|12:12:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=106 static=6 i/o timeout=25
[INFO] [02-04|12:12:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:12:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:12:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:12:30.804] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:12:32.905] [txpool] Commit                          written_kb=0 in=5.611664ms
[DBUG] [02-04|12:12:48.639] [txpool] Commit                          written_kb=0 in=16.34706ms
[INFO] [02-04|12:12:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:12:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:12:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:13:04.350] [txpool] Commit                          written_kb=0 in=4.290515ms
[DBUG] [02-04|12:13:05.809] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:13:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=113 static=6 i/o timeout=27
[DBUG] [02-04|12:13:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=131
[DBUG] [02-04|12:13:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=94 closed by remote=1
[DBUG] [02-04|12:13:20.074] [txpool] Commit                          written_kb=0 in=4.511877ms
[INFO] [02-04|12:13:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:13:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:13:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:13:27.304] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:13:35.797] [txpool] Commit                          written_kb=0 in=4.734521ms
[DBUG] [02-04|12:13:40.813] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:13:51.521] [txpool] Commit                          written_kb=0 in=5.662044ms
[INFO] [02-04|12:13:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:13:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:13:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:14:07.244] [txpool] Commit                          written_kb=0 in=5.646444ms
[WARN] [02-04|12:14:16.227] [p2p] No GoodPeers 
[INFO] [02-04|12:14:16.371] [mem] memory stats                       Rss=6.0GB Size=0B Pss=6.0GB SharedClean=53.7MB SharedDirty=0B PrivateClean=1.5GB PrivateDirty=4.4GB Referenced=5.2GB Anonymous=4.4GB Swap=0B alloc=3.5GB sys=5.8GB
[INFO] [02-04|12:14:19.694] [txpool] stat                            pending=0 baseFee=0 queued=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:14:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=125 static=6 i/o timeout=30
[DBUG] [02-04|12:14:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=143
[DBUG] [02-04|12:14:19.732] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 closed by remote=1 EOF=104
[DBUG] [02-04|12:14:20.818] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:14:22.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.5GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:14:22.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.5GB sys=5.8GB
[DBUG] [02-04|12:14:22.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:14:22.967] [txpool] Commit                          written_kb=0 in=4.552058ms
[DBUG] [02-04|12:14:38.689] [txpool] Commit                          written_kb=0 in=3.873061ms
[DBUG] [02-04|12:14:39.561] QuerySeeds read nodes from the node DB   count=0
[INFO] [02-04|12:14:52.829] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:14:52.829] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:14:52.829] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:14:54.413] [txpool] Commit                          written_kb=0 in=5.234279ms
[DBUG] [02-04|12:14:55.822] QuerySeeds read nodes from the node DB   count=0
[DBUG] [02-04|12:15:10.136] [txpool] Commit                          written_kb=0 in=4.733003ms
[DBUG] [02-04|12:15:19.732] [p2p] Discovery table                    protocol=68 version=v4 len=0 live=0 unsol=0 ips=0 db=0 reval=155
[DBUG] [02-04|12:15:19.732] [p2p] Dial scheduler                     protocol=68 peers=0/10 tried=137 static=6 i/o timeout=33
[DBUG] [02-04|12:15:19.733] [p2p] Server                             protocol=68 peers=0 trusted=0 inbound=0 EOF=114 closed by remote=1
[INFO] [02-04|12:15:22.830] [2/9 Headers] No block headers to write in this log period number=47843212 blk/second=0.000 alloc=3.6GB sys=5.8GB invalidHeaders=0 rejectedBadHeaders=0
[INFO] [02-04|12:15:22.830] Req/resp stats                           req=0 reqMin=0 reqMax=0 skel=0 skelMin=0 skelMax=0 resp=0 respMin=0 respMax=0 dups=0 alloc=3.6GB sys=5.8GB
[DBUG] [02-04|12:15:22.830] [downloader] Queue sizes                 anchors=0 links=0 persisted=65536
[DBUG] [02-04|12:15:25.860] [txpool] Commit                          written_kb=0 in=5.351683ms
````
## Comments

This issue has 10 comments. View them at https://github.com/node-real/bsc-erigon/issues/603.

