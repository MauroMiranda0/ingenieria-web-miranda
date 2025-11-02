// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import Services from '@/components/sections/Services/Services';
import Testimonials from '@/components/sections/Testimonials/Testimonials'; // 1. Importar
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  const homepageData = await getHomepageData();
  const { hero, services, testimonials } = homepageData.content; // 2. Extraer datos

  return (
    <main>
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
      />
      <Services 
        title={services.title}
        subtitle={services.subtitle}
        items={services.items}
      />
      {/* 3. Renderizar el componente */}
      <Testimonials testimonials={testimonials} />
    </main>
  );
}