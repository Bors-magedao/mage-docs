---
title: CFMM Implementation in Mage DEX
description: Technical breakdown of Mage DEX's Constant Function Market Maker (CFMM) model, reserve dynamics, and fee logic.
---

# CFMM Implementation in Mage DEX

Mage DEX's **Constant Function Market Maker (CFMM)** integrates dynamic reserve management with a **dual-reserve system** to achieve both price precision and liquidity stability.

---

## Core Implementation

### Platform Integration
Built for the **Solana Virtual Machine (SVM)** using the **Anchor framework**, ensuring efficient, secure, and composable on-chain execution.

### Dual-Reserve System
Mage DEX uses two layers of reserves:

- **Virtual Reserves:** Enhance price precision and minimize slippage by simulating deeper liquidity.  
- **Real Reserves:** Represent actual on-chain token balances and enforce solvency limits.

The product of virtual reserves remains constant through all swaps, preserving the CFMM invariant and ensuring consistent pricing.

---

## Dynamic Reserve Adjustment

Each swap recalculates both **virtual** and **real** reserves to maintain the invariant:

$$
x_v \cdot y_v = k
$$

where:  
- $x_v$ = virtual reserve of Token A  
- $y_v$ = virtual reserve of Token B  
- $k$ = invariant constant

---

## Swap Operations

### Buy Operation (Token A → Token B)

1. **Compute invariant:**
   $$
   k = x_v \times y_v
   $$

2. **Adjust virtual reserve of Token B:**
   $$
   y_v' = y_v - \Delta y
   $$

3. **Derive new virtual reserve of Token A:**
   $$
   x_v' = \frac{k}{y_v'} + 1
   $$

4. **Determine Token A cost:**
   $$
   \text{Cost}_A = x_v' - x_v
   $$

### Sell Operation (Token B → Token A)

1. **Increase Token A reserve:**
   $$
   x_v' = x_v + \Delta x
   $$

2. **Recalculate Token B reserve:**
   $$
   y_v' = \frac{k}{x_v'}
   $$

3. **Determine Token B output:**
   $$
   \text{Output}_B = y_v - y_v'
   $$

---

## Liquidity & Recalibration

Liquidity events such as deposits or withdrawals trigger a **recalibration routine** to synchronize virtual and real reserves:

$$
x_v = f(x_r, \Delta x), \quad y_v = f(y_r, \Delta y)
$$

This ensures that on-chain liquidity changes are immediately reflected in trade pricing.

---

## Fee and Reward Structure

### Swap Fee (per trade)

$$
\text{Fee} = \text{Trade Amount} \times 0.00007 \; (0.007\%)
$$

The Mage Liquidity Layer offers **7 fee tiers** ranging from **0.0001% to 1%**, with 0.007% being one of the most competitive tiers.

### Fee Distribution (post-ICO)

- **Liquidity Providers (LPs):** receive **70%** of all fees  
- **Protocol Share (30%)** split as:
  - **15%** → Token Staking Pool  
  - **10%** → Treasury  
  - **5%** → NFT Staking Pool  

---

### Loyalty Boost (Time-Weighted)

$$
\text{LP Reward}_i =
\left(
\frac{\text{Pool Fees} \times s_i}{S}
\right)
\times B(t_i)
$$

Where:
- $s_i$ = LP's share of liquidity  
- $S$ = total pool liquidity  
- $B(t_i)$ = loyalty multiplier (2× or 3× after 90 days)

Early and long-term capital endpoints earn an increased percentage of liquidity node fees, with boost levels reaching **2-3x after approximately 90 days**.

---

## Summary

Mage DEX's CFMM model maintains a **dual-reserve invariant**, enabling:

* **Tight spreads** and minimal slippage  
* **Consistent pricing** across all trade sizes  
* **Transparent and adaptive** fee distribution  
* **Market-responsive** pricing through virtual bonding curves  
* **On-chain solvency** via real reserve constraints

Through precise virtual and real reserve synchronization, Mage DEX achieves a **robust, fair, and scalable** decentralized exchange system on Solana.

---

## Additional Resources

For more information on Mage Labs' fee structure and liquidity incentives, see:
- [Fee Structure](/technical-details/fee-structure)
- [Smart Contract Architecture](/technical-details/smart-contract-architecture)
- [Security & Audits](/security-and-audits/audit-summary)
- [How to Use Mage Labs](/how-to-use-mage-labs)
