// NFT detail modal
export default function NFTModal({ open }: { open: boolean }) {
  if (!open) return null;
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center">NFT Detail</div>;
}
// traits display section` 
// fade-in animation on open