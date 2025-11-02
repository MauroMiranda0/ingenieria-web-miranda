// src/components/sections/Services/Services.jsx

import React from 'react';
import Card from '@/components/common/Card/Card';
import './Services.scss';

const Services = ({ services }) => {
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="services__container">
        <h2 id="services-title" className="services__title">Nuestros Servicios</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;