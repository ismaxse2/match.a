export function Logo({ variant = 'compact' }: { variant?: 'compact' | 'display' }) {
  return <span className={variant === 'display' ? 'wordmark' : 'brand'}>MATCH . A</span>;
}
