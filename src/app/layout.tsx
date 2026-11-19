import '@/shared/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MATCH.A — агентство бренд-партнёрств',
  description:
    'Подбираем партнёров, экспертов и амбассадоров для органичных коллабораций в сфере wellness.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
