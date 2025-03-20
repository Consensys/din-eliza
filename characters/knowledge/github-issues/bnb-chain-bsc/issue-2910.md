# [bsc] When the newly selected ValidatorSet will start to take effect?

- **Issue**: #2910
- **Status**: closed
- **Created**: 2/24/2025, 1:09:59 AM
- **Updated**: 2/24/2025, 1:58:09 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2910

## Description

I'm writing codes about verifying BSC block header, and I found that the `ValidatorSet` selected at height `46901000` starts to take effect from `46901045`, which is confusing. How can I know when the newly selected ValidatorSet will start to take effect?
According to this related [issue](https://github.com/bnb-chain/bsc/issues/2506#issuecomment-2148939098), it will delay the effect after `uint64(len(snap.Validators)/2)` blocks. And `Validators` in `Snapshot` comes from Block header, whose length should be 21, makes the result 10, which is different from my observation.## Comments

This issue has 1 comments. View them at https://github.com/bnb-chain/bsc/issues/2910.

