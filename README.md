# AIDIN (din-eliza)

AIDIN - DIN AI Agent for Blockchain Ecosystem Expertise Project assets

Conversational AI agent trained on the technical documentation, community forums, and official social accounts. This will allow for any person to utilize the conversational AI agent in order to be the “Chain Expert”, and be able to more effectively answer a broad range of questions related to those chains.

## Run

```bash

## Make sure you are running node version 23.3.0, if not, install it using nvm for example
npm version

## Make sure you are in the agent folder
cd agent

## Install all the packages
pnpm install

## Workaround to make sqlite3 work
pushd node_modules/better-sqlite3
npm run build-release
popd

## Build and Run interactively
pnpm build && pnpm start --characters="characters/rag-eliza.json"

```

## RAG Knowledge

The knowledge folder needs to reside in `./characters/knowledge` as it is a current issue we are facing
