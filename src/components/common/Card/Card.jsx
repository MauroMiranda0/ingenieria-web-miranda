// src/components/common/Card/Card.jsx
import React from 'react';
import './Card.scss';

const Card = ({ icon, title, description }) => {
  return (
    <article className="card">
      <div className="card__icon-container">
        {/* Por ahora, el ícono es un placeholder. Más adelante lo reemplazaremos con SVGs o una librería de íconos. */}
        <div className="card__icon-placeholder" aria-hidden="true"></div>
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  );
};

export default Card;