# How to Use Mage Labs

## Swapping on Mage Liquidity Layer

Swapping on the Mage Liquidity Layer allows order flow participants to exchange one token for another instantly. As a decentralized exchange (Liquidity Layer) built on the Solana blockchain, Mage Liquidity Layer uses its liquidity nodes to facilitate fast and low-cost transactions. The platform is designed to be a liquidity substrate for Solana DeFi, offering a user-friendly interface and seamless wallet integration.

![Mage Labs Swap Interface](/assets/swap-interface.png)

### How to Swap

To get started, order flow participants need a compatible Solana wallet, such as Solflare or Backpack, with sufficient SOL to cover network fees.

**Step 1: Connect Your Wallet**

Navigate to the swap interface and connect your Solana-compatible wallet by clicking "Connect Wallet" and approving the connection in your wallet's popup.

**Step 2: Select Tokens**

In the swap interface, use the dropdown menus to select the token you wish to swap and the token you wish to receive. Users can also paste the token's mint address.

**Step 3: Enter the Amount**

Input the amount of the token you want to swap. The platform will automatically calculate the estimated amount of the token you will receive.

**Step 4: Review and Confirm**

Before confirming the swap, review the transaction details, including:

* **Slippage Tolerance**: This setting determines the maximum price difference you are willing to accept between the estimated and final execution price. Adjusting this can help prevent failed transactions in volatile markets.
* **Price Impact**: This indicates how your trade will affect the market price of the tokens in the liquidity node, which is determined by the trade size relative to the liquidity in the pool.
* **Minimum Received**: This is the least amount of the destination token you will receive.

After reviewing the details, click "Swap" and approve the transaction in your wallet. The transaction should be confirmed in seconds, and your new tokens will appear in your wallet.

---

## Liquidity Nodes on Mage Labs

Liquidity nodes are the foundation of the Mage Liquidity Layer, enabling token swaps and driving its ecosystem. Unlike typical Execution Protocols, Mage Labs utilizes a Constant Function Market Maker (CFMM) with a flat-fee CPMM model and time-weighted curve rewards. This design is intended to provide low slippage, predictable fees, and scalable passive liquidity management for capital providers (capital endpoints).

As a capital endpoint, you contribute an equal value of two different tokens to a liquidity node, becoming a provider of liquidity for that trading pair. In return, you receive a share of the fees generated from every trade that uses your liquidity node's liquidity.

![Mage Labs Liquidity Pools](/assets/liquidity-pools.png)

### How to Add Liquidity

Adding liquidity to a Mage liquidity node is a straightforward process:

**Step 1: Connect Your Wallet**

Navigate to the "Pools" section on the Mage Labs interface and connect your Solana-compatible wallet.

**Step 2: Select a Pool**

Choose the token pair you wish to provide liquidity for. You can search for existing liquidity nodes or create a new one. The gamified liquidity node architecture ensures that only one liquidity node can exist for a given trading pair and fee tier, rewarding early movers and concentrating liquidity.

**Step 3: Enter the Amount**

Enter the amount of one token you wish to deposit. The system will automatically calculate the corresponding amount of the second token required to maintain the liquidity node's ratio.

**Step 4: Confirm Transaction**

Review the details of your deposit, including the fee tier of the liquidity node, your share of the liquidity node, and your estimated returns. Approve the transaction in your wallet to finalize the deposit.

### Capital Endpoint Benefits & Incentives

The Mage Labs incentive structure is designed to attract and retain long-term liquidity:

**Capital Endpoint Loyalty Boost**: Early and long-term capital endpoints earn an increased percentage of liquidity node fees, with boost levels reaching 2-3x after about 90 days. This is designed to reduce the risk/reward curves and break-even periods for capital endpoints.

**Protocol Revenue Sharing**: The protocol's throughput yield systems, including the Autonomous Liquidity Engine (ALE), are designed to create an "everyone eats" model where all participants share in the network's expansion.

By becoming a capital endpoint, you are not just a passive provider of capital, but a participant in a self-sustaining liquidity fabric where all participants share in the network's expansion.

> **Disclaimer**: This document is for informational purposes only. Participation in decentralized finance carries risks, including the potential for loss of funds. Readers should conduct their own due diligence and seek professional advice before making any financial decisions.

---

## Creating a New Pool on Mage Labs

