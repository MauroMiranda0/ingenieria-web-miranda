// src/app/layout.jsx

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { getHomepageData } from '@/lib/cms'; // Importamos la función
import './globals.scss';

export const metadata = {
  title: 'Ingeniería Web Miranda',
  description: 'Sitio Web Institucional para soluciones innovadoras.',
};

// Convertimos el layout en un componente asíncrono
export default async function RootLayout({ children }) {
  // Obtenemos los datos que necesita el layout (en este caso, la navegación)
  const homepageData = await getHomepageData();
  const navLinks = homepageData.navigation;

  return (
    <html lang="es">
      <body>
        {/* Pasamos los enlaces como prop al Header */}
        <Header navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}