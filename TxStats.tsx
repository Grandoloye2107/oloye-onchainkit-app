// Transaction summary stats
export default function TxStats() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="p-3 bg-gray-50 rounded-lg"><p className="text-xs text-gray-500">Total sent</p><p className="text-lg font-medium">0 ETH</p></div>
      <div className="p-3 bg-gray-50 rounded-lg"><p className="text-xs text-gray-500">Total received</p><p className="text-lg font-medium">0 ETH</p></div>
    </div>
  );
}