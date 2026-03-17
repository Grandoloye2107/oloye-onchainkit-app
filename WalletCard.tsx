// Reusable WalletCard component
export default function WalletCard({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border rounded-xl shadow-sm">{children}</div>;
}
```
```