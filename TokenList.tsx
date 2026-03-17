// Token list with icons
const tokens = ["ETH", "USDC", "DAI"];
export default function TokenList() {
  return (
    <ul className="space-y-2">
      {tokens.map(t => <li key={t} className="p-2 border rounded">{t}</li>)}
    </ul>
  );
}
```
```