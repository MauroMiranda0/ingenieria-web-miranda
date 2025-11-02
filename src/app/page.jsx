// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import { getHomepageData } from '@/lib/cms';

// Convertimos la página en un componente asíncrono para poder usar 'await'.
export default async function HomePage() {
  // 1. Obtenemos los datos de nuestro CMS (mock).
  const homepageData = await getHomepageData();
  
  // 2. Extraemos la sección específica que necesita el componente Hero.
  const { hero } = homepageData.content;

  return (
    <main>
      {/* 3. Renderizamos el componente Hero pasándole los datos como props. */}
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
      />
      {/* Aquí irán las otras secciones de la página en el futuro */}
    </main>
  );
}