// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Services from '@/components/sections/Services/Services';
import Portfolio from '@/components/sections/Portfolio/Portfolio';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  const { hero, about, services, portfolio, testimonials, contact } = (await getHomepageData()).content;

  return (
    <main>
      <Hero {...hero} />
      <About {...about} />
      <Services title={services.title} subtitle={services.subtitle} items={services.items} />
      <Portfolio {...portfolio} />
      <Testimonials testimonials={testimonials} />
      {/* 
        ¡ESTA ES LA LÍNEA CORREGIDA!
        El operador "spread" (...) pasa todas las propiedades del objeto 'contact' 
        (info, formPlaceholders, ctaText) como props individuales al componente.
      */}
      <Contact {...contact} />
    </main>
  );
}