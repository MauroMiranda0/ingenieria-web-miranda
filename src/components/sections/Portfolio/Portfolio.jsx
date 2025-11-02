// src/components/sections/Portfolio/Portfolio.jsx
'use client'; // Necesario para gestionar el estado del filtro

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import './Portfolio.scss';

const Portfolio = ({ title, subtitle, filters, items }) => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredItems = useMemo(() => {
    if (activeFilter === '*') {
      return items;
    }
    return items.filter(item => item.categories.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__header">
          <h2 id="portfolio-title" className="portfolio__title">{title}</h2>
          <p className="portfolio__subtitle">{subtitle}</p>
        </div>

        <ul className="portfolio__filter">
          {filters.map(filter => (
            <li key={filter.key}>
              <button
                className={`portfolio__filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="portfolio__items">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio__item">
              <div className="portfolio__item-inner">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="portfolio__item-img"
                />
                <div className="portfolio__item-info">
                  <h3>{item.title}</h3>
                  <a 
                    href={item.fullImage} 
                    target="_blank" // Por ahora abre en nueva pestaña
                    rel="noopener noreferrer"
                    className="preview"
                    aria-label={`Ver imagen ampliada de ${item.title}`}
                  >
                    <Image src="/images/portfolio/expand.png" alt="Expandir" width={28} height={28} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;