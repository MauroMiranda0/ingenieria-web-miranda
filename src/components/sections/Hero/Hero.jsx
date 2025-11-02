import React from 'react';
import Link from 'next/link';
import './Hero.scss'; // Importamos el SCSS aquí

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  const heroStyle = {
    // Asumimos que la imagen estará en /public/images/
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle} role="banner" aria-labelledby="hero-title">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {ctaText && ctaLink && (
          <Link href={ctaLink} className="hero__cta">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;