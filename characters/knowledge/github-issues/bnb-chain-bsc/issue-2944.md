# [bsc] persisted dirty state to disk

- **Issue**: #2944
- **Status**: closed
- **Created**: 3/9/2025, 10:50:12 PM
- **Updated**: 3/10/2025, 5:17:35 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2944

## Description

#### System information

Geth version: `geth 1.5.7`
OS & Version: Linux
Commit hash : (if `develop`)

#### Expected behaviour
expected that geth can run normally

#### Actual behaviour
persisted dirty state to disk, blockchain stop

#### Steps to reproduce the behaviour
start comman: 
`./geth.1.5.7 --config ./config.toml --datadir ./node --syncmode snap --cache 12000 --rpc.allow-unprotected-txs --history.transactions=90000 --http --http.addr 0.0.0.0 --http.api "eth,net,engine,web3,txpool,admin,debug" --ws --ws.addr 0.0.0.0 --ws.api "eth,net,engine,web3,txpool,admin,debug"`

#### Backtrace

````
[backtrace]
````
`t=2025-03-10T10:35:29+0800 lvl=info msg="Journaled pathdb diff layer" root=0xaec0683eb98dfc1817b7506bd557dad42e7fd15732e789e04f8fddc9421005ee parent=0x9874ef9dacff484de44ed0b967e515119eb312d71a859a978218873b429a8964 id=4069837 block=47301560
t=2025-03-10T10:35:29+0800 lvl=info msg="Journaled pathdb diff layer" root=0xe58033c70853fc38e589c8d174dd72692d839e9e3dccc9b5035075441b596933 parent=0xaec0683eb98dfc1817b7506bd557dad42e7fd15732e789e04f8fddc9421005ee id=4069838 block=47301561
t=2025-03-10T10:35:29+0800 lvl=info msg="Journaled pathdb diff layer" root=0x5a4e7193c3bcb8b495d52fa10f7193242dc0149e77d3197d6225c1dbebb9c67d parent=0xe58033c70853fc38e589c8d174dd72692d839e9e3dccc9b5035075441b596933 id=4069839 block=47301562
t=2025-03-10T10:35:29+0800 lvl=info msg="Journaled pathdb diff layer" root=0x7fa304faf78aecf7aa0eecf9bb72513b084b98d09cd3f32d1849926c142d9527 parent=0x5a4e7193c3bcb8b495d52fa10f7193242dc0149e77d3197d6225c1dbebb9c67d id=4069840 block=47301563
t=2025-03-10T10:35:29+0800 lvl=info msg="Persisted dirty state to disk" size="354.97 MiB" elapsed=1.243s
t=2025-03-10T10:35:30+0800 lvl=info msg="Blockchain stopped"
`

When submitting logs: please submit them as text and not screenshots.
