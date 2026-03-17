// Load more button for pagination
export default function LoadMore({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick} className="px-4 py-2 border rounded mt-4">Load more</button>;
}