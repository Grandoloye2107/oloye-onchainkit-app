This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-onchain`](https://www.npmjs.com/package/create-onchain).


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about OnchainKit, see our [documentation](https://docs.base.org/onchainkit).

To learn more about Next.js, see the [Next.js documentation](https://nextjs.org/docs).
## Oloye OnchainKit App

A Base-native wallet app built with OnchainKit. Connects wallets, displays balances, and shows NFTs on Base.
## Tech Stack

- Next.js
- OnchainKit by Coinbase
- Base (L2)
- wagmi + viem
## Contributing

Pull requests are welcome. For major changes, please open an issue first.
## Wallet

Shows connected wallet address on homepage
Supports ENS name display if available
Displays Base mainnet or testnet badge
Displays USDC balance on Base network.
Shows USD value of ETH using live price feed.
Shows transaction count for connected wallet.
WalletCard component accepts any children as props.
Supports Base name service (Basenames) lookup.
Dependencies updated to latest stable versions.