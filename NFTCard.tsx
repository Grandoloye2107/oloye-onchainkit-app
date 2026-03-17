// NFT card component
export default function NFTCard({ name }: { name: string }) {
  return (
    <div className="border rounded-lg p-3">
      <div className="w-full h-40 bg-gray-100 rounded mb-2" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}
// empty state handled` comment.