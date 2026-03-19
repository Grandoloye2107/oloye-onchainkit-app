// Shared TypeScript types
export type WalletAddress = `0x${string}`;

export interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
}

export interface Transaction {
  hash: string;
  value: string;
  type: "send" | "receive" | "contract";
  status: "confirmed" | "pending";
  timestamp: number;
}