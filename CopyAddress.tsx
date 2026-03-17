// Copy address to clipboard
export default function CopyAddress({ address }: { address: string }) {
  return (
    <button onClick={() => navigator.clipboard.writeText(address)}>
      Copy Address
    </button>
  );
}
