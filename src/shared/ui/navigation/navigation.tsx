type NavigationProps = { 'aria-label': string; items: readonly { label: string; href: string }[] };
export function Navigation({ items, 'aria-label': label }: NavigationProps) {
  return (
    <nav className="navigation" aria-label={label}>
      {items.map(({ label, href }) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </nav>
  );
}
