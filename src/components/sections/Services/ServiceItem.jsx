// src/components/sections/Services/ServiceItem.jsx

import React from 'react';
// Cambio aquí: FaDiamond -> FaGem
import { FaBicycle, FaCubes, FaConnectdevelop, FaGem, FaUserSecret, FaKey, FaLaptop, FaPaw } from 'react-icons/fa';
import './ServiceItem.scss';

const iconMap = {
  bicycle: FaBicycle,
  cubes: FaCubes,
  connectdevelop: FaConnectdevelop,
  gem: FaGem, // <-- Cambio aquí: 'diamond' pasa a ser 'gem' y usa FaGem
  usersecret: FaUserSecret,
  key: FaKey,
  laptop: FaLaptop,
  paw: FaPaw
};

const ServiceItem = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon] || FaCubes;

  return (
    <div className="service-item">
      <div className="service-item__icon-container">
        <IconComponent className="service-item__icon" />
      </div>
      <h3 className="service-item__title">{title}</h3>
      <p className="service-item__description">{description}</p>
    </div>
  );
};

export default ServiceItem;