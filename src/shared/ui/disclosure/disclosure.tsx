import { Plus } from 'lucide-react';
import type { ReactNode } from 'react';
type DisclosureProps = {
  title: string;
  summary: string;
  children: ReactNode;
  initiallyOpen?: boolean;
};
export function Disclosure({ title, summary, children, initiallyOpen = false }: DisclosureProps) {
  return (
    <details className="disclosure" open={initiallyOpen}>
      <summary>
        <h3>{title}</h3>
        <span>{summary}</span>
        <Plus aria-hidden />
      </summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
