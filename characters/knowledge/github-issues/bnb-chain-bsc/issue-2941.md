# [bsc] feat(vdn): add bootnode implementation

- **Issue**: #2941
- **Status**: open
- **Created**: 3/7/2025, 2:50:09 AM
- **Updated**: 3/11/2025, 4:57:44 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2941

## Description

### Description

This PR is adding new Rendezvous VDN bootnode standalone binary. With this we will be able to bootstrap new network easily.

### Example

```
make all
./build/bin/vdn-bootnode -debug -external-ip 127.0.0.1
```

