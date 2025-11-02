// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import Services from '@/components/sections/Services/Services'; // 1. Importar el nuevo componente
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  const homepageData = await getHomepageData();
  
  // 2. Extraer tanto 'hero' como 'services' de los datos
  const { hero, services } = homepageData.content;

  return (
    <main>
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
      />
      {/* 3. Renderizar la nueva sección y pasarle los datos */}
      <Services services={services} />
    </main>
  );
}