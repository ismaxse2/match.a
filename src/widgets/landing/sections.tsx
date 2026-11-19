import Image from 'next/image';
import { ArrowUpRight, Asterisk } from 'lucide-react';

import { InquiryForm } from '@/features/inquiry/inquiry-form';

import { Badge } from '@/shared/ui/badge/badge';
import { Button } from '@/shared/ui/button/button';
import { Card } from '@/shared/ui/card/card';
import { Disclosure } from '@/shared/ui/disclosure/disclosure';
import { ListItem } from '@/shared/ui/list-item/list-item';
import { Logo } from '@/shared/ui/logo/logo';
import { Navigation } from '@/shared/ui/navigation/navigation';

import { audiences, navigationItems, products, reasons, team } from './content';
import { TeamBio } from './team-bio';

export function Audiences() {
  return (
    <section className="shell section" id="services">
      <h2>С кем мы работаем</h2>
      <div className="cards">
        {audiences.map(({ name, description, outcome, tone, icon: Icon }) => {
          return (
            <Card
              key={name}
              title={name}
              tone={tone}
              icon={<Icon size={35} strokeWidth={1.2} aria-hidden />}
              footer={
                <>
                  <b>Что вы получаете</b>
                  <p>{outcome}</p>
                </>
              }
            >
              <p>{description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
export function Products() {
  return (
    <section className="section shell" id="products">
      <h2>
        Продукты <i>MATCH.A</i>
      </h2>
      {products.map(({ name, summary, description }, i) => (
        <Disclosure key={name} title={name} summary={summary} initiallyOpen={i === 0}>
          <p>{description}</p>
        </Disclosure>
      ))}
    </section>
  );
}
export function Reasons() {
  return (
    <section className="reasons">
      <div className="section shell split">
        <div>
          <h2>Почему MATCH.A</h2>
          <div className="reasons-art">
            <Badge variant="sticker" className="sticker--reverse" icon={<Asterisk aria-hidden />}>
              <span>
                Каждый раз —<br />
                MATCH!
              </span>
            </Badge>
            <Image
              src="/match-illustration.svg"
              width={360}
              height={360}
              alt=""
              className="reasons-illustration"
            />
          </div>
        </div>
        <ul>
          {reasons.map(({ title, description }) => (
            <ListItem
              key={title}
              title={title}
              description={description}
              icon={<Asterisk aria-hidden />}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
export function Team() {
  return (
    <section className="section shell" id="team">
      <h2>Команда</h2>
      <div className="team-grid">
        {team.map(({ name, intro, bio, avatar }) => (
          <article className="team-profile" key={name}>
            <div className="team-profile-heading">
              <div className="team-portrait">
                <Image src={avatar} width={120} height={120} alt="" className="team-avatar" />
              </div>
              <div>
                <h3>{name}</h3>
                <p>{intro}</p>
              </div>
            </div>
            <TeamBio name={name} bio={bio} />
          </article>
        ))}
      </div>
    </section>
  );
}
export function Audit() {
  return (
    <section className="audit" id="audit">
      <div className="shell section split">
        <div>
          <p>Не знаете, с кем и как взаимодействовать?</p>
          <h2>
            Начните с <i>MATCH. A AUDIT</i>
          </h2>
        </div>
        <div>
          <p>
            Мы проанализируем ваш бренд и составим «карту партнёрств»: 15 потенциальных партнёров с
            приоритетами и идеями для коллабораций. Это небольшой проект, который даст ясность и
            станет первым шагом к сильным партнёрствам.
          </p>
          <Button asChild className="my-5">
            <a href="#contacts">
              Заказать аудит <ArrowUpRight />
            </a>
          </Button>
          <p className="text-sm">
            Затем вы сможете перейти к запуску коллабораций, постоянному партнёрству или другим
            продуктам MATCH.A.
          </p>
        </div>
      </div>
    </section>
  );
}
export function Contacts() {
  return (
    <section className="section shell split" id="contacts">
      <div>
        <h2>Обсудим ваш проект?</h2>
        <p>Оставьте заявку — мы свяжемся с вами, чтобы понять задачу и предложить решение.</p>
        <div className="contact-links">
          <a href="mailto:match.a@gmail.com">
            match.a@gmail.com <ArrowUpRight />
          </a>
          <a href="https://t.me/lomakhova">
            @lomakhova <ArrowUpRight />
          </a>
        </div>
      </div>
      <InquiryForm />
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="footer-brand">
          <a className="brand-link" href="#top">
            <Logo />
          </a>
          <p>Агентство бренд-партнёрств и коллабораций в сфере wellness.</p>
        </div>
        <div className="footer-menu">
          <Navigation
            aria-label="Навигация в подвале"
            items={[
              { label: 'Услуги', href: '#services' },
              ...navigationItems,
              { label: 'Правовая информация', href: '/legal' },
            ]}
          />
          <small>© MATCH.A, 2026. Все права защищены.</small>
        </div>
      </div>
    </footer>
  );
}
