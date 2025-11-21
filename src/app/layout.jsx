// src/app/layout.jsx

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header'
import { getHomepageData } from '@/lib/cms'; // Importamos la función
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
    ...(footer?.contactInfo?.socials || [])
  ];

  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
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
