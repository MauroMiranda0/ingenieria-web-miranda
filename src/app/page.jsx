// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Services from '@/components/sections/Services/Services';
import Portfolio from '@/components/sections/Portfolio/Portfolio'; // 1. Importar
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  // 2. Extraer datos de 'portfolio'
  const { hero, about, services, portfolio, testimonials } = (await getHomepageData()).content;

  return (
    <main>
      <Hero {...hero} />
      <About {...about} />
      <Services title={services.title} subtitle={services.subtitle} items={services.items} />
      {/* 3. Renderizar el componente */}
      <Portfolio 
        title={portfolio.title}
        subtitle={portfolio.subtitle}
        filters={portfolio.filters}
        items={portfolio.items}
      />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}