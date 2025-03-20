# [bsc-erigon] Erigon BSC Testnet Rejected header marked as bad hash on v1.3.1-beta2

- **Issue**: #624
- **Status**: closed
- **Created**: 2/24/2025, 11:29:23 PM
- **Updated**: 2/26/2025, 9:39:34 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/624

## Description

#### System information
v1.3.1-beta2

Erigon Command (with flags/config):
```         
        - erigon
        - --chain=chapel
        - --datadir=/home/erigon/persistence/data
        - --http.addr=0.0.0.0
        - --rpc.accessList=/home/erigon/acl-config/acl.json
        - --rpc.batch.limit=1000
        - --rpc.txfeecap=100
        - --http.api=eth,erigon,web3,net,debug,txpool,trace
        - --http.vhosts=*
        - --http.corsdomain=null
        - --http
        - --ws
        - --db.pagesize=4096
        - --ethash.dagdir=/home/erigon/persistence/dag
        - --maxpeers=100
        - --identity=nd-xxx
        - --private.api.addr=0.0.0.0:9090
        - --private.api.ratelimit=31872
        - --rpc.returndata.limit=150000
        - --metrics
        - --metrics.addr=0.0.0.0
        - --healthcheck
        - --port=30303
        - --db.size.limit=1TB
        - --p2p.protocol=68
        - --rpc.batch.limit=1000
        - --bsc.blobSidecars.no-pruning=true
        - --prune.mode=archive
        - --staticpeers=enode://0637d1e62026e0c8685b1db0ca1c767c78c95c3fab64abc468d1a64b12ca4b530b46b8f80c915aec96f74f7ffc5999e8ad6d1484476f420f0c10e3d42361914b@52.199.214.252:30311,enode://df1e8eb59e42cad3c4551b2a53e31a7e55a2fdde1287babd1e94b0836550b489ba16c40932e4dacb16cba346bd442c432265a299c4aca63ee7bb0f832b9f45eb@52.51.80.128:30311,enode://dbcc5ec23bdf89243688321e8cfa8d80e17edce093206bcc6df998d8148385767cae3058a1c1e20c93c3b8e07962bc7a321deab0aa46c106283f1220f12c220a@3.209.122.123:30311,enode://665cf77ca26a8421cfe61a52ac312958308d4912e78ce8e0f61d6902e4494d4cc38f9b0dd1b23a427a7a5734e27e5d9729231426b06bb9c73b56a142f83f6b68@52.72.123.113:30311
        image: ghcr.io/node-real/bsc-erigon:v1.3.1-beta2
```

#### Expected behaviour
Node syncing fine

#### Actual behaviour
Node stopped syncing due to rejected header

### Logs
````
[WARN] [02-25|04:29:13.915] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:13.928] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:13.972] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:13.997] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.020] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.032] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.062] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.063] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.074] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
[WARN] [02-25|04:29:14.090] [downloader] InsertHeader: Rejected header marked as bad hash=0xbf5382ab1493a5751ec327b0a3fd815335daed664b5a2a174010bc954f6a0ae4 height=48577391
````
## Comments

This issue has 2 comments. View them at https://github.com/node-real/bsc-erigon/issues/624.

