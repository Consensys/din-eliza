# InfrastructureBSC's Growing Pains: Optimization for Traffic SpikesToday we're releasing the first optimization designed to handle the surge in traffic on BSC. Problem We observed that during high-traffic periods, many transactions weren't being included in blocks in a timely manner. This meant that even users who increased their gas fees (transaction fees) to expedite their transactions weren't necessarily getting the priority they expected. Root Cause While there are many potential contributing factors, a key issue was that validator nodes (the computers Today we're releasing the first optimization designed to handle the surge in traffic on BSC. Problem We observed that during high-traffic periods, many transactions weren't being included in blocks in a timely manner. This meant that even users who increased their gas fees (transaction fees) to expedite their transactions weren't necessarily getting the priority they expected. Root Cause While there are many potential contributing factors, a key issue was that validator nodes (the computers 2025.2.152 min read

**Category**: Uncategorized

**Date**: 3/19/2025

**Source**: [BNB Chain Blog](https://www.bnbchain.org/en/blog/bscs-growing-pains-optimization-for-traffic-spikes)

## Content

Today we're releasing the first optimization designed to handle the surge in traffic on BSC.

We observed that during high-traffic periods, many transactions weren't being included in blocks in a timely manner. This meant that even users who increased their gas fees (transaction fees) to expedite their transactions weren't necessarily getting the priority they expected.

While there are many potential contributing factors, a key issue was that validator nodes (the computers that process and validate transactions) weren't always prioritizing the blocks with the highest overall value (i.e., the most lucrative blocks based on transaction fees).

BNB Chain's current design prioritizes getting all transactions on-chain as quickly as possible, minimizing the average wait time in the transaction pool (mempool). This approach works well for most typical use cases. However, it's not optimal for the fast-paced, high-stakes world of meme coin trading, where small price fluctuations can significantly impact.

As shown in the diagram, when validators reach the block limit, they will cease accepting new bids from builders, even if the new bids contain higher block values. These higher block values are typically a result of increased gas prices, or smart contract transactions with higher gas costs, such as meme swaps.

We're refining our strategy to prioritize block value, especially when dealing with critical transactions. In other words, we will give transactions interacting with time-sensitive (meme coin) contracts a higher priority.

This upgrade will introduce a short waiting period before block sealing, as long as there is sufficient time within the 3-second block window(blocks on BSC are created every 3 seconds). This will allow validators to gather more bids, increasing the chance of incorporating the best ones and improving overall block building performance, especially during periods of high network activityThis change also provides more time for bid gathering, potentially leading to more efficient block building.

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

As a California consumer, you have the right to opt-out from the sale or sharing of your personal information at any time across business platform, services, businesses and devices. You can opt-out of the sale and sharing of your personal information by using this toggle switch. As a Virginia, Utah, Colorado and Connecticut consumer, you have the right to opt-out from the sale of your personal data and the processing of your personal data for targeted advertising. You can opt-out of the sale of your personal data and targeted advertising by using this toggle switch. For more information on your rights as a United States consumer see our privacy notice.

These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.



---

*Note: In this context, the terms BSC, BNB, BNB Chain, and BNBChain are often used interchangeably to refer to the same blockchain ecosystem.*
