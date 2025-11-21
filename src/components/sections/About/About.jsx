// src/components/sections/About/About.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Usaremos el componente de imagen de Next.js
import './About.scss';

const About = ({ title, paragraphs, ctaText, ctaLink, image }) => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text-content">
          <h2 className="about__title">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">{paragraph}</p>
          ))}
          <Link href={ctaLink} className="about__cta">
            {ctaText}
          </Link>
        </div>
        <div className="about__image-content">
          <Image 
            src={image} 
            alt="Ilustracion sobre la agencia" 
            width={700} // Ancho intrinseco de la imagen
            height={550} // Alto intrinseco de la imagen
            sizes="(min-width: 992px) 50vw, 100vw"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
