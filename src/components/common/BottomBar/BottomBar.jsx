'use client';

import React, { useMemo, useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaHouse,
  FaWallet,
  FaChartColumn,
  FaShieldHalved,
  FaBuilding,
  FaScrewdriverWrench,
  FaSuitcase,
  FaEnvelope,
  FaFacebookF,
} from 'react-icons/fa6';
import './BottomBar.scss';

const DEFAULT_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Agencia', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
];

const getInitialHref = (links) => {
  const firstLink = links.find((link) => Boolean(link?.href));
  return firstLink?.href ?? '#';
};

const SOCIAL_LINKS = [
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { icon: 'xtwitter', label: 'X (Twitter)', url: 'https://twitter.com/' },
  { icon: 'github', label: 'GitHub', url: 'https://github.com/' },
];

const iconMap = {
  linkedin: FaLinkedin,
  xtwitter: FaXTwitter,
  github: FaGithub,
  facebook: FaFacebookF,
};

const getNavIcon = (link, index) => {
  const label = (link?.label || '').toLowerCase();
  if (label.includes('inicio')) return FaHouse;
  if (label.includes('agencia')) return FaBuilding;
  if (label.includes('serv')) return FaScrewdriverWrench;
  if (label.includes('portafolio')) return FaSuitcase;
  if (label.includes('contact')) return FaEnvelope;

  // fallback based on position
  const fallback = [FaHouse, FaWallet, FaChartColumn, FaShieldHalved];
  return fallback[index % fallback.length];
};

export default function BottomBar({
  navLinks = [],
  socialLinks = SOCIAL_LINKS,
}) {
  const links = useMemo(() => {
    const filtered = (navLinks || []).filter((link) => link && link.href);
    return filtered.length ? filtered : DEFAULT_LINKS;
  }, [navLinks]);

  const [activeHref, setActiveHref] = useState(() => getInitialHref(links));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolvedActiveHref = useMemo(() => {
    const hasCurrent = links.some((link) => link.href === activeHref);
    return hasCurrent ? activeHref : getInitialHref(links);
  }, [activeHref, links]);

  const scrollToAnchor = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (event, link) => {
    const href = link?.href ?? '#';
    if (href.startsWith('#')) {
      event.preventDefault();
      scrollToAnchor(href);
    }

    setActiveHref(href);
    setIsMenuOpen(false);
  };

  return (
    <div className="bottom-bar-wrapper" role="navigation" aria-label="Navegacion principal">
      <div className="bottom-bar">
        <button
          type="button"
          className={`bottom-bar__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`bottom-bar__links ${isMenuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={`bottom-bar-item ${resolvedActiveHref === link.href ? 'active' : ''}`}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={(event) => handleNavClick(event, link)}
            >
              {(() => {
                const Icon = getNavIcon(link, links.indexOf(link));
                return (
                  <>
                    <Icon className="bottom-bar-item__icon" aria-hidden="true" />
                    <span className="bottom-bar-item__label">{link.label}</span>
                  </>
                );
              })()}
            </a>
          ))}
        </div>

        <div className="bottom-bar__social">
          {socialLinks
            .filter((link) => {
              const href = link?.url || link?.href;
              return link && href && link.label;
            })
            .map((link) => {
              const href = link.url || link.href;
              const Icon = iconMap[link.icon] || null;
              return (
                <a
                  key={`${link.icon}-${href}`}
                  href={href}
                  className="bottom-bar__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  {Icon ? <Icon /> : <span className="bottom-bar__social-text">{link.label[0]}</span>}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
