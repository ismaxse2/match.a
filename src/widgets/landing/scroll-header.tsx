'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

export function ScrollHeader({ children }: { children: ReactNode }) {
  const slot = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const container = slot.current;
    const header = bar.current;
    if (!container || !header) return;
    const measure = () => (container.style.height = header.offsetHeight + 'px');
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(header);
    const update = () => setFixed(window.scrollY >= 240);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      resize.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, []);
  return (
    <div ref={slot} id="top" className="header-slot">
      <header ref={bar} className={fixed ? 'header-bar is-fixed' : 'header-bar'}>
        <div className="shell masthead">{children}</div>
      </header>
    </div>
  );
}
