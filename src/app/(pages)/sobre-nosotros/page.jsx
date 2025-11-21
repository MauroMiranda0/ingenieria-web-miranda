// src/app/(pages)/sobre-nosotros/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { getHomepageData } from '@/lib/cms';
import './page.scss';

const articleItems = [
  { date: '12 de Dic 2007', label: 'Nam tortor libero dictum porta' },
  { date: '13 de Dic 2007', label: 'Quisque nibh lacus pellentesque sed' },
];

export default async function SobreNosotrosPage() {
  const homepageData = await getHomepageData();
  const { content } = homepageData;
  const { about } = content;
  const aboutImage = about?.image || '/images/feature-1.png';

  return (
    <main className="about-page">
      <div className="about-page__container">
        <div className="about-page__intro">
          <h1>
            Entonces, ¿necesitas <span className="about-page__highlight">algo diseñado</span>?
          </h1>
          <p>Nos alegra poder ayudarte.</p>
          <div className="about-page__links">
            <Link href="/#portfolio">Portafolio</Link>
            <Link href="/#services">Clientes</Link>
          </div>
        </div>

        <div className="about-page__grid">
          <div className="about-page__left">
            <h4>Suspendisse fermentum odio</h4>
            <h2>
              Vel illum <span className="about-page__accent">dolore eu feugiat</span> nulla facilisis at vero eros
            </h2>
            <p className="about-page__paragraph">
              <span className="about-page__inline-image">
                <Image src={aboutImage} alt="Equipo creativo" fill sizes="180px" />
              </span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut{' '}
              <Link href="/#services">laoreet dolore magna</Link> aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla <Link href="/#about">facilisis at vero</Link> eros et accumsan et iusto odio dignissim.
            </p>
            <p className="about-page__paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <ul className="about-page__articles">
              {articleItems.map((item, idx) => (
                <li key={item.label} className={idx === articleItems.length - 1 ? 'last' : ''}>
                  <span>{item.date}</span>
                  <Link href="/#portfolio">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-page__right">
            <h2>
              <span className="about-page__accent">Sobre</span> nuestro estudio
            </h2>
            <div className="about-page__right-image">
              <Image
                src={aboutImage}
                alt="Estudio Abstract"
                fill
                sizes="(min-width: 992px) 40vw, 100vw"
              />
            </div>
            <p>
              Maecenas erat. Suspendisse odio orci, convallis ac, volutpat non, volutpat et, lectus. In cursus rhoncus
              ante. Quisque nibh lacus, pellentesque sed, porttitor a, luctus blandit, mi. Nam tortor libero, dictum
              porta, vulputate nec, imperdiet sed, mauris.
            </p>
            <p>
              Varius et pretium quis purus. Nulla ut magna. Nunc nec dui eget erat vulputate sagittis. Suspendisse
              fermentum odio. Mauris magna sem, pellentesque sit amet.
            </p>
            <p className="about-page__info">
              Si te gusta esta propuesta, explora nuestro portafolio o contáctanos para iniciar tu proyecto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
