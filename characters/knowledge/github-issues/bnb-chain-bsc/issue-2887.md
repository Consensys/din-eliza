# [bsc] tests: fix evm tests CI

- **Issue**: #2887
- **Status**: closed
- **Created**: 2/11/2025, 3:57:05 AM
- **Updated**: 3/3/2025, 2:10:56 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2887

## Description

### Description

tests: fix evm tests CI

### Rationale

when run `run-evm-tests.sh` locally, there are 518641 cases are run
but in CI `https://github.com/bnb-chain/bsc/actions/runs/13255495909/job/37001551107`
even it shows that it succeed, but only 212204 case are run 
<img width="932" alt="image" src="https://github.com/user-attachments/assets/ba70a3b1-fa7b-4b99-8ecb-6b958a405700" />
the reason is that a timeout is trigged
![image](https://github.com/user-attachments/assets/ed91810f-8bc4-4908-9775-d53b0a064b1d)

in this PR, the flag `short` is added following to `geth`, 
for one json test file, one of the four modes `[path/snap, path/trie, hash/snap, hash/trie]` will be selected randomly.
```
	if testing.Short() {
		snapshotConf = []bool{snapshotConf[rand.Int()%2]}
		dbschemeConf = []string{dbschemeConf[rand.Int()%2]}
	}
```

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
