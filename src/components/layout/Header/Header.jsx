// src/components/layout/Header/Header.jsx

import React from 'react';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  // Estos datos vendrán del CMS en el futuro.
  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          Ingeniería Miranda
        </Link>
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <Link href={link.href} className="header__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;