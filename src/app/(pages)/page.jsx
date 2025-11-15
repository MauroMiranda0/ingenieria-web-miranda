// src/app/page.jsx

import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll'; // 1. Importar
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Services from '@/components/sections/Services/Services';
import Portfolio from '@/components/sections/Portfolio/Portfolio';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
import { getHomepageData } from '@/lib/cms';
import Header from '@/components/layout/Header/Header';

export default async function HomePage() {
  const { content, siteIdentity, footer, navigation } = await getHomepageData();
  const { hero, about, services, portfolio, testimonials, contact } = content;
  const heroLogo = footer?.logoBlanco || siteIdentity?.logoPrincipal;
  const socialLinks = footer?.contactInfo?.socials || [];

  return (
    <main>
      {/* Barra de navegación antes del hero */}
      <Header navLinks={navigation} socialLinks={socialLinks} />

      {/* La sección Hero no necesita animación de scroll */}
      <Hero {...hero} logoSrc={heroLogo} logoAlt="Ingenieria Web Miranda" />
      {/* 2. Envolver cada sección con AnimateOnScroll */}
      <AnimateOnScroll>
        <About {...about} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Services title={services.title} subtitle={services.subtitle} items={services.items} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Portfolio {...portfolio} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Testimonials testimonials={testimonials} />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <Contact {...contact} />
      </AnimateOnScroll>
    </main>
  );
}
