# [bsc-erigon] eth_getStorageAt returns decode eror (hex string invalid)

- **Issue**: #618
- **Status**: closed
- **Created**: 2/20/2025, 8:18:49 AM
- **Updated**: 2/21/2025, 5:06:33 AM
- **URL**: https://github.com/node-real/bsc-erigon/issues/618

## Description

#### System information

Erigon version: 1.3.1-beta2-c73ac69c

OS & Version: Linux

Commit hash: `c73ac69c385987f58deb0d47c09dcc7d9cd2ea44`

Erigon Command (with flags/config):
```
     ExecStart=/usr/local/bin/erigon \
          --datadir=/data \
          --chain=chapel \
          --metrics \
          --metrics.addr=0.0.0.0 \
          --metrics.port=6060 \
          --pprof --pprof.addr=0.0.0.0 --pprof.port=6061 \
          --private.api.addr=0.0.0.0:9191 \
          --torrent.download.rate=1000mb \
          --db.size.limit=3400GB \
          --batchSize=4096M \
          --db.pagesize=16k \
         # for rpc
          --http \
          --http.port=8545 \
          --http.corsdomain=* \
          --http.api="eth,debug,net,trace,web3,erigon" \
          --http.trace=true \
          --http.addr=0.0.0.0 \
          --ws \
          --ws.port=8546
```

Consensus Layer: embedded

Chain/Network: BSC Chapel

#### Expected behaviour

returns json with:
`{"jsonrpc":"2.0","id":827040,"result":"0x0000000000000000000000000000000000000000000000000000000000000000"}`

#### Actual behaviour

`{"jsonrpc":"2.0","id":827040,"error":{"code":-32000,"message":"unable to decode storage key: hex string invalid"}}`

#### Steps to reproduce the behaviour

`curl -s http://localhost:8545 -X POST -H  "Content-Type: application/json"  --data '{"jsonrpc": "2.0", "method": "eth_getStorageAt", "id": 827040, "params": ["0xeED26748aC20B5Ff1781a0456aF1D55EB7f33d2F", "0x0", "latest"]}'`

#### Backtrace

````
erigon[220683]: [WARN] [02-20|13:17:21.617] [rpc] served                             conn=127.0.0.1:47044 method=eth_getStorageAt reqid=827040 err="unable to decode storage key: hex string invalid"
erigon[220683]: [INFO] [02-20|13:17:21.617] Served                                   conn=127.0.0.1:47044 method=eth_getStorageAt reqid=827040 params="[\"0x2a03a891add2dc6d0f7b94419086630ba5cb65b6\", \"0x0\", \"latest\"]"
````
## Comments

This issue has 1 comments. View them at https://github.com/node-real/bsc-erigon/issues/618.

