import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.scss'; // Importamos el SCSS aquí

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage, logoSrc, logoAlt = 'Ingenieria Web Miranda' }) => {
  const heroStyle = {
    // Asumimos que la imagen estará en /public/images/
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle} role="banner" aria-labelledby="hero-title">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        {logoSrc && (
          <div className="hero__logo">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={320}
              height={120}
              priority
              className="hero__logo-image"
            />
          </div>
        )}
        <h2 id="hero-title" className="hero__title">{title}</h2>
        {/* <p className="hero__subtitle">{subtitle}</p> */}
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
