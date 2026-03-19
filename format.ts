// Utility functions for formatting
export function formatBalance(value: number): string {
  return value.toFixed(4);
}
export function formatEth(value: number): string {
  return value.toFixed(6) + " ETH";
}
// memoized with useMemo in hooks