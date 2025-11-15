// src/components/sections/Hero/Hero.jsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importamos el componente Image
import './Hero.scss';

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage, logoSrc }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle} role="banner" aria-labelledby="hero-title">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        {/* Renderizamos el logo si la prop 'logoSrc' existe */}
        {logoSrc && (
          <div className="hero__logo-container">
            <Image 
              src={logoSrc}
              alt="Logo de Ingeniería Web Miranda"
              width={100} // Ancho de la imagen
              height={100} // Alto de la imagen
              className="hero__logo"
            />
          </div>
        )}
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