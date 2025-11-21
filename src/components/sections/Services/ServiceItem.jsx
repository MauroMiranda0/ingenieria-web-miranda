// src/components/sections/Services/ServiceItem.jsx

import React from 'react';
import './ServiceItem.scss';

// Mapeo a clases Font Awesome 6 para cada servicio
const iconClassMap = {
  laptop: 'fa-solid fa-laptop-code fa-bounce',           // Desarrollo web
  cubes: 'fa-solid fa-microchip fa-bounce',              // Automatizacion
  connectdevelop: 'fa-solid fa-puzzle-piece fa-bounce',  // APIs
  gem: 'fa-solid fa-hand-sparkles fa-bounce',            // UX/UI
  diamond: 'fa-solid fa-hand-sparkles fa-bounce',        // UX/UI (alias)
  usersecret: 'fa-solid fa-comment-dots fa-bounce',      // Consultoria
  key: 'fa-solid fa-comment-dots fa-bounce',
  bicycle: 'fa-solid fa-chart-line fa-bounce',           // Optimizacion
  paw: 'fa-solid fa-chart-line fa-bounce'
};

const ServiceItem = ({ icon, title, description }) => {
  const iconClass = iconClassMap[icon] || 'fa-solid fa-laptop-code fa-bounce';

  return (
    <div className="service-item">
      <div className="service-item__icon-container">
        <i className={`${iconClass} service-item__icon`} aria-hidden="true"></i>
      </div>
      <h3 className="service-item__title">{title}</h3>
      <p className="service-item__description">{description}</p>
    </div>
  );
};

export default ServiceItem;
