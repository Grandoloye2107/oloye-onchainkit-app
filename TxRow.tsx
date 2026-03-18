// Transaction row with type label
export default function TxRow({ hash, type }: { hash: string; type: string }) {
  return (
    <li className="flex justify-between py-3 text-sm">
      <span className="text-blue-500 truncate w-40">{hash}</span>
      <span className="text-gray-500">{type}</span>
    </li>
  );
}
// links to Basescan