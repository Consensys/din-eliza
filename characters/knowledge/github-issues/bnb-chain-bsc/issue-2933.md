# [bsc] metrics: add more peer, block/vote metrics

- **Issue**: #2933
- **Status**: closed
- **Created**: 3/4/2025, 9:13:14 AM
- **Updated**: 3/5/2025, 1:24:18 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2933

## Description

### Description

Currently, BSC lacks monitoring on node delay, block/vote and other message delays, especially the future implementation of BEP-520, which is more sensitive to delays.

This PR mainly adds two types of monitoring:

1. Monitor the network delay of connected nodes through ping messages, observe the network environment, and then optimize;
2. By printing the reception time of block/vote, determine the delay of core messages and optimize the message mechanism;

### Example

Here are some grafana examples:
1. peer latency
<img width="1645" alt="image" src="https://github.com/user-attachments/assets/ba437b10-2e26-4916-b8f6-aa49f22f4250" />

```bash
# query expression
p2p_peers_latency{quantile="0.95", job=~"$jobs"}
```

2. block/vote receive record
<img width="1250" alt="image" src="https://github.com/user-attachments/assets/fa73e1e2-c168-462a-8cb7-68eb85997797" />


```bash
# query expression
report_blocks{job=~"$jobs"}
```

You can also query peer latency data from admin API:
```bash
$ ./bsc attach --exec "admin.peers" ./geth.ipc | grep -E "enode|latency"
    enode: "enode://2e5a6c5d1760f1a6d07e117e3660468deb4ecd9aa62a9c371def3da1582b24da1d8cd0b3b013bdaaf35935a56566c68f9a08d742cc9e93d15dbfcd861b78ebcd@3.255.93.82:45076",
    latency: 101,
    enode: "enode://ca5890670f5148c80c2dea271c94a2b417668c3a1cf45c6027b2c42e4320a276887b803a3787d3a046435b924bd6671c1e95d14b5f99e1c24251fd7022179a1b@116.202.84.207:42272",
    latency: 129,
    enode: "enode://50ea9764dfc84e91c179e2e4e64fb6650f40dfbfd03e43ae185983ad240f626b746db99c8e4f00f7eba97da2870b524cc49346028b90c088b26fca8c630f7a42@115.79.195.171:34654",
    latency: 49,
...
```

### Changes

Notable changes: 
* p2p: estimate peer latency by ping;
* metrics: add metrics about recent blocks recv time;
