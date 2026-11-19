import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/shared/ui/button/button';
import { Logo } from '@/shared/ui/logo/logo';

export const metadata: Metadata = {
  title: 'Правовая информация — MATCH.A',
};

export default function LegalPage() {
  return (
    <>
      <header className="shell masthead">
        <Link className="brand-link" href="/">
          <Logo />
        </Link>
      </header>
      <main className="shell section">
        <h1 className="hero-title">Правовая информация</h1>
        <p className="intro">Правовая информация появится на этой странице позже.</p>
        <Button asChild variant="outline">
          <Link href="/">На главную</Link>
        </Button>
      </main>
    </>
  );
}
