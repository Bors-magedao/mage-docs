# Frequently Asked Questions

## What is the Mage Liquidity Layer?

The Mage Liquidity Layer is a liquidity execution substrate built on the Solana blockchain. It functions as a liquidity infrastructure layer, designed to power the flow of on-chain activity for aggregators, bots, and retail order flow participants. Its architecture transforms passive liquidity into tokenized infrastructure.

## What is the Mage Execution Protocol?

Mage Execution Protocol is the protocol's liquidity mechanism. It is a Constant Function Market Maker (CFMM) with a flat-fee Constant Product Market Maker (CPMM) model and time-weighted curve rewards. This design aims to provide low slippage and predictable fees.

## How is Mage Labs different?

Mage Labs differentiates itself by not competing for trades, but rather powering how they happen. Its key distinctions include:

* **Adaptive Fee Framework**: Features flat-fee curves to reduce execution costs by a significant margin.
* **Capital Endpoint Loyalty Boost**: Incentivizes long-term liquidity provision by rewarding early and long-term capital endpoints with a higher percentage of liquidity node fees.
* **Gamified Pool Architecture**: Concentrates liquidity by allowing only one liquidity node per trading pair and fee tier.
* **Autonomous Liquidity Engine (ALE)**: A protocol-owned execution layer that generates non-dilutive, protocol-level throughput yield.
* **Horizontal Fee Distribution**: A throughput yield-sharing model that distributes fees to token stakers, NFT stakers, and the treasury.

## What are the main throughput yield streams for Mage Labs?

The protocol introduces three throughput yield streams:

* Liquidity provider fees, which include loyalty boost multipliers.
* Fee Relay Staking for token and NFT stakers, who share in protocol fee yield.
* The Autonomous Liquidity Engine (ALE) layer.

## What is the purpose of the MAGE token and MAGE NFTs?

The MAGE token and MAGE NFTs are used to reward participants. Fee Relay Staking MAGE tokens allows order flow participants to receive 15% of the total capital endpoint fees, while fee relay staking MAGE NFTs allows for a claim on 5% of the total capital endpoint fees. Both tokens will also be used during the liquidity bootstrapping phase to incentivize long-term or strategic liquidity.

## What wallets are supported by Mage Liquidity Layer?

The Mage Labs whitepaper mentions several ecosystem integrations, including the following wallets:

* Solflare
* Backpack
* MetaMask

## How can I become a capital provider on Mage Labs?

You can provide liquidity by depositing an equal value of two tokens into an existing liquidity node or by creating a new one. The process involves connecting your wallet, selecting the token pair and an available fee tier, and confirming the transaction. Capital endpoints earn a share of trading fees and are eligible for the capital endpoint loyalty boost.

## Is the Mage Labs codebase open-sourced?

The codebase is not publicly open-sourced due to security and competitive considerations. However, code previews can be provided to partners, auditors, and investors under a Non-Disclosure Agreement (NDA).

## Has Mage Labs been audited?

Yes, the Mage Labs core Execution Protocol and fee relay staking programs have undergone independent security audits by firms such as Audita Security and Chainfox. The fee relay staking module was also audited by Cyberscope Security.

## About Mage Labs' Liquidity Layer Fees

Mage Labs fee structure is designed to be highly competitive. It uses an Adaptive Fee Framework with multiple fee tiers, which allows for extremely low execution costs (up to 1000x - 70x cheaper than some other infrastructure layers). The fees collected from trades are distributed across capital providers, token stakers, NFT stakers, and the protocol treasury.

---

## Providing Liquidity on Mage Labs (CFMM)

Mage Labs is built on a Constant Function Market Maker (CFMM) model, specifically a flat-fee Constant Product Market Maker (CPMM). This architecture is designed to simplify liquidity provision, offering a different approach from systems that require capital endpoints to manage specific price ranges.

On Mage Labs, capital providers (capital endpoints) contribute capital to a liquidity node, and this capital is made available across the entire price curve. This approach eliminates the need for active management of price ranges, making liquidity provision a more passive and "set-it-and-forget-it" process.

### Benefits of the Mage Liquidity Layer CFMM Model for capital endpoints:

