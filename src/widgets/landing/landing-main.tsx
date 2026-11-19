'use client';

import { type ReactNode, useEffect, useRef } from 'react';
import { animate } from 'motion/mini';

const sectionStartOffset = '0 44px';

export function LandingMain({ children }: { children: ReactNode }) {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!main.current || !('IntersectionObserver' in window)) {
      return;
    }

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) {
      return;
    }

    const pending = new Map<Element, HTMLElement[]>();
    const active = new Map<HTMLElement, ReturnType<typeof animate>>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const content = pending.get(target);
          if (!isIntersecting || !content) {
            continue;
          }

          observer.unobserve(target);
          pending.delete(target);
          for (const element of content) {
            const animation = animate(
              element,
              { translate: [sectionStartOffset, '0 0px'] },
              {
                duration: 0.8,
                ease: [0.2, 0.55, 0.35, 1],
              },
            );
            active.set(element, animation);
            void animation.then(() => {
              element.style.removeProperty('translate');
              active.delete(element);
            });
          }
        }
      },
      { rootMargin: '0px 0px -144px 0px' },
    );

    const sections = main.current.querySelectorAll<HTMLElement>(':scope > section');
    for (const section of sections) {
      if (section.getBoundingClientRect().top < window.innerHeight || section.matches(':target')) {
        continue;
      }

      const content = Array.from(section.querySelectorAll<HTMLElement>(':scope > *'));
      for (const element of content) {
        element.style.translate = sectionStartOffset;
      }
      pending.set(section, content);
      observer.observe(section);
    }

    const stop = () => {
      observer.disconnect();
      for (const content of pending.values()) {
        for (const element of content) {
          element.style.removeProperty('translate');
        }
      }
      pending.clear();
      for (const [element, animation] of active) {
        animation.cancel();
        element.style.removeProperty('translate');
      }
      active.clear();
    };

    const onPreferenceChange = () => {
      if (preference.matches) {
        stop();
      }
    };
    const onHashChange = () => {
      const target = main.current?.querySelector(':scope > section:target');
      if (!target) {
        return;
      }
      observer.unobserve(target);
      pending.delete(target);
      for (const element of target.querySelectorAll<HTMLElement>(':scope > *')) {
        active.get(element)?.cancel();
        active.delete(element);
        element.style.removeProperty('translate');
      }
    };

    window.addEventListener('hashchange', onHashChange);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      preference.removeEventListener('change', onPreferenceChange);
      stop();
    };
  }, []);

  return (
    <main id="main" ref={main}>
      {children}
    </main>
  );
}
