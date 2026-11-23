import { useState } from 'react'
import './site-pages.css'

export function ContactComponent({ language }) {
  const isEnglish = language === 'en'
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus(
      isEnglish
        ? 'Your form is complete, but message delivery is not connected yet. Please contact us through our social channels.'
        : 'El formulario está completo, pero el envío de mensajes aún no está conectado. Puedes contactarnos por nuestras redes sociales.',
    )
  }

  return (
    <main className="site-page contact-page">
      <section className="site-page-hero contact-intro">
        <span className="eyebrow">{isEnglish ? 'WE ARE HERE TO HELP' : 'ESTAMOS PARA AYUDARTE'}</span>
        <h1>{isEnglish ? 'Let’s talk about your pet.' : 'Hablemos de tu peludito.'}</h1>
        <p>
          {isEnglish
            ? 'Questions, ideas, or just want to say hello? Leave us a message.'
            : '¿Tienes preguntas, ideas o simplemente quieres saludarnos? Déjanos un mensaje.'}
        </p>
      </section>
      <section className="contact-card">
        <div className="contact-card-note">
          <span className="contact-note-icon" aria-hidden="true">✦</span>
          <h2>{isEnglish ? 'Every great routine starts with a conversation.' : 'Toda buena rutina empieza con una conversación.'}</h2>
          <p>{isEnglish ? 'Tell us how we can help you and your furry family.' : 'Cuéntanos cómo podemos ayudarte a ti y a tu familia peluda.'}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">{isEnglish ? 'Your name' : 'Nombre'}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={isEnglish ? 'e.g. Alex Rivera' : 'Ej. Alex Rivera'}
            required
          />
          <label htmlFor="contact-email">{isEnglish ? 'Email address' : 'Correo electrónico'}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={isEnglish ? 'you@example.com' : 'tu@correo.com'}
            required
          />
          <label htmlFor="contact-message">{isEnglish ? 'Your message' : 'Mensaje'}</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder={isEnglish ? 'How can we help?' : '¿En qué podemos ayudarte?'}
            required
          />
          <button className="button button-primary" type="submit">
            {isEnglish ? 'Prepare message' : 'Preparar mensaje'} <span aria-hidden="true">→</span>
          </button>
          <p className="contact-form-status" role="status" aria-live="polite">{formStatus}</p>
          <p className="contact-form-disclaimer">
            {isEnglish
              ? 'This form does not send or store your information yet. Message delivery will be connected later.'
              : 'Este formulario todavía no envía ni guarda tus datos. La entrega de mensajes se conectará más adelante.'}
          </p>
        </form>
      </section>
    </main>
  )
}
