// src/app/(pages)/services/page.jsx

import Services from "@/components/sections/Services/Services";
import { getHomepageData } from "@/lib/cms";
import './page.scss';

// Metadata para SEO en esta página específica
export const metadata = {
  title: 'Nuestros Servicios | Ingeniería Web Miranda',
  description: 'Descubre las soluciones que ofrecemos, desde desarrollo web y automatización hasta consultoría digital y optimización de rendimiento.',
};

export default async function ServicesPage() {
  // Obtenemos los datos de servicios desde nuestro mock
  const { services } = (await getHomepageData()).content;

  return (
    <main className="services-page">
      <header className="services-page__header">
        <div className="services-page__header-container">
          <h1>Soluciones Digitales a tu Medida</h1>
          <p>Nos especializamos en transformar desafíos complejos en productos digitales eficientes, escalables y centrados en el usuario.</p>
        </div>
      </header>

      {/* Reutilizamos el componente de sección Services */}
      <Services 
        title={services.title}
        subtitle={services.subtitle}
        items={services.items}
      />
    </main>
  );
}