# [bsc-erigon] High latency for method eth_feeHistory

- **Issue**: #628
- **Status**: closed
- **Created**: 2/28/2025, 4:13:39 PM
- **Updated**: 3/18/2025, 11:03:56 PM
- **URL**: https://github.com/node-real/bsc-erigon/issues/628

## Description

#### System information

Erigon version: v1.3.0-beta1

Erigon Command (with flags/config):

Chain/Network: `mainnet`, full and archival mode

#### Expected behaviour
Query `eth_feeHistory` on a public bsc mainnet endpoint and latency is low.
```
 curl -X POST -H "Content-Type: application/json" -d '{"id":1,"jsonrpc":"2.0","method":"eth_feeHistory","params":["0x50", "latest", [25,75]]}' https://bsc-dataseed.bnbchain.org 
```

#### Actual behaviour
`eth_feeHistory` calls against the erigon nodes I am running have very high latency. This is tested on full and archive mainnet nodes running v1.3.0-beta1. 

```
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"jsonrpc":"2.0","method":"eth_feeHistory","params":["0x50", "latest", [25,75]]}'
```
Latency is consistently 1-4 **seconds**.

The nodes sync well and have low latency for every other common eth method, with overprovisioned RAM and high speed NVMEs. 

#### Steps to reproduce the behaviour
Make eth_feeHistory request with a nontrivial number of requested blocks in the range. 
- At around 50 blocks requested, the latency is 1-4 seconds with the erigon node, whereas public endpoint is <20ms. 
- If 500 blocks, latency jumps to more than 15 seconds, whereas the public endpoint is <300ms.


#### Backtrace
N/A## Comments

This issue has 6 comments. View them at https://github.com/node-real/bsc-erigon/issues/628.

