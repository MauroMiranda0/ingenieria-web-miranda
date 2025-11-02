// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About'; // 1. Importar
import Services from '@/components/sections/Services/Services';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  const homepageData = await getHomepageData();
  const { hero, about, services, testimonials } = homepageData.content; // 2. Extraer datos de 'about'
  
  return (
    <main>
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
      />
      {/* 3. Renderizar el componente About */}
      <About
        title={about.title}
        paragraphs={about.paragraphs}
        ctaText={about.ctaText}
        ctaLink={about.ctaLink}
        image={about.image}
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