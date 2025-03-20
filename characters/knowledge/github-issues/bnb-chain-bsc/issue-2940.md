# [bsc] vdn: impl msg specs, support block/vote biz logic

- **Issue**: #2940
- **Status**: open
- **Created**: 3/7/2025, 2:33:25 AM
- **Updated**: 3/7/2025, 4:33:00 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2940

## Description

### Description

This PR implements all BEP-525 msg specs, and support basic block/vote gossip msg business logic. The VDN can sync new blocks, and aggregate votes successfully now.

It also adds some abstract for gossip/RPC msg handler. see `vdn/interfaces.go`.

Now, you can use https://github.com/bnb-chain/node-deploy/tree/support-vdnp2p to setup a vdn-only cluster in local for testing.

### Changes

Notable changes: 
* vdn: impl msg specs;
* vdn: optimize gossip pubsub handler;
* handler: support to handle vdn block/vote gossip msg;
* init-network: support vdn only configuration;
* ...
