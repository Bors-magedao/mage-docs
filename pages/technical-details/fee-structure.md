# Fee Structure in Mage Labs

Mage Labs employs a transparent, configurable fee model that combines flat-rate simplicity with mathematical precision, delivering predictable trading costs and equitable reward distribution across all participants.

---

## Core Fee System

### Flat-Rate Fee Model

Mage Labs utilizes a flat-rate fee structure to maintain consistency and predictability across all trade volumes:

* **Uniform Application**: Ensures consistent fee application regardless of trade size
* **Reduced Volatility**: Minimizes percentage-based cost fluctuations, making high-volume trades more efficient
* **Transparent Governance**: Fee parameters are configurable on-chain for transparent governance and dynamic updates

### Fee Tiers

The Mage Liquidity Layer offers **7 fee tiers** ranging from **0.0001% to 1%**, allowing communities to choose rates that align with their volume brackets and promote optimal swap rates.

---

## Fee Distribution per Period

Let $\text{Fee}_{s,p}$ represent the total DEX fees accrued during a given period $p$.

### Split of Fees

The protocol distributes fees according to the following allocation:

#### Liquidity Providers (LPs): 70%

$$
\text{LP Share} = 0.70 \times \text{Fee}_{s,p}
$$

#### Protocol Allocation: 30%

The protocol's 30% share is subdivided as follows:

1. **Token Staking Pool: 15%**
   $$
   \text{Token Staking} = 0.15 \times \text{Fee}_{s,p}
   $$
   (15% of protocol share = 4.5% of total fees)

2. **Treasury: 10%**
   $$
   \text{Treasury} = 0.10 \times \text{Fee}_{s,p}
   $$
   (10% of protocol share = 3% of total fees)

3. **NFT Staking Pool: 5%**
   $$
   \text{NFT Staking} = 0.05 \times \text{Fee}_{s,p}
   $$
   (5% of protocol share = 1.5% of total fees)

---

## User Payouts (Pro-Rata Distribution)

### Variables

Let:

* $H_{u,p}^{tok}$: User $u$'s staked MAGE tokens during period $p$
* $H_{\Sigma,p}^{tok}$: Total MAGE tokens staked across all users during period $p$
* $H_{u,p}^{nft}$: User $u$'s staked NFT weight during period $p$
* $H_{\Sigma,p}^{nft}$: Total NFT staking weight across all users during period $p$

### Token Staking Rewards

The payout for each token staker is calculated pro-rata based on their share of the total staked tokens:

$$
P_{u,p}^{tok} = \frac{H_{u,p}^{tok}}{H_{\Sigma,p}^{tok}} \times \left(0.15 \times \text{Fee}_{s,p}\right)
$$

**In words**: Each user receives a share of the 15% token staking pool proportional to their stake.

### NFT Staking Rewards

Similarly, NFT stakers receive rewards based on their proportional stake:

$$
P_{u,p}^{nft} = \frac{H_{u,p}^{nft}}{H_{\Sigma,p}^{nft}} \times \left(0.05 \times \text{Fee}_{s,p}\right)
$$

**In words**: Each NFT staker receives a share of the 5% NFT staking pool proportional to their staked NFT weight.

### Distribution Characteristics

* **On-Chain**: All distributions are executed on-chain
* **Pro-Rata**: Rewards are distributed proportionally based on stake
* **Non-Custodial**: Stakers maintain full control of their assets
* **Daily Claims**: Stakers can claim accrued rewards daily

---

## Fee Distribution Breakdown

### Visual Summary

| Recipient | Percentage of Total Fees | Formula |
|-----------|-------------------------|---------|
| **Liquidity Providers** | 70% | $0.70 \times \text{Fee}_{s,p}$ |
| **MAGE Token Stakers** | 4.5% | $0.15 \times \text{Fee}_{s,p}$ (15% of 30%) |
| **Treasury** | 3% | $0.10 \times \text{Fee}_{s,p}$ (10% of 30%) |
| **NFT Stakers** | 1.5% | $0.05 \times \text{Fee}_{s,p}$ (5% of 30%) |

### Loyalty Boost Multiplier

Early and long-term liquidity providers earn an increased percentage of fees through the **Capital Endpoint Loyalty Boost**:

* **Standard LP Rate**: Base 70% of trading fees
* **Loyalty Multiplier**: 2-3× after approximately 90 days
* **Effective Rate**: Up to 140-210% of standard LP fees for boosted providers

This boost is designed to reduce risk/reward curves and break-even periods for long-term capital endpoints.

---

## Governance & Transparency

### On-Chain Configuration

All fee ratios and staking reward coefficients are governance-controlled and on-chain configurable, ensuring:

* **Transparent Allocation**: Clear, verifiable distribution of platform revenue  
* **Equitable Returns**: Fair compensation for active participants  
* **Market Adaptability**: Dynamic adjustment to evolving market conditions  
* **Community Control**: Governed transactions ensure transparency and oversight

### Configurable Parameters

The following parameters can be adjusted through governance:

* Protocol fee rates
* LP fee rates
* Token staking allocation
* NFT staking allocation
* Treasury allocation
* Loyalty boost multipliers
* Fee tier structures

---

## Comparative Advantage

### Cost Efficiency

Mage Labs Adaptive Fee Framework with flat-fee curves reduces execution costs by:

* **20x to 1000x** cheaper than some competing infrastructure layers
* **95% to 99%** lower execution costs per swap compared to other Solana DEX protocols
* Predictable, stable fees across all trade sizes

### Revenue Sharing Model

The "everyone eats" model ensures sustainable growth:

* **70%** to liquidity providers (with loyalty boost potential)
* **30%** distributed across stakers, NFT holders, and treasury
* Creates a self-reinforcing economic loop where all participants benefit from network expansion

---

## Example Calculations

### Scenario: $100,000 in Total Fees

1. **Liquidity Providers**: $\$70,000$ (70%)
2. **Token Stakers**: $\$15,000$ (15%)
3. **Treasury**: $\$10,000$ (10%)
4. **NFT Stakers**: $\$5,000$ (5%)

### Individual Token Staker Example

If a user has staked **10,000 MAGE** and the total staked is **1,000,000 MAGE**:

$$
\text{User's Share} = \frac{10,000}{1,000,000} = 1\%
$$

$$
\text{User's Reward} = 0.01 \times \$15,000 = \$150
$$

### Individual NFT Staker Example

If a user has staked NFTs worth **50 weight units** and total NFT weight is **5,000 units**:

$$
\text{User's Share} = \frac{50}{5,000} = 1\%
$$

$$
\text{User's Reward} = 0.01 \times \$5,000 = \$50
$$

---

## Summary

Mage Labs fee architecture combines:

* **Flat-Rate Simplicity**: Predictable costs across all trade sizes  
* **Mathematical Precision**: Pro-rata distribution ensures fairness  
* **Equitable Rewards**: Fair distribution to LPs, stakers, and NFT holders  
* **Transparent Control**: Community-driven governance of fee parameters  
* **Sustainable Growth**: "Everyone eats" model aligns all participants with protocol success

This fee structure creates a self-sustaining liquidity fabric where protocol growth directly benefits all ecosystem participants through recurring, predictable cash flows.

---

## Additional Resources

For more information on Mage Labs technical implementation and liquidity mechanisms, see:

* [CFMM Implementation](/technical-details/cfmm-implementation)
* [Smart Contract Architecture](/technical-details/smart-contract-architecture)
* [Security & Audits](/security-and-audits/audit-summary)
* [FAQ](/faq)
