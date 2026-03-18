// Transaction status badge
export default function TxBadge({ status }: { status: "confirmed" | "pending" }) {
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
      {status}
    </span>
  );
}