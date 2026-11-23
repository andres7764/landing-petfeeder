import { Link } from 'react-router-dom'
import './site-pages.css'

export function AboutComponent({ language }) {
  const isEnglish = language === 'en'

  return (
    <main className="site-page about-page">
      <section className="site-page-hero">
        <span className="eyebrow">{isEnglish ? 'ABOUT US' : 'NOSOTROS'}</span>
        <h1>{isEnglish ? 'Care that keeps you close.' : 'Cuidar también es estar cerca.'}</h1>
        <p>
          {isEnglish
            ? 'We create thoughtful technology that helps families care for their pets with more confidence, wherever the day takes them.'
            : 'Creamos tecnología pensada para que las familias cuiden a sus mascotas con más tranquilidad, sin importar cómo venga el día.'}
        </p>
      </section>
      <section className="about-story">
        <div className="about-story-mark" aria-hidden="true">♡</div>
        <div>
          <span className="eyebrow">{isEnglish ? 'OUR PURPOSE' : 'NUESTRO PROPÓSITO'}</span>
          <h2>{isEnglish ? 'We are your eyes for every little moment.' : 'Somos tus ojos en cada pequeño momento.'}</h2>
          <p>
            {isEnglish
              ? 'Pets are family. Pawflow brings practical tools and a little more peace of mind to everyday care—from their routines at home to the moments you spend together.'
              : 'Sabemos que son parte de la familia. En Pawflow acercamos herramientas prácticas y un poco más de tranquilidad a su cuidado diario: desde sus rutinas en casa hasta cada momento que comparten.'}
          </p>
          <Link className="button button-primary" to="/contacto">
            {isEnglish ? 'Talk to us' : 'Conversemos'} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
