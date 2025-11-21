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
            alt="Ilustración sobre la agencia" 
            width={700} // Ancho intrínseco de la imagen
            height={550} // Alto intrínseco de la imagen
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
