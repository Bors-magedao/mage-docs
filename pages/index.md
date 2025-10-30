---
icon: hand-wave
---

# Welcome to Mage Labs

Mage Labs is a protocol building the liquidity infrastructure layer for Solana's DeFi ecosystem. It is designed to act as a throughput engine for aggregators, bots, and retail order flow participants, transforming passive liquidity into tokenized infrastructure to enable efficient capital circulation across Solana. The protocol's architecture is not intended to compete for trades, but rather to power how they happen.

## Mage Execution Protocol: A Self-Sustaining Liquidity Fabric

Mage Labs addresses inefficiencies in the Solana liquidity infrastructure, such as fragmented liquidity, high fees, and low capital efficiency. The Mage Automated Market Maker (Execution Protocol) re-architects liquidity itself, focusing on several key features:

* **Liquidity as Infrastructure**: Capital liquidity nodes function as throughput nodes within a unified network, rather than isolated farms.
* **Adaptive Fee Framework**: Flat-fee curves are designed to enable efficient routing across all trade sizes and conditions, reducing execution costs by a factor of 20x to 1000x.
* **Autonomous Liquidity Engine (ALE)**: A protocol-owned execution layer that automates market operations to generate non-dilutive, protocol-level yield.
* **Horizontal Fee Distribution**: A programmable mechanism that distributes protocol yield across token stakers, NFT stakers, and the treasury, aligning network participants with protocol growth.
* **Composability First**: Designed to integrate with aggregators, arbitrage and trading bots, and wallets to extend Solana's liquidity fabric rather than fragmenting it.

This architecture forms an "everyone eats" model, a self-sustaining liquidity fabric where all participants share in the network's expansion.

## Key Features & Protocol Design

### Fee Structure

The Mage Liquidity Layer has a variety of fee tiers (7 in total), ranging from 0.0001% to 1%.

### Liquidity Incentives

* **Capital Endpoint Loyalty Boost**: Early and long-term capital providers (capital endpoints) earn a higher percentage of liquidity node fees, with boost levels reaching 2-3x after approximately 90 days.
* **Gamified Node Architecture**: Only one liquidity node can exist for a given trading pair and fee tier, rewarding early movers who claim the most competitive fee slots and helping to concentrate liquidity.

### Revenue Streams

* **Liquidity Provider Fees**: With loyalty boost multipliers.
* **Fee Relay Staking**: Token and NFT stakers share in the protocol fee yield.
* **Autonomous Liquidity Engine (ALE)**: Generates protocol-level yield.

#### Fee Relay Staking

The protocol has two independent fee relay staking functions:

* **MAGE Token Fee Relay Staking Pool**: Receives 15% of capital endpoint fees.
* **MAGE NFT Fee Relay Staking Pool**: Receives 5% of capital endpoint fees.

Distributions are on-chain, pro-rata, and non-custodial, allowing stakers to claim accrued amounts daily.

---

### Quick Links

* [How to Use Mage Labs](how-to-use-mage-labs.md)
* [Security and Audits](security-and-audits/security-measures.md)
* [Technical Details](technical-details/smart-contract-architecture.md)
* [Developer Toolkit](developer-docs/api-reference.md)
* [FAQ](faq.md)
* [X (formerly Twitter)](https://x.com/MageLabsOnSol)
* [MageLabs.xyz](https://magelabs.xyz)