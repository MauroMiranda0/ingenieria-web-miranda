// src/components/sections/BusinessSection/BusinessSection.jsx
import React from 'react';
import './BusinessSection.scss';

const cardsRow1 = [
  { icon: 'fa-solid fa-book', title: 'Community Edition' },
  { icon: 'fa-solid fa-bug', title: 'Community Edition' },
  { icon: 'fa-solid fa-gears', title: 'Community Edition' },
  { icon: 'fa-solid fa-up-right-from-square', title: 'Community Edition' },
];

const cardsRow2 = [
  { icon: 'fa-solid fa-mug-saucer', title: 'Community Edition' },
  { icon: 'fa-solid fa-tree', title: 'Community Edition' },
  { icon: 'fa-regular fa-paper-plane', title: 'Community Edition' },
  { icon: 'fa-regular fa-folder-open', title: 'Community Edition' },
];

const description =
  'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.';

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
          <h1>Our Business Analytics Platform</h1>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
