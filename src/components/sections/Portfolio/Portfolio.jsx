// src/components/sections/Portfolio/Portfolio.jsx
'use client'; // Necesario para gestionar el estado del filtro y el lightbox

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
// 1. Importar el componente Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import './Portfolio.scss';

const Portfolio = ({ title, subtitle, filters, items }) => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('*');
  
  // 2. Añadir estados para manejar el Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handleMq = (e) => setIsMobile(e.matches);
    handleMq(mq);
    mq.addEventListener('change', handleMq);
    return () => mq.removeEventListener('change', handleMq);
  }, []);

  // Lógica de filtrado (sin cambios)
  const filteredItems = useMemo(() => {
    if (activeFilter === '*') {
      return items;
    }
    return items.filter(item => item.categories.includes(activeFilter));
  }, [activeFilter, items]);

  useEffect(() => {
    setShowAllMobile(false);
  }, [activeFilter]);

  const itemsToRender = useMemo(() => {
    if (isMobile && !showAllMobile) {
      return filteredItems.slice(0, 5);
    }
    return filteredItems;
  }, [filteredItems, isMobile, showAllMobile]);

  const showToggle = isMobile && filteredItems.length > 5;

  // 3. Función para abrir el Lightbox en un índice específico
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // 4. Preparamos el array de 'slides' que el Lightbox necesita
  const slides = itemsToRender.map(item => ({ src: item.fullImage }));

  return (
    // 5. Envolvemos todo en un Fragment (<>) para poder añadir el Lightbox al final
    <>
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
            {itemsToRender.map((item, index) => {
              const projectUrl = item.url || '#';
              return (
                <div key={item.id} className="portfolio__item">
                  {/* 6. El evento onClick ahora abre el Lightbox */}
                  <div className="portfolio__item-inner" onClick={() => openLightbox(index)}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="portfolio__item-img"
                    />
                    <div className="portfolio__item-info">
                      <a
                        href={projectUrl}
                        className="portfolio__link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar proyecto ${item.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-link" aria-hidden="true"></i>
                      </a>
                      <button
                        type="button"
                        className="portfolio__btn"
                        aria-label={`Abrir ${item.title}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showToggle && (
            <div className="portfolio__more">
              <button
                type="button"
                className="portfolio__more-btn"
                onClick={() => setShowAllMobile((prev) => !prev)}
              >
                {showAllMobile ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. Renderizamos el componente Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </>
  );
};

export default Portfolio;
