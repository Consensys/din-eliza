BSC Runbook
================================

## Loom Video Walkthrough of Runbook
[Video Walkthrough](https://www.loom.com/share/783a323a778e4d849dbdafd3c6fc6c37?sid=9f5d8495-c048-4148-8033-8095977b023e)

## Production Status

- BSC is currently in an open beta, supported by the Decentralized Infrastructure Network. As of launch - July 29th 2024, it will only support NearHead requests (those in the last 128 blocks). Archive support is being added shortly, along with debug_trace support.

## Communication channels
 - Shared Slack channels:
   - InfStones (primary node provider): #din-infstones
   - Liquify (primary node provider): #din-liquify
   - Chainstack (failover node provider): #din-chainstack
   - DIN team: #priv-din
   - DIN Router: #rivetcloud-infura

You can also page EG and Tom by creating an incident in OpsGenie and alerting the DIN - Leads.

## Overview
BNB Smart Chain (BSC) is a high-performance blockchain platform designed to enable the development of scalable and user-friendly decentralized applications (DApps), particularly in the decentralized finance (DeFi) space. For more information on BSC in general, see [the official docs](https://docs.bnbchain.org/bnb-smart-chain/).

BSC has a rapid block propagation, in the range of of ~3 seconds. You can track block creation using [BSC Scan](https://bscscan.com/), as well as view information about blocks that have been created. Understanding more about BSC will help understand issues that could arise. An overview of [Developer Tools](https://www.bnbchain.org/en/dev-tools?cg=&chain=bsc) is helpful to understanding BSC's ecosystem. Additionally, you can find links to [BSC Faucet here](https://docs.bnbchain.org/bnb-smart-chain/developers/faucet/).

**A Note About BSC** Infura previously supported BSC in a closed beta, running the nodes ourselves. Many challenges led us to decide to no longer support this via Infura, but the demand for the chain from customers and users has led to the decision to bring this chain back via the Decentralized Infrastructure Networ.

- [For any requests that need to be made you can use the DIN team's Postman collection for network requests as a starting point](https://galactic-station-377443.postman.co/workspace/Infura~01be7ba8-74ac-4331-b70d-bea175652397/collection/32545716-3ef636fe-9cf3-4d8b-8b31-ab1fa54f68e4?action=share&creator=32545716)

This runbook extends the [Internal Router runbook](https://github.com/INFURA/private-wiki/blob/din-networks/runbooks/internal-router/internal-router-runbook.md)

BSC mainnet currently served by primarily by two DIN partners, with traffic split between them. These are InfStones and Liquify, with failover going to Chainstack. BSC testnet is served by Liquify, with failover served by Chainstack. Requests sent to Infura are forwarded from the Infura reverse proxy to Internal Router and then onto the DIN Router, which is maintained by a combination of the DIN team and Rivet.Cloud. NOTE: The DIN Router just passes on responses from the providers and is not able to modify these responses. Keep this in mind in the event of an incident.

| Provider    | Mainnet Endpoint Format | Testnet Endpoint Format |
| ------------- |:-------------:| :-------------: |
| DIN Router |  https://ingress.din.dev/bsc-mainnet   | https://ingress.din.dev/bsc-testnet |
| InfStones    | https://api.infstones.com/bsc/mainnet/APIKEY        | None |
| Liquify     | https://infura-bsc.liquify.com/api=APIKEY |   |
| Chainstack   |  https://bsc-mainnet.core.chainstack.com/APIKEY   | https://bsc-testnet.core.chainstack.com/APIKEY | 

More details about the API keys required to access these endpoints (if needed) can be found in the Infura 1Password Vault called Decentralized Infrastructure Network, along with the necessary API key.

In the case of errors on BSC errors on InfStones or Liquify, the DIN router is configured to failover to BSC on Chainstack. This is in the case that there are 4XX or 5XX responses on InfStones or Liquify. This runbook will be updated when additional checks are put in place.

## Monitoring

BSC monitoring can be observed via O11y with data going through Internal Router. The two dashboards can be found here

- [BSC Mainnet](https://grafana.o11y.web3factory.consensys.net/d/fdkm57v000vlse/internal-routers?orgId=38&refresh=30s&var-namespace=bsc-mainnet-routers&var-cluster=blockchain-networks-1-prod-us-east-1&var-backend=All&var-prometheus=default&var-logs=rTVdUknIk&var-traces=Ow4OUz7Sk)
- [BSC Testnet](https://grafana.o11y.web3factory.consensys.net/d/fdkm57v000vlse/internal-routers?orgId=38&refresh=30s&var-namespace=bsc-testnet-routers&var-cluster=blockchain-networks-1-prod-us-east-1&var-backend=All&var-prometheus=default&var-logs=rTVdUknIk&var-traces=Ow4OUz7Sk)

### Reverse Proxy

The networks `bsc-testnet`, and `bsc-mainnet` have been added to Infura reverse proxy and the internal router

The infura-reverse-proxy is configured to be able to route request to the Decentralized Infrastructure Network router via the infura-internal-router. 

The Infura reverse proxy runs in ECS, and the [production service can be found here](https://console.aws.amazon.com/ecs/home?region=us-east-1#/clusters/inf-reverse-proxy-prod/services/inf-reverse-proxy-prod-http_proxy/details).

The API is exposed at the following endpoints:
- https://bsc-mainnet.infura.io
- https://bsc-testnet.infura.io

### Internal router

In general, debugging and operating the ZKsyncs backing infrastructure will require access to our Kubernetes clusters. See the instructions [here](https://github.com/INFURA/private-wiki/blob/master/guides/k8s-auth.md) to get access.

The internal router instance names run in the following cluster:
- blockchain-networks-1-dev-us-east-1.eks-dev.infura.org
- blockchain-networks-1-prod-us-east-1.eks.infura.org

and namespaces:
- bsc-mainnet.router
- bsc-testnet.router

the full rpc path for the internal routers are

PROD

- bsc-mainnet.router.blockchain-networks-1-prod-us-east-1.eks.infura.org/jsonrpc
- bsc-testnet.router.blockchain-networks-1-prod-us-east-1.eks.infura.org/jsonrpc
  
DEV

- bsc-mainnet.router.blockchain-networks-1-dev-us-east-1.eks-dev.infura.org/jsonrpc
- bsc-testnet.router.blockchain-networks-1-dev-us-east-1.eks-dev.infura.org/jsonrpc

The state of the application can be seen in https://argocd.blockchain-networks-1-dev-us-east-1.eks-dev.infura.org/applications?search=bsc.
One can refer to the [internal-router runbook](https://github.com/INFURA/private-wiki/blob/master/runbooks/internal-router/internal-router-runbook.md) for further details

### Investigating an issue on the BSC Networks

In case of an Alert on the BSC monitors, the first thing to do is to understand whether this is related to the primary DIN providers, InfStones and Liquify.

You can validate the response you receive from InfStones, Liquify, or Chainstack by sending the same request to all three providers. 

- Send a request to the BSC endpoints. To do so you will need to get the API key for the specific network. These keys are currently hard coded in the DIN router, but you will be able to find them in the Infura 1Password Vault called Decentralized Infrastructure Network. You can also find pre-configured queries in the [DIN Postman Collection]((https://galactic-station-377443.postman.co/workspace/Infura~01be7ba8-74ac-4331-b70d-bea175652397/collection/32545716-3ef636fe-9cf3-4d8b-8b31-ab1fa54f68e4?action=share&creator=32545716))

As a source of truth, please use the [BSC Scan](https://bscscan.com/) to compare responses.

InfStones
```bash
curl https://api.infstones.com/bsc/mainnet/APIKEY \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
``````
Liquify
```bash
curl https://infura-bsc.liquify.com/api=APIKEY \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
``````
Chainstack 
```bash
curl https://bsc-mainnet.core.chainstack.com/APIKEY
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
``````

In the case the issue comes from InfStones, support can be asked for in the shared slack channel: `#din-infstones`.

In case the issue comes from Liquify support can be asked for in the shared slack channel: `#din-liquify`. 

In case the issue comes from Chainstack, support can be asked for in the shared slack channel: `#din-chainstack`. 


In case the issue does not seem to come from InfStones, Liquify, or Chainstack, the next thing to look at the DIN router. 

- Send a request to the DIN BSC endpoints.

```bash
curl https://ingress.din.dev/bsc-mainnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
``````
```bash
curl https://ingress.din.dev/bsc-testnet \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'
``````

In case the issue comes from the DIN router, support can be asked for in the shared slack channel: `#rivetcloud-infura`

You can also alert the Rivet team using [Squadcast](https://webforms.squadcast.com/open-relay-llc/Infura-Support-Form?_gl=1*18kowk*_gcl_au*MjAzMjc1MzE1NC4xNzAxNDQyNjA3). Filling out this webform will page the team until you receive as response.

Please tag @eleazar.galano and @tomhay in order to provide context to your investigation. You can also page EG and Tom by creating an incident in OpsGenie and alerting the DIN - Leads.

In case the issue does not come from the DIN router, then the next thing is to look at the status of the internal router. The following dashboards are dedidated to BSC on the internal router.
- [BSC Mainnet](https://grafana.o11y.web3factory.consensys.net/d/fdkm57v000vlse/internal-routers?orgId=38&refresh=30s&var-namespace=bsc-mainnet-routers&var-cluster=blockchain-networks-1-prod-us-east-1&var-backend=All&var-prometheus=default&var-logs=rTVdUknIk&var-traces=Ow4OUz7Sk)
- [BSC Testnet](https://grafana.o11y.web3factory.consensys.net/d/fdkm57v000vlse/internal-routers?orgId=38&refresh=30s&var-namespace=bsc-testnet-routers&var-cluster=blockchain-networks-1-prod-us-east-1&var-backend=All&var-prometheus=default&var-logs=rTVdUknIk&var-traces=Ow4OUz7Sk)

Further debugging instructions can be found in the [internal-router runbook](https://github.com/INFURA/private-wiki/blob/master/runbooks/internal-router/internal-router-runbook.md) and support from the Internal-router/MetaRPC team can be asked for in the team slack channel: `#infura-internal-routing-metarpc`