* **Passive Management**: Capital endpoints do not need to actively manage their positions or adjust price ranges. Once liquidity is provided, it remains in the liquidity node and earns fees as long as it is active.
* **Predictable Fees**: The flat-fee structure with time-weighted curve rewards is designed to offer predictable returns and incentivize long-term participation.
* **Gamified Pool Architecture**: To concentrate liquidity, the protocol rewards liquidity providers who create liquidity nodes at the most competitive fee tiers, ensuring liquidity is not fragmented.
* **Loyalty Boosts**: The platform's loyalty boost mechanism provides early and long-term liquidity providers with a higher percentage of liquidity node fees, which can help offset impermanent loss and other risks.

### How to Provide Liquidity (refresher)

The process for providing liquidity to a Mage liquidity node is designed to be straightforward:

1. **Connect Your Wallet**: Navigate to the "Pool" section on the Mage Labs website and connect a compatible Solana wallet.
2. **Select a Pool**: Choose a trading pair you wish to provide liquidity for. You may have the option to create a new liquidity node at a specific fee tier if one does not already exist.
3. **Deposit Tokens**: Enter the amount of one token you want to deposit. The system will automatically calculate the corresponding amount of the second token required to maintain the liquidity node's ratio.
4. **Confirm the Transaction**: Review the transaction details and approve the deposit in your wallet to begin earning a share of the liquidity node's trading fees.

By providing liquidity to a Mage Labs CFMM liquidity node, you are contributing to a stable and efficient liquidity substrate for the entire Solana ecosystem.

---

## Liquidity Providing FAQ

### What is a Mage Liquidity Layer liquidity node?

A Mage Liquidity Layer liquidity node is a collection of two tokens that are contributed by capital providers (capital endpoints). These tokens are used to facilitate instant swaps on the Solana blockchain. Mage Labs uses a Constant Function Market Maker (CFMM) model, specifically a flat-fee CPMM (Constant Product Market Maker), which simplifies liquidity provision by eliminating the need for active management of price ranges.

### How do I provide liquidity?

To become a capital provider, you must deposit an equal value of two different tokens into a liquidity node. The process involves connecting your Solana-compatible wallet to the Mage Liquidity Layer platform, selecting the token pair, and confirming the transaction to deposit your tokens.

### What are the benefits of providing liquidity on Mage Labs?

Liquidity providers on Mage Labs can benefit from several unique features:

* **Capital Endpoint Loyalty Boosts**: Early and long-term capital endpoints receive a higher percentage of liquidity node fees. This boost accrues over time, incentivizing "sticky" liquidity and reducing the risk of capital migration.
* **Trade Fee Share**: Capital endpoints earn a share of the fees generated from every trade that uses their liquidity node's liquidity.
* **Passive Management**: The CFMM model means you don't need to actively adjust your position, making it a "set-it-and-forget-it" method for earning fees.
* **Token and NFT Fee Relay Staking Revenue**: As a capital endpoint, you indirectly support the protocol, which then distributes throughput yield from its Autonomous Liquidity Engine (ALE) to stakers, creating a reinforcing economic loop.

### What are the risks of providing liquidity?

The primary risk for capital endpoints is impermanent loss. This occurs when the value of your deposited tokens changes compared to what their value would have been had you simply held them in your wallet. While the loyalty boost is designed to help capital endpoints earn more fees, it does not fully negate this risk.

### How are fees distributed to capital endpoints?

Mage Labs uses a horizontal fee distribution model. A significant portion of the fees from trades goes directly to capital providers. Additionally, liquidity providers who meet the criteria for the loyalty boost will receive an increased percentage of these fees. The remaining fees are distributed to MAGE token stakers, NFT stakers, and the protocol treasury.

### Can I create my own liquidity node?

Yes, Mage Labs allows for permissionless liquidity node creation. The protocol's unique "gamified" architecture means that only one liquidity node can exist for a given trading pair and fee tier. This rewards early movers who create liquidity nodes in the most competitive fee slots and helps to concentrate liquidity.

---

## Node Types on Mage Liquidity Layer: Constant Function Market Maker (CFMM)

