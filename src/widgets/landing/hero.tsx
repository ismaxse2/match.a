import Image from 'next/image';
import { ArrowUpRight, Asterisk } from 'lucide-react';

import { Badge } from '@/shared/ui/badge/badge';
import { Button } from '@/shared/ui/button/button';
import { Logo } from '@/shared/ui/logo/logo';
import { Navigation } from '@/shared/ui/navigation/navigation';

import heroPhoto from '../../../public/matcha-still.webp';

import { navigationItems } from './content';
import { MobileMenu } from './mobile-menu';
import { ScrollHeader } from './scroll-header';

export function Header() {
  return (
    <ScrollHeader>
      <a className="brand-link" href="#top">
        <Logo />
      </a>
      <p className="descriptor">
        Агентство бренд-партнёрств
        <br />и коллабораций в сфере wellness
      </p>
      <Navigation aria-label="Основная навигация" items={navigationItems} />
      <Button asChild size="compact">
        <a href="#contacts">
          Обсудить проект <ArrowUpRight />
        </a>
      </Button>
      <MobileMenu items={navigationItems} />
    </ScrollHeader>
  );
}
export function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-copy">
        <h1 className="hero-title">
          Агентство бренд-партнёрств и коллабораций в сфере <i>wellness.</i>
        </h1>
        <p className="intro">
          Подбираем подходящих партнёров и амбассадоров. Сочетаем бренды и аудитории так, чтобы
          коллаборация была органичной.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button asChild>
            <a href="#contacts">
              Обсудить проект <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#audit">Начать с аудита</a>
          </Button>
        </div>
      </div>
      <div className="hero-photo">
        <Image
          src={heroPhoto}
          fill
          preload
          sizes="(min-width: 800px) 46vw, 100vw"
          alt="Клубника на краю розовой чаши с матчей"
        />
        <Badge variant="sticker" className="hero-sticker" icon={<Asterisk aria-hidden />}>
          IT’S MATCH!
        </Badge>
      </div>
      <div className="hero-note">
        <div>
          <strong>200+</strong>
          <span>
            проверенных контактов
            <br />в сфере здоровья
          </span>
        </div>
        <p>
          Экологично, эффективно, надёжно <i>— IT’S MATCH!</i>
        </p>
      </div>
    </section>
  );
}
