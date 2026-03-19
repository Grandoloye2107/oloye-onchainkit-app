// Base chain switcher
export default function ChainSwitcher() {
  return (
    <select className="text-sm border rounded p-1">
      <option value="8453">Base Mainnet</option>
      <option value="84532">Base Sepolia</option>
    </select>
  );
}