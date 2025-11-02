// src/app/page.jsx

import Hero from '@/components/sections/Hero/Hero';
import Services from '@/components/sections/Services/Services';
import { getHomepageData } from '@/lib/cms';

export default async function HomePage() {
  const homepageData = await getHomepageData();
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
      <Services 
        title={services.title}
        subtitle={services.subtitle}
        items={services.items}
      />
    </main>
  );
}