// src/components/sections/BusinessSection/BusinessSection.jsx
import React from 'react';
import './BusinessSection.scss';

const cardsRow1 = [
  { icon: 'fa-solid fa-book', title: 'Edición Comunidad' },
  { icon: 'fa-solid fa-bug', title: 'Edición Comunidad' },
  { icon: 'fa-solid fa-gears', title: 'Edición Comunidad' },
  { icon: 'fa-solid fa-up-right-from-square', title: 'Edición Comunidad' },
];

const cardsRow2 = [
  { icon: 'fa-solid fa-mug-saucer', title: 'Edición Comunidad' },
  { icon: 'fa-solid fa-tree', title: 'Edición Comunidad' },
  { icon: 'fa-regular fa-paper-plane', title: 'Edición Comunidad' },
  { icon: 'fa-regular fa-folder-open', title: 'Edición Comunidad' },
];

const description =
  'Explora tus datos con un lienzo intuitivo, visualizaciones modernas y herramientas sencillas para crear reportes.';

function Card({ icon, title }) {
  return (
    <div className="business__col">
      <div className="business__card">
        <i className={`${icon}`} aria-hidden="true"></i>
        <div className="business__separator" />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function BusinessSection() {
  return (
    <section id="business" className="business sections">
      <div className="business__container">
        <div className="business__head text-center">
          <h1>Nuestra Plataforma de Analítica</h1>
          <p>
            Plataforma diseñada para explorar, visualizar y compartir insights de negocio con facilidad.
          </p>
        </div>

        <div className="business__row">
          <div className="business__grid text-center">
            {cardsRow1.map((card, index) => (
              <Card key={`row1-${index}`} icon={card.icon} title={card.title} />
            ))}
          </div>
        </div>

        <div className="business__row">
          <div className="business__grid text-center">
            {cardsRow2.map((card, index) => (
              <Card key={`row2-${index}`} icon={card.icon} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