Mage Labs' core protocol is built on a Constant Function Market Maker (CFMM) model, specifically a flat-fee Constant Product Market Maker (CPMM) with time-weighted curve rewards. This design provides a simplified and efficient method for liquidity provision, moving away from more complex models that require active management of price ranges.

### Mage Labs Node Structure

Mage Labs CFMM liquidity nodes are designed to function as a unified, composable liquidity substrate for the Solana ecosystem. Key characteristics of these liquidity nodes include:

* **Flat-Fee CPMM**: The core model uses a flat-fee structure that allows for efficient routing across all trade sizes and conditions. This simplifies the fee model for order flow participants and provides a predictable yield source for capital endpoints.
* **Gamified Node Architecture**: To concentrate liquidity and prevent fragmentation, the Mage Liquidity Layer allows for only one liquidity node per trading pair at a given fee tier. This system rewards early movers who claim the most competitive fee slots, fostering stability and deeper liquidity.
* **Adaptive Fee Framework**: The protocol offers several fee tiers, ranging from 0.0001% to 1%, allowing communities to choose a rate that aligns with their volume brackets and promotes the best swap rates.

### Benefits of Mage Labs CFMM Nodes

Mage Labs CFMM model provides several benefits for capital providers (capital endpoints):

* **Passive Liquidity Management**: Capital endpoints do not need to actively manage their positions, as liquidity is provided across the entire price curve.
* **Capital Endpoint Loyalty Boost**: The protocol incentivizes "sticky" liquidity with a loyalty boost that rewards early and long-term capital endpoints with an increased percentage of liquidity node fees. This can help offset the risks of providing liquidity, such as impermanent loss.
* **High Throughput and Low Cost**: The architecture is designed to handle millions of swaps per day, with fee compression achieving 95% to 99% lower execution costs per swap compared to other Solana Execution Protocols.

By combining these features, Mage Labs aims to establish itself as a scalable liquidity substrate that can efficiently serve aggregators, trading protocols, and a wide range of DeFi order flow participants.

---

## The MAGE Token

The MAGE token is a core asset within the Mage Labs ecosystem, designed to align the interests of order flow participants, capital providers (capital endpoints), stakers, and the broader community. The protocol's "everyone eats" model ensures that fees flow back to all participants, with the MAGE token playing a central role in this structure.

### MAGE Token Utility

The primary utility of the MAGE token is in its fee relay staking mechanism, which provides a way for holders to earn a share of the protocol's throughput yield.

* **Fee Relay Staking**: MAGE can be staked in the Token Fee Relay Staking Node, which is a module of the protocol. This staking module receives 15% of the total capital endpoint fees, with distributions being on-chain and pro-rata to stakers based on their stake.
* **Liquidity Bootstrapping**: During the initial growth phases, MAGE tokens will be used to incentivize and reward counterparties who provide long-term or strategic liquidity.
* **High-Yield Dividend Vehicle**: For traditional finance investors, the MAGE token is structured to function like a high-throughput yield dividend vehicle, offering exposure to the growth of Solana DeFi through recurring and predictable ecosystem cash flows.

---

## Mage NFTs

The 1000 strong Mage NFT collection can be found on popular NFT marketplaces on Solana and receive 5% of all protocol revenue when staked through the Mage Labs staking module:

* Magic Eden (Insert Link)
* Tensor (Insert Link)
* Launch My NFT (Insert Link)

---

## Protocol Fees and Distribution

Mage Liquidity Layer introduces multiple yield streams that support its tokenomics. Fees generated from the protocol's activities are distributed to create a self-reinforcing economic loop.

After the initial token offering (ICO), the protocol fees are distributed as follows:

* **Liquidity Providers (capital endpoints)**: Receive 70% of the fees.
* **Protocol**: Receives 30% of the fees, which is further broken down:
  * **MAGE Stakers**: 15% of the protocol's share (or 4.5% of total fees).
  * **NFT Stakers**: 5% of the protocol's share (or 1.5% of total fees).
  * **Treasury**: 10% of the protocol's share (or 3% of total fees).

This fee structure, along with the Autonomous Liquidity Engine (ALE), is designed to ensure that protocol assets enable a throughput yield-sharing portfolio and provide a self-sustaining liquidity fabric for all participants.