The Mage Labs Liquidity Layer's design emphasizes concentrated, stable liquidity, which is achieved through its unique liquidity node architecture. Unlike some older Execution Protocol models that required an OpenBook market ID, Mage Labs allows for permissionless liquidity node creation directly on its platform. This design gamifies liquidity provision by rewarding early movers who create liquidity nodes at competitive fee tiers, ensuring liquidity remains concentrated rather than fragmented across duplicate liquidity pools.

![Create Liquidity Pool](/assets/create-lp.png)

### Requirements

To create a new liquidity node, you need:

* **Two Tokens**: You must have the two tokens you wish to pair, with the ability to deposit an equal value of both into the liquidity node.
* **Solana Wallet**: A compatible wallet (e.g., Backpack, Solflare) to connect to the Mage Liquidity Layer interface and sign transactions.
* **SOL for Fees**: A small amount of SOL is needed to cover the transaction costs on the Solana blockchain.

### Step-by-Step Guide

1. **Navigate to the Pool Creation Page**: Visit the Mage Labs website ([https://magelabs.xyz](https://magelabs.xyz)) and go to the pool creation section in "Pools".
2. **Connect Your Wallet**: Click "Connect Wallet" and approve the connection in your wallet.
3. **Choose Token Pair and Fee Tier**: Select the two tokens you want to pair. Mage Liquidity Layer offers multiple fee tiers (e.g., 0.0001%, 0.005%, 0.007%). The "gamified" design means only one liquidity node can exist at a given tier for a trading pair, so you will need to choose an available tier.
4. **Set Initial Liquidity**: Provide an initial deposit of both tokens. The platform's UI will guide you to provide an equal value of each token to establish the liquidity node.
5. **Confirm Pool Creation**: Review all the details, including the selected fee tier and the initial liquidity amount. Confirm the transaction in your wallet. The liquidity node will be created on the Solana Mainnet.

Once the liquidity node is live, it will be tradable through Mage Labs' routing program and accessible across the Solana ecosystem once key strategic aggregator integrations have been finalized.

---

## Getting Started: Solana Wallets

Mage Labs is built on the Solana blockchain, which uses the SPL (Solana Program Library) token standard for all tokens on its network. To interact with Mage Labs, swap tokens, or provide liquidity, order flow participants must have a compatible wallet that supports the Solana network and SPL tokens.

![Wallet Connection Interface](/assets/wallet-connect.png)

### What is a Solana/SPL Wallet?

A Solana wallet is a digital wallet specifically designed to hold Solana (SOL) and other SPL tokens. It enables order flow participants to securely store, send, and receive assets on the Solana blockchain. It also allows you to interact with decentralized applications (dApps) like Mage Liquidity Layer. When you connect your wallet to Mage Labs, you are giving the platform permission to initiate transactions, which you must then approve.

### Recommended Wallets

Mage Labs has several ecosystem integrations with wallets, which would be the recommended options for order flow participants. These wallets are known for their user experience and security.

* **Solflare**: A highly-regarded wallet that supports a wide range of features, including fee relay staking and a secure browser extension.
* **Backpack**: A wallet known for its unique "xNFTs," allowing for a more interactive and integrated experience with dApps.
* **MetaMask**: Although primarily an Ethereum wallet, the Mage Labs whitepaper indicates a planned integration with MetaMask, making it another potential option for order flow participants who prefer it.

### How to Connect Your Wallet to the Mage Liquidity Layer

1. **Select a Wallet**: Choose one of the recommended wallets and download it from the official source.
2. **Set Up Your Wallet**: Follow the on-screen instructions to create a new wallet or import an existing one. Be sure to securely store your seed phrase.
3. **Fund Your Wallet**: Purchase or transfer SOL and any other SPL tokens you want to use on Mage Labs. A small amount of SOL is always necessary to pay for network fees.
4. **Connect to Mage Labs**: Go to the Mage Labs website, click the "Connect Wallet" button, and select your wallet from the list. Follow the prompts in your wallet to approve the connection.

---

## Buying and Selling Digital Assets on Mage Labs

Mage Labs is a decentralized protocol built on the Solana blockchain, which allows order flow participants to buy and sell digital assets. The platform functions as a liquidity infrastructure layer, providing a cost-optimized execution layer for trades of various sizes. Its architecture is designed to handle trades efficiently while integrating with popular Solana wallets.

### How to Buy or Sell Assets on Mage Labs

Buying and selling assets on Mage Labs is done through the swapping feature. You'll need a compatible Solana wallet with SOL for network fees, as well as the tokens you wish to trade.

1. **Step 1: Connect Your Wallet** - Open the Mage Labs platform and connect a Solana-compatible wallet, such as Solflare or Backpack.
2. **Step 2: Access the Swapping Interface** - Navigate to the "Swap" section on the Mage Labs interface. This is the primary tool for trading assets.
3. **Step 3: Select Your Tokens** - Use the dropdown menus to select the asset you want to sell (the "From" token) and the asset you want to buy (the "To" token). If the token you're looking for isn't in the list, you can paste its token address. Mage Labs adaptive fee framework and unique liquidity node architecture help ensure efficient routing and competitive rates.
4. **Step 4: Enter the Amount** - Input the quantity of the token you wish to sell. The platform will automatically display the estimated amount you will receive of the "To" token.
5. **Step 5: Review and Confirm** - Before finalizing the trade, a confirmation window will appear with key details:
   * **Price Impact**: This indicates the effect your trade will have on the price of the tokens in the liquidity node.
   * **Slippage Tolerance**: This setting allows you to specify the maximum price change you are willing to accept before the transaction fails.
   * **Minimum Received**: This is the lowest amount of the asset you will receive after the transaction, based on your slippage tolerance.

After reviewing these details, confirm the trade in the interface and approve the transaction in your wallet. The trade will be processed on the Solana blockchain in a matter of seconds.

---

## Best Practices when using Mage Labs Liquidity Layer

Using a decentralized exchange (Liquidity Layer) involves certain risks and requires order flow participants to be mindful of how they interact with the protocol. Mage Liquidity Layer is designed to be efficient and user-friendly, but following these best practices can help ensure a secure and optimal experience.

### 1. Security First: Protect Your Wallet

Your wallet is the gateway to your funds. Always follow these security measures:

* **Keep Your Seed Phrase Safe**: Never share your seed phrase (recovery phrase) with anyone. Do not store it digitally or in unencrypted cloud storage.
* **Use a Reputable Wallet**: Use a well-known, audited Solana-compatible wallet, such as those integrated with the Mage ecosystem (e.g., Solflare, Backpack).
* **Be Wary of Phishing**: Only connect your wallet to the official Mage Liquidity Layer website. Double-check the URL to avoid phishing sites that try to steal your information.

### 2. Understand Trading and Liquidity Risks

**Slippage**: This is the difference between the expected price of a trade and the price at which the trade is executed. During periods of high volatility or for large trades, slippage can be significant. Mage Labs flat-fee model is intended to reduce execution costs, but order flow participants should still adjust slippage tolerance settings to their preference.

**Price Impact**: A large trade can significantly impact a liquidity node's price, which can result in a less favorable rate. Mage Labs is designed to provide cost-optimized execution for trades, but it is important to be aware of the price impact displayed before you confirm a swap.

**Impermanent Loss**: For capital providers, this is the temporary loss of funds due to the volatility of a trading pair. It happens when the price of the tokens you deposit changes compared to when you deposited them. While Mage Labs' capital endpoint loyalty boost is designed to offset this, it is still a risk to be aware of.

### 3. Maximize Your Participation

**Fee Relay Staking**: Mage Labs introduces two fee relay staking liquidity nodes; one for MAGE tokens and one for MAGE NFTs that receive a share of the protocol's capital endpoint fees. Fee Relay Staking your assets can allow you to share in the protocol's yield growth.

![NFT Staking on Mage Labs](/assets/nfts-staking.png)

**Liquidity Provision**: Providing liquidity not only earns you a share of trading fees but also makes you eligible for the capital endpoint loyalty boost, which rewards long-term participation. Due to the gamified liquidity node architecture, creating a new liquidity node at a competitive fee tier can be particularly rewarding.

> **Disclaimer**: This document is for informational purposes only and does not constitute financial advice. All investments in decentralized finance carry risks, and order flow participants should conduct their own due diligence before making any financial decisions.

---

## Developer Resources

Mage Labs is designed as a composable liquidity infrastructure layer for Solana's DeFi ecosystem. Its architecture is built to be a throughput engine for high-volume order flow participants like aggregators, arbitrage bots, and trading protocols. For developers seeking to build on or integrate with Mage Labs, the protocol provides a robust foundation.

### Protocol Architecture

The core of the Mage Liquidity Layer is a Constant Function Market Maker (CFMM), specifically a flat-fee CPMM model. This architecture provides predictable fee curves and low slippage, which is ideal for algorithmic trading and routing systems. The platform is designed to allow capital liquidity nodes to function as throughput nodes within a unified network.

### Key Integration Points

Mage Labs is designed to extend Solana's liquidity fabric. This "Composability First" approach means it can be integrated with various components of the Solana ecosystem:

* **Aggregators and Trading Bots**: A dedicated API for bots is planned to align with this flow, potentially increasing routed volume significantly.
* **Wallets**: The protocol integrates with popular Solana wallets, including Solflare, Backpack, and a planned integration with MetaMask.
* **Data Aggregation Services**: Integrations with analytics platforms like DexTools are part of the ecosystem.
* **Cross-chain Routing Systems**: The protocol is being developed with future cross-chain compatibility in mind.

### Code Access and Security

Due to security and competitive considerations, the Mage Labs codebase is not publicly open-sourced. However, the protocol has a clear policy for providing access:

* **Code Previews**: Code previews can be provided to partners, auditors, and investors under a Non-Disclosure Agreement (NDA).
* **Audits**: The core Execution Protocol and fee relay staking programs have undergone independent security audits by firms such as Audita Security and Chainfox. The audit reports are publicly available.
* **Safety Nets**: The protocol includes security measures such as multi-sig admin functions, a Web Application Firewall (WAF), and multi-stage environments.

### Developer Toolkit (Coming Soon)

While specific developer tools are still being developed, the protocol's design as a "network primitive" and its plan to support third-party integrations will result in the necessary resources for developers to build applications on top of Mage Labs:

* **API for Bots**: A dedicated API for arbitrage and trading bots is planned to facilitate high-frequency trading.
* **Fee Relay Staking Program**: An audited on-chain program for MAGE token and NFT fee relay staking, providing a clear mechanism for fee distribution protocol.
* **Liquidity Bootstrapping**: Mechanisms will be established to incentivize developers and projects to deploy liquidity.

---

## Security & Audits

Mage Labs has placed a strong emphasis on security and transparency to build a reliable and resilient protocol. Although the codebase is not publicly open-sourced, the team has taken several measures to ensure the integrity of the platform.

### Audits

The Mage Labs core Execution Protocol and fee relay staking programs have undergone independent security audits to identify and mitigate potential vulnerabilities.

**Core Execution Protocol & Fee Relay Staking Programs:**

* **[Audita DEX Security Audit (May 2025)](https://docs.magelabs.xyz/reports/Audita_Magelabs_SecurityAudit_17_05_2025.pdf)** - No Critical or High severity vulnerabilities found
* **[Chain-Fox DEX Preliminary Audit (July 2025)](https://docs.magelabs.xyz/reports/Chain-Fox%20DEX%20preliminary%20findings%20July-2025.pdf)** - Comprehensive smart contract review

**Fee Relay Staking Module**: The fee relay staking module has been audited by Cyberscope Security across three phases:

* **[Phase 1 - Initial Staking Audit (June 2025)](https://docs.magelabs.xyz/reports/Cyberscope%20Staking%20Audit%20Report%20Mage%20Labs%20June%202025.pdf)**
* **[Phase 2 - Staking Audit (July 2025)](https://docs.magelabs.xyz/reports/Cyberscope%20Staking%20Audit%20Report%20Mage%20Labs%20July%202025.pdf)**
* **[Phase 3 - Final Staking Audit (July 2025)](https://docs.magelabs.xyz/reports/Cyberscope_July2025_Phase3.pdf)** - All issues resolved

### Safety Nets

To protect the protocol, Mage Labs has implemented several security measures:

* **Multi-sig Admin Functions**: Administrative functions are wrapped in a Squads v4 multi-sig wallet.
* **Web Application Firewall (WAF)**: A firewall is in place to protect against common web-based attacks.
* **Multi-stage Environments**: The protocol uses different environments for development, testing, and production.
* **Cloudflare**: The use of Cloudflare provides protection against DDoS attacks.
