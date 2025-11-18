// src/components/layout/Header/Header.jsx
'use client';

import React from 'react';
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiBarChart2,
  FiMail,
  FiShield,
  FiCreditCard,
} from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook, FaGlobe } from 'react-icons/fa6';
import './Header.scss';

const iconLibrary = {
  home: FiHome,
  about: FiInfo,
  services: FiBarChart2,
  portfolio: FiBriefcase,
  contact: FiMail,
  stats: FiBarChart2,
  shield: FiShield,
  wallet: FiCreditCard,
};

const socialIconLibrary = {
  linkedin: FaLinkedin,
  github: FaGithub,
  xtwitter: FaXTwitter,
  twitter: FaXTwitter,
  facebook: FaFacebook,
};

const normalizeKey = (value = '') => value.toLowerCase().replace(/\s+/g, '');

const getIconComponent = (link) => {
  const iconKey = normalizeKey(link.icon || '');
  if (iconLibrary[iconKey]) return iconLibrary[iconKey];

  const labelKey = normalizeKey(link.label || '');
  return iconLibrary[labelKey] || FiHome;
};

const getSocialIcon = (item) => {
  if (React.isValidElement(item.icon)) {
    return item.icon;
  }

  const iconKey = normalizeKey(item.icon || item.label || '');
  const Icon = socialIconLibrary[iconKey] || FaGlobe;
  return <Icon />;
};

const Header = ({ navLinks, socialLinks }) => {
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
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            {(navLinks || []).map((link) => {
              const Icon = getIconComponent(link);

              return (
                <li key={link.href} className="header__nav-item">
                  <a
                    href={link.href}
                    className="header__nav-link"
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="header__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="header__nav-label">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          {Boolean(socialLinks?.length) && (
            <div className="header__social" aria-label="Redes sociales">
              {socialLinks.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className="header__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label || item.icon}
                >
                  {getSocialIcon(item)}
                </a>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
