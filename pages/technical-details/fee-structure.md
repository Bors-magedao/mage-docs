# Fee Structure in Mage DEX


![Mage Labs Reward Claim Model](/assets/mage-reward-claim-model.jpg)

<style>
  .lp-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    margin: 20px 0;
  }
  .lp-content {
    flex: 1;
    min-width: 300px;
  }
  .lp-image {
    flex: 1;
    min-width: 250px;
  }
  .lp-image img {
    width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .lp-content, .lp-image {
      flex: 100%;
    }
  }
</style>

Mage DEX employs a transparent, configurable fee model designed to deliver predictable trading costs regardless of trade volume.

## Core Fee System
- **Flat-Rate Fee Model:**  
  - Ensures consistent fee application across diverse trade sizes.
  - Minimizes percentage-based cost fluctuations, making high-volume trades more cost-effective.
  
- **Configurable Parameters:**  
  - All fee parameters—including protocol, creator, and liquidity provider fees—are fully configurable on-chain.
  - Adjustments are executed through governed transactions to ensure transparency and community oversight.

## Fee Distribution Components
- **Liquidity Provider Fees:**  
  - Distributed to LP token holders as part of their share in pool gains.
- **Protocol Fees:**  
  - Allocated to sustain platform operations and fund future developments.
- **Creator Fees:**  
  - Directed toward ongoing project enhancements and ecosystem support.

**Note:** This fee structure highlights Mage DEX's commitment to efficiency and fairness, achieving robust, market-responsive fee adjustments without unnecessary complexity.