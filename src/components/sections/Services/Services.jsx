// src/components/sections/Services/Services.jsx
import React from 'react';
import ServiceItem from './ServiceItem'; // Importamos el nuevo componente
import './Services.scss';

const Services = ({ title, subtitle, items }) => {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__container">
        <div className="services__header">
          <h2 id="services-title" className="services__title">{title}</h2>
          <p className="services__subtitle">{subtitle}</p>
        </div>
        <div className="services__grid">
          {items.map((service, index) => (
            <ServiceItem
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