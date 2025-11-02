// src/app/layout.jsx

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
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

  return (
    <html lang="es">
      <body>
        {/* Pasamos el logo principal al Header */}
        <Header navLinks={navigation} logoSrc={siteIdentity.logoPrincipal} />
        {children}
        {/* Pasamos todos los datos del footer al componente Footer */}
        <Footer footerData={footer} />
      </body>
    </html>
  );
}