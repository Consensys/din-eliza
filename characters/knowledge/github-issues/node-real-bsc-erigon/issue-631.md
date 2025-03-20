# [bsc-erigon] pruning table periodic progress ChangeSets3=blockNum LOG15_ERROR= LOG15_ERROR="Normalized odd number of arguments by adding nil"

- **Issue**: #631
- **Status**: closed
- **Created**: 3/3/2025, 10:58:53 PM
- **Updated**: 3/4/2025, 9:45:34 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/631

## Description

#### System information

Erigon version: `./erigon --version`
v1.3.3-rc1

OS & Version: Windows/Linux/OSX
Distributor ID: Ubuntu
Description:    Ubuntu 24.04.1 LTS
Release:        24.04
Codename:       noble

Erigon Command (with flags/config):
erigon --datadir=/data/node/erigon/data --prune.mode=archive --chain=bsc --db.pagesize=16k  --http  --ws --http.api=eth,debug,net,trace,web3,erigon  --http.addr=0.0.0.0 --authrpc.addr=0.0.0.0 --maxpeers=10 

#### Backtrace

````
[INFO] [03-04|03:41:07.543] [1/9 OtterSync] Requesting downloads 
[INFO] [03-04|03:41:07.670] [txpool] Started 
[WARN] [03-04|03:41:07.696] NAT ExternalIP resolution has failed, try to pass a different --nat option err="no UPnP or NAT-PMP router discovered"
[INFO] [03-04|03:41:07.811] Started P2P networking                   version=68 self=enode://951919ba67252e0e15cac0c5101a096dbe177a6c3959dcd49bd8a019f63c16a305f0d3b04384544ae9682a7350ae4bd910b9485fec6338834247e24928f490ba@127.0.0.1:30303 name=erigon/v1.3.3-rc1-85d0f2dd/linux-amd64/go1.23.6
[INFO] [03-04|03:41:25.307] [1/9 OtterSync] Downloading              progress="(2832/2832 files) 99.69% - 4.7TB/4.7TB" time-left=999hrs:99m total-time=18s download-rate=0B/s completion-rate=0B/s alloc=10.6GB sys=12.9GB
[INFO] [03-04|03:41:27.895] [1/9 OtterSync] Requesting downloads     
[INFO] [03-04|03:41:28.297] [snapshots:download] Stat                blocks=47.15M indices=47.15M alloc=10.8GB sys=12.9GB
[INFO] [03-04|03:41:28.363] [snapshots:history] Stat                 blocks=47.14M txs=6.97B txNum2blockNum="4096=43490K,4352=46138K,4416=46727K,4448=47006K,4456=47087K,4460=47131K,4462=47148K" first_history_idx_in_db=47148698 last_comitment_block=47148698 last_comitment_tx_num=6971875000 alloc=10.8GB sys=12.9GB 
[INFO] [03-04|03:41:32.885] [2/9 Headers] Waiting for headers...     from=47159305 hash=0x9fb02d3b015734bb97e55f53ca137d67f4cea156119b8a3cca01126750de1e86
[INFO] [03-04|03:41:33.225] [2/9 Headers] Processed                  highest=47159367 age=8s headers=62 in=0.341 blk/sec=181[INFO] [03-04|03:41:33.279] [5/9 Bodies] Processing bodies...        from=47159305 to=47159367
[INFO] [03-04|03:41:36.280] [5/9 Bodies] Processed                   highest=47159367 blocks=62 in=3.001 blk/sec=20
[INFO] [03-04|03:41:36.280] [6/9 Senders] Started                    from=47159305 to=47159367
[INFO] [03-04|03:41:36.393] [7/9 Execution] starting                 from=47159305 to=47159367 fromTxNum=6973223516 offsetFromBlockBeginning=0 initialCycle=true useExternalTx=false inMem=false
[INFO] [03-04|03:41:36.396] [7/9 Execution] starting                 from=47159306 to=47159367 fromTxNum=6973223517 offsetFromBlockBeginning=0 initialCycle=true useExternalTx=false
[INFO] [03-04|03:41:45.307] [1/9 OtterSync] Downloading complete     time=37.763634387s
[INFO] [03-04|03:41:56.750] [7/9 Execution]                          blk=47159334 blks=30 blk/s=1.5 txs=3575 tx/s=175 gas/s=20.94M buf=3.7MB/512.0MB stepsInDB=0.86 step=4462.9 inMem=false alloc=11.8GB sys=12.9GB
[INFO] [03-04|03:42:29.740] [7/9 Execution][agg] computing trie      progress=5.62k/29.56k alloc=12.7GB sys=13.1GB
[INFO] [03-04|03:42:49.734] [7/9 Execution][agg] computing trie      progress=12.75k/29.56k alloc=12.9GB sys=13.3GB
[INFO] [03-04|03:43:09.736] [7/9 Execution][agg] computing trie      progress=18.76k/29.56k alloc=13.2GB sys=13.5GB
[INFO] [03-04|03:43:29.734] [7/9 Execution][agg] computing trie      progress=25.47k/29.56k alloc=10.4GB sys=13.6GB 
[INFO] [03-04|03:44:05.307] [p2p] GoodPeers                          eth68=7
[INFO] [03-04|03:44:06.444] [mem] memory stats                       Rss=40.5GB Size=0B Pss=40.5GB SharedClean=14.7MB SharedDirty=0B PrivateClean=26.5GB PrivateDirty=14.0GB Referenced=28.8GB Anonymous=13.5GB Swap=0B alloc=10.7GB sys=13.6GB
[INFO] [03-04|03:44:07.561] [txpool] stat                            pending=0 baseFee=0 queued=0 alloc=10.7GB sys=13.6GB
[INFO] [03-04|03:44:13.708] [7/9 Execution] Done                     blk=47159367 blks=63 blk/s=0.4 txs=7473 tx/s=47 gas/s=5.45M buf=199.1MB/512.0MB stepsInDB=0.00 step=4462.9 inMem=false alloc=10.8GB sys=13.6GB
[INFO] [03-04|03:44:13.708] [7/9 Execution] DONE                     in=2m37.315986444s block=47159305
[INFO] [03-04|03:45:01.201] [7/9 Execution Prune] pruning table periodic progress ChangeSets3=blockNum LOG15_ERROR= LOG15_ERROR="Normalized odd number of arguments by adding nil"
[INFO] [03-04|03:47:05.307] [p2p] GoodPeers                          eth68=10
[INFO] [03-04|03:47:06.542] [mem] memory stats                       Rss=44.3GB Size=0B Pss=44.3GB SharedClean=13.5MB SharedDirty=0B PrivateClean=31.1GB PrivateDirty=13.2GB Referenced=32.1GB Anonymous=13.2GB Swap=0B alloc=10.9GB sys=13.6GB
[INFO] [03-04|03:47:07.561] [txpool] stat                            pending=2501 baseFee=0 queued=1810 alloc=10.9GB sys=13.6GB
[INFO] [03-04|03:50:05.308] [p2p] GoodPeers                          eth68=10
[INFO] [03-04|03:50:06.594] [mem] memory stats                       Rss=46.7GB Size=0B Pss=46.7GB SharedClean=13.5MB SharedDirty=0B PrivateClean=34.2GB PrivateDirty=12.4GB Referenced=33.9GB Anonymous=12.4GB Swap=0B alloc=10.5GB sys=13.6GB
[INFO] [03-04|03:50:07.563] [txpool] stat                            pending=4915 baseFee=0 queued=3299 alloc=10.5GB sys=13.6GB
[INFO] [03-04|03:53:05.307] [p2p] GoodPeers                          eth68=10
[INFO] [03-04|03:53:06.672] [mem] memory stats                       Rss=49.0GB Size=0B Pss=49.0GB SharedClean=13.5MB SharedDirty=0B PrivateClean=36.6GB PrivateDirty=12.4GB Referenced=35.2GB Anonymous=12.4GB Swap=0B alloc=11.3GB sys=13.6GB
[INFO] [03-04|03:53:07.561] [txpool] stat                            pending=7708 baseFee=0 queued=5366 alloc=11.3GB sys=13.6GB
````
