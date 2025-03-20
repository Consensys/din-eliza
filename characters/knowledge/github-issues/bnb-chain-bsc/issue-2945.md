# [bsc] Spaming in logs "Transaction too large to fit in OverflowPool"

- **Issue**: #2945
- **Status**: open
- **Created**: 3/11/2025, 5:09:57 PM
- **Updated**: 3/14/2025, 12:25:51 PM
- **URL**: https://github.com/bnb-chain/bsc/issues/2945

## Description

#### System information

Geth version: `geth version`
```
Geth
Version: 1.5.7
Firehose Tracer Protocol Version: fh 3.0
Git Commit: 58611d23e05a6f82eb0a618b8fffc07b4c1883c6
Git Commit Date: 20250306
Architecture: amd64
Go Version: go1.23.7
Operating System: linux
GOPATH=
GOROOT=
```

Flags

```
--datadir=/data --networkid=56 --http --http.api=admin,debug,eth,net,web3 --http.port=8545 --http.addr=0.0.0.0 --http.vhosts=* --history.transactions=1000 --syncmode=full --maxpeers=200 --tries-verify-mode=none --diffblock=5000 --cache=16384 --port=30303 --metrics --metrics.port 9100 --metrics.addr=10.0.1.216 --nat=extip:34.29.182.109 --vmtrace=firehose --ipcpath=/data/sf-data/reader/ipc
```

OS & Version: Linux
Commit hash : (if `develop`)

#### Expected behaviour

The logs are spammed by:

```
...
INFO [03-11|21:07:22.221] Imported new chain segment               number=47,381,870 hash=b222bb..67f2f4 miner=0xe7776De78740f28a96412eE5cbbB8f90896b11A5 blocks=1   txs=61    blobs=0  mgas=6.869   elapsed=78.039ms  mgasps=88.017  snapdiffs=6.42MiB triedirty=54.33MiB trieimutabledirty=0.00B
WARN [03-11|21:07:23.900] Transaction too large to fit in OverflowPool transaction=0x2df454f60728a059fffb16c9d4d8176bcf43b11a3dbcfdb57d7dfaf88659fc0b requiredSlots=1 maxSlots=0
WARN [03-11|21:07:23.985] Transaction too large to fit in OverflowPool transaction=0xa7903b236ca50529b344f93b78f5c1dd1fb7eb3536f7d4110e7928381e398b25 requiredSlots=1 maxSlots=0
WARN [03-11|21:07:24.016] Transaction too large to fit in OverflowPool transaction=0x6a6b4a611f0cffc50ffeeab6ebab3e61d444e1c7d753364aeaccbd4dd7c05368 requiredSlots=1 maxSlots=0
WARN [03-11|21:07:24.025] Transaction too large to fit in OverflowPool transaction=0x27cf515e6b194fd8e820e321a15ebf40a8e4f69d6ead6c49c3abcc2144e01eb0 requiredSlots=1 maxSlots=0
...
```

#### Actual behaviour

Spammed log is not present.

The syncing seems to be correct though, I'm not noting any problem so far.

#### Steps to reproduce the behaviour

Unclear, I simply sync BNB Mainnet with the version above (custom version of 1.5.7 having our vmtrace tracer). The changes are strictly minimal and should affect normal behavior of the node.

#### Backtrace
## Comments

This issue has 6 comments. View them at https://github.com/bnb-chain/bsc/issues/2945.

