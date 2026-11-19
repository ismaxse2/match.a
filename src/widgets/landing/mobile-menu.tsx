'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { Navigation } from '@/shared/ui/navigation/navigation';

export function MobileMenu({ items }: { items: readonly { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const header = trigger.current?.closest('header');
    const media = window.matchMedia('(max-width:600px)');
    const close = () => setOpen(false);
    const outside = (event: Event) => {
      if (event.target instanceof Node && !header?.contains(event.target)) close();
    };
    const link = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a')) close();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    header?.addEventListener('click', link);
    document.addEventListener('keydown', escape);
    media.addEventListener('change', close);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      header?.removeEventListener('click', link);
      document.removeEventListener('keydown', escape);
      media.removeEventListener('change', close);
    };
  }, [open]);
  return (
    <div className="mobile-menu">
      <button
        type="button"
        ref={trigger}
        className="menu-toggle"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <div className="menu-panel" id={id} inert={!open}>
        <Navigation aria-label="Мобильная навигация" items={items} />
      </div>
    </div>
  );
}
