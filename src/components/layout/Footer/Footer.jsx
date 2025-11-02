// src/components/layout/Footer/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importar Image
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import './Footer.scss';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  xtwitter: FaXTwitter,
};

const Footer = ({ footerData }) => {
  if (!footerData) return null;

  const {
    logoBlanco,
    slogan,
    linkColumns,
    contactInfo,
    copyrightText,
    privacyLink,
  } = footerData;

  const currentYear = new Date().getFullYear();
  const finalCopyrightText = copyrightText.replace('{year}', currentYear);

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Columna 1: Logo y Slogan */}
        <div className="footer__column footer__column--logo">
          <Link href="/" className="footer__logo">
            {logoBlanco && (
              <Image
                src={logoBlanco}
                alt="Ingeniería Web Miranda Logo"
                width={200}
                height={50}
              />
            )}
          </Link>
          <p className="footer__slogan">{slogan}</p>
        </div>

        {/* Columnas de Enlaces Dinámicas */}
        {linkColumns.map((column) => (
          <div key={column.title} className="footer__column">
            <h4 className="footer__column-title">{column.title}</h4>
            <ul className="footer__link-list">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Columna de Contacto */}
        <div className="footer__column">
          <h4 className="footer__column-title">{contactInfo.title}</h4>
          <a href={`mailto:${contactInfo.email}`} className="footer__link">{contactInfo.email}</a>
          <div className="footer__socials">
            {contactInfo.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a key={social.icon} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fila Inferior */}
      <div className="footer__bottom-row">
        <p className="footer__copyright">{finalCopyrightText}</p>
        <Link href={privacyLink.href} className="footer__link">{privacyLink.label}</Link>
      </div>
    </footer>
  );
};

export default Footer;