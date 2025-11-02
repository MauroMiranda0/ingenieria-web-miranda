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
  const { navigation, footer } = homepageData; // Extraemos 'footer'

  return (
    <html lang="es">
      <body>
        <Header navLinks={navigation} />
        {children}
        {/* Pasamos los datos del footer como prop */}
        <Footer footerData={footer} />
      </body>
    </html>
  );
}