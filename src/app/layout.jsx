// src/app/layout.jsx

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { getHomepageData } from '@/lib/cms'; // Importamos la función
import { FaFacebook } from 'react-icons/fa6';
import './globals.scss';

export const metadata = {
  title: 'Ingeniería Web Miranda',
  description: 'Sitio Web Institucional para soluciones innovadoras.',
};

export default async function RootLayout({ children }) {
  const homepageData = await getHomepageData();
  // Extraemos siteIdentity, navigation, y footer
  const { siteIdentity, navigation, footer } = homepageData;
  const socialLinks = [
    ...(footer?.contactInfo?.socials || []),
    { icon: <FaFacebook />, url: 'https://facebook.com/', label: 'Facebook' },
  ];

  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        {/* Pasamos el logo principal al Header */}
        <Header
          navLinks={navigation}
          socialLinks={socialLinks}
          logoSrc={siteIdentity.logoPrincipal}
        />
        {children}
        {/* Pasamos todos los datos del footer al componente Footer */}
        <Footer footerData={footer} />
      </body>
    </html>
  );
}
