import { Link } from 'react-router-dom'
import './site-footer.css'

export function SiteFooter({ language }) {
  const isEnglish = language === 'en'

  return (
    <footer className="site-footer">
      <div className="footer-canopy" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="footer-content">
        <section className="footer-brand-column" aria-labelledby="footer-brand-title">
          <Link className="footer-brand" to="/inicio">
            <svg aria-hidden="true" viewBox="0 0 40 40" className="footer-brand-mark">
              <path d="M20 20c-5.8 0-11.6 6.2-10.4 11.1.8 3.2 4.2 3.1 7.1 1.8 2.2-1 4.4-1 6.6 0 2.9 1.3 6.3 1.4 7.1-1.8C31.6 26.2 25.8 20 20 20Z" />
              <ellipse cx="9.5" cy="15.2" rx="3.3" ry="4.4" transform="rotate(-26 9.5 15.2)" />
              <ellipse cx="18" cy="10.1" rx="3.3" ry="4.4" transform="rotate(-8 18 10.1)" />
              <ellipse cx="27" cy="11.5" rx="3.3" ry="4.4" transform="rotate(13 27 11.5)" />
              <ellipse cx="33" cy="18.2" rx="3.3" ry="4.4" transform="rotate(28 33 18.2)" />
            </svg>
            <span id="footer-brand-title">Tecnología para Mascotas</span>
          </Link>
          <p>
            {isEnglish
              ? 'We are your eyes, helping you care for your furry family at every moment.'
              : 'Somos tus ojos para cuidar tus peluditos en cada momento.'}
          </p>
          <div className="footer-socials" aria-label={isEnglish ? 'Social media' : 'Redes sociales'}>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M15.5 3c.4 2.3 1.7 3.7 4 3.9v3.2a8.6 8.6 0 0 1-4-1.2v6.2a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.3a2.7 2.7 0 1 0 1.5 2.4V3h3.1Z" /></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" /><circle cx="12" cy="12" r="4.1" /><circle className="footer-icon-fill" cx="17.8" cy="6.5" r="1" /></svg>
            </a>
          </div>
        </section>

        <nav className="footer-links-column" aria-labelledby="footer-links-title">
          <h2 id="footer-links-title">{isEnglish ? 'Useful links' : 'Enlaces de interés'}</h2>
          <Link to="/nosotros">{isEnglish ? 'About us' : 'Nosotros'}</Link>
          <Link to="/contacto">{isEnglish ? 'Contact' : 'Contacto'}</Link>
          <Link to="/blog">Blog</Link>
          <a href="https://gopets.com/" target="_blank" rel="noreferrer">GoPets</a>
          <Link to="/login">{isEnglish ? 'Sign in' : 'Entrar'}</Link>
        </nav>

        <nav className="footer-links-column footer-social-column" aria-labelledby="footer-social-title">
          <h2 id="footer-social-title">{isEnglish ? 'Follow us' : 'Redes sociales'}</h2>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok <span aria-hidden="true">↗</span></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="/sitemap.xml">{isEnglish ? 'Sitemap' : 'Mapa del sitio'} <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="footer-note">
          <p>{isEnglish ? 'Small moments. Better care.' : 'Pequeños momentos. Un mejor cuidado.'}</p>
          <span>{isEnglish ? 'Care that is always close.' : 'Un cuidado que siempre está cerca.'}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tecnología para Mascotas</span>
        <span>{isEnglish ? 'Made with care for every paw.' : 'Hecho con cariño para cada patita.'}</span>
      </div>
    </footer>
  )
}
