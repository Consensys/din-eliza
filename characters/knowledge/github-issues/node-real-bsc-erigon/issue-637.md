# [bsc-erigon] eth_feehistory: fix high latency feehistory

- **Issue**: #637
- **Status**: closed
- **Created**: 3/11/2025, 2:31:00 AM
- **Updated**: 3/11/2025, 4:10:36 AM
- **URL**: https://github.com/node-real/bsc-erigon/pull/637

## Description

Currently, a significant amount of time is spent on re-executing transactions. However, in reality, only the gasused by the transaction is needed, which can be obtained through the ` kv.ReceiptDomain`
After this pr, time from 117s -> 119ms
![feehcpu](https://github.com/user-attachments/assets/945d39b8-a6f1-4be7-b5fc-b966298011eb)
