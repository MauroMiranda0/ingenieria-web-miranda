// src/components/layout/Header/Header.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Importar el componente Image
import './Header.scss';

const Header = ({ navLinks, logoSrc }) => {

  const handleNavClick = (e, href) => {
    // Solo para enlaces internos (anclas)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Si es solo '#', ir al inicio de la página
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.substring(1); // Quita el '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo" onClick={(e) => handleNavClick(e, '#')}>
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="Ingeniería Web Miranda Logo"
              width={200} // Ancho intrínseco para el ratio
              height={50}  // Alto intrínseco para el ratio
            />
          )}
        </Link>
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            {(navLinks || []).map((link) => (
              <li key={link.href} className="header__nav-item">
                <a 
                  href={link.href}
                  className="header__nav-link"
                  // Si es externo, abrir en nueva pestaña
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : ''}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;