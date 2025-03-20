# [bsc] Bsc geth sends message "unknown account" , after its creation in CLEF

- **Issue**: #2956
- **Status**: open
- **Created**: 3/18/2025, 12:06:42 AM
- **Updated**: 3/18/2025, 12:06:42 AM
- **URL**: https://github.com/bnb-chain/bsc/issues/2956

## Description

#### System information

Geth version: `v1.5.7`
OS & Version: Linux

#### Expected behavior
After creating address1 (account_new) in CLEF and setting the password via "setpw", I send a transaction from this address1 to another address2 (eth_sendtransaction). I expect to see a successful send transaction

#### Actual behavior
There is an error when sending the transaction
(
    [code] => -32000
    [message] => unknown account
)

#### Steps to reproduce the behavior
1) clef account_new
2) clef setpw (new account address)
3) send transaction from new account (get "unknown account" error)
4) eth_accounts
5) send transaction from new account (transaction successful)

Also, I found a discussion about the same problem here - https://github.com/ethereum/go-ethereum/issues/20995.

####
Here is my example from the terminal

```
root@ns3058291:/raid1/.bscnode-test/clef/php# php clef2.php 0x0e9d5c260E996fae827C5a15A2c5d4F08612956e "password" 0x461A197054e890b01f74b669907E0ADEcF42D3be 0.0001
Account unlocked successfully: 0x0e9d5c260E996fae827C5a15A2c5d4F08612956e
Error in sending transaction: Failed to send transaction
Details: Array
(
    [code] => -32000
    [message] => unknown account
)

root@ns3058291:/raid1/.bscnode-test/clef/php# curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' -H "Content-Type: application/json" http://127.0.0.1:8575
{"jsonrpc":"2.0","id":1,"result":["0x6ff82f11b372c3021ecfa8e5328d5011fa1457c6","0xd70fb0f3f9e233bae4eb61605303199a8dca0650","0x22c5635bfff4c5ba570de2d114590f6bbea1ca0b","0x461a197054e890b01f74b669907e0adecf42d3be","0x0c6337bf2d8f6656b12bab938c03d5bd7776ffe7","0x420ace63305c611481c32c0e9263b93f07b4d602","0xff36342b1c5cab3b2b04a077b7e17692a04b5c5e","0x7e96823141643f162c71cee9b734919a187dd427","0x9fb3e3d6ecd7601346c17dd87d229b0ad594bce6","0x1d7127fc396301f4b35d21bf3bf22a7e62825c61","0x48c13ebe3e9bccc3d8cfc5dbc291583ac9f9571b","0x0789013effbd018c1e7bc08256e98f708a8faa0c","0x51d50241e964a310ece8fe28ce03c971f382f854","0x0e9d5c260e996fae827c5a15a2c5d4f08612956e"]}

root@ns3058291:/raid1/.bscnode-test/clef/php# php clef2.php 0x0e9d5c260E996fae827C5a15A2c5d4F08612956e "password" 0x461A197054e890b01f74b669907E0ADEcF42D3be 0.00001
Account unlocked successfully: 0x0e9d5c260E996fae827C5a15A2c5d4F08612956e
Transaction sent successfully: 0xd1ef3fcbe7a5115bb32900e6802eb771828416e0088ae23361434d03a8ba1a60
```

