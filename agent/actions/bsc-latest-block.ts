import { Action, elizaLogger, generateText, Handler, HandlerCallback, IAgentRuntime, Memory, ModelClass, State } from "@elizaos/core";

export const latestBlockAction: Action = {
  name: "LATEST_BLOCK",
  description: "Get the latest block number",
  similes: ["GET_LATEST_BLOCK_NUMBER", "GIVE_LATEST_BLOCK", "LATEST_BLOCK", "WHAT_CURRENT_BLOCK", "WHAT_LATEST_BLOCK"],
  validate: async (_runtime: IAgentRuntime, _message: Memory) => {
    return true;
  },
  handler: async (
    _runtime: IAgentRuntime,
    _message: Memory,
    _state: State,
    options: { [key: string]: unknown},
    _callback: HandlerCallback,

  ) => {

    async function getLatestBlockNumber(searchTerm: string) {
      elizaLogger.info("ACTION: Getting latest block, search term: " + searchTerm);
      const url = `https://bsc-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
      const payload = {
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 1
      };
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(url, request);
      const data = await response.json();
      const latestBlockNumber = parseInt(data.result, 16);
      return latestBlockNumber;
    }

    const context = `Extract the search term from the user's message.
                     The message is: ${_message.content.text}
                     Only respond with the search term, do not include any other text.`;

    const searchTerm = await generateText({
      runtime: _runtime,
      context,
      modelClass: ModelClass.SMALL,
      stop: ["\n"],
    });

    const latest_block_results = await getLatestBlockNumber(searchTerm);

    const responseText = "The latest block in the BSC network is " + latest_block_results;


    _callback({ text: responseText });
  },
  examples: []
};

