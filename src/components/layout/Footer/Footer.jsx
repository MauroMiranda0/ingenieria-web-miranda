// src/components/layout/Footer/Footer.jsx

import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Ingeniería Web Miranda. Todos los derechos reservados.
        </p>
        <div className="footer__socials">
          {/* Estos enlaces deberían venir del CMS */}
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;