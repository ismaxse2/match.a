import { Header, Hero } from '@/widgets/landing/hero';
import { LandingMain } from '@/widgets/landing/landing-main';
import {
  Audiences,
  Audit,
  Contacts,
  Footer,
  Products,
  Reasons,
  Team,
} from '@/widgets/landing/sections';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        К содержанию
      </a>
      <Header />
      <LandingMain>
        <Hero />
        <Audiences />
        <Products />
        <Reasons />
        <Team />
        <Audit />
        <Contacts />
      </LandingMain>
      <Footer />
    </>
  );
}
