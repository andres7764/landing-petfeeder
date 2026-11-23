import { Link } from 'react-router-dom'
import './site-pages.css'

export const LoginComponent = ({ language }) => {
  const isEnglish = language === 'en'

  return (
    <main className="site-page login-page">
      <section className="login-card">
        <span className="contact-note-icon" aria-hidden="true">♡</span>
        <span className="eyebrow">{isEnglish ? 'WELCOME BACK' : 'QUÉ BUENO VERTE'}</span>
        <h1>{isEnglish ? 'Your Pawflow account' : 'Tu espacio Pawflow'}</h1>
        <p>
          {isEnglish
            ? 'Account sign-in is not available yet. We are working on bringing it to you soon.'
            : 'El inicio de sesión aún no está disponible. Estamos trabajando para tenerlo listo pronto.'}
        </p>
        <Link className="button button-primary" to="/inicio">
          {isEnglish ? 'Back to home' : 'Volver al inicio'} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  )
}