# [bsc-erigon] Slow response time on debug_traceBlockByNumber

- **Issue**: #614
- **Status**: open
- **Created**: 2/17/2025, 2:39:34 PM
- **Updated**: 3/19/2025, 10:48:10 AM
- **URL**: https://github.com/node-real/bsc-erigon/issues/614

## Description

#### System information

Erigon version: Docker container `v1.3.0-beta1`
Storage: NVMe

OS & Version: Linux

Commit hash: `906a3e64826d4185d73e1e81278bc5e753d6e2fc6615b5a7b767f3e9718b64b5`

Erigon Command (with flags/config):
```
--chain=bsc
--torrent.verbosity=5
--datadir=/bsc_erigon_node
--port=30303 
--log.console.verbosity=3  
--authrpc.port=8551
--torrent.port=42069 
--private.api.addr=0.0.0.0:9090  
--http --http.addr 0.0.0.0 --http.port=8545
--ws 
--metrics --metrics.addr 0.0.0.0
--http.api=eth,debug,net,trace,web3,erigon,bsc  --http.vhosts  \"*\" 
```

Consensus Layer: embedded

Consensus Layer Command (with flags/config): embedded

Chain/Network: BSC

#### Expected behaviour
The response should be received within 1s
A similar Erigon ETH node, running on an identical server, responds within 0.4 second to the same request, even though the amount of returned data is five times smaller.

#### Actual behaviour
The response takes 25s
```
curl --request POST \
  --url http://localhost:8545/ \
  --header 'Content-Type: application/json' \
  --data '{"method":"debug_traceBlockByNumber","params":["0xB945B0", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}'
```
This issue is particularly noticeable when querying blocks in the range of 10 million to 13 million. On other historical blocks, the response time is also longer than that of the Erigon ETH node, but not as critical—response times are within 5 seconds. However, for the latest blocks, everything works fine and the response time is as expected. Additionally, when making a subsequent request for the same block, the data retrieval time is close to the expected value.

#### Steps to reproduce the behaviour
Run a request using the `debug_traceBlockByNumber` method.


#### Backtrace

````
[backtrace]
````
## Comments

This issue has 8 comments. View them at https://github.com/node-real/bsc-erigon/issues/614.

