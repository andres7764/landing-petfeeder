import { Link } from 'react-router-dom'

export function ProductIllustration() {
  return (
    <div className="product-art" role="img" aria-label="Ilustración de un comedero inteligente para mascotas">
      <div className="art-glow" />
      <div className="feeder">
        <div className="feeder-lid"><span /></div>
        <div className="feeder-body">
          <div className="feeder-display"><span /><i /></div>
          <div className="feeder-bowl"><span /></div>
        </div>
        <div className="feeder-shadow" />
      </div>
      <span className="art-spark spark-one">✦</span>
      <span className="art-spark spark-two">✧</span>
    </div>
  )
}

export const HomeComponent = ({ text }) => {
  return (
    <main>
      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{text.eyebrow}</span>
          <h1>{text.title}</h1>
          <p>{text.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/productos">
              {text.shop}
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/beneficios">
              {text.details}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-proof">
            <span><b>✓</b>{text.delivery}</span>
            <span><b>✓</b>{text.warranty}</span>
          </div>
        </div>
        <ProductIllustration />
        <div className="hero-note"><span className="note-icon">✦</span><span>Un mejor día<br />empieza en su plato.</span></div>
      </section>

      <section className="benefits-section" id="beneficios">
        <div className="section-heading">
          <span className="eyebrow">{text.sectionLabel}</span>
          <h2>{text.sectionTitle}</h2>
        </div>
        <div className="feature-grid">
          {text.features.map(([title, description], index) => (
            <article className="feature-card" key={title}>
              <span className={`feature-icon feature-icon-${index + 1}`} aria-hidden="true">
                {['◷', '✳', '♡'][index]}
              </span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="productos">
        <div className="section-heading product-heading">
          <span className="eyebrow">{text.productsLabel}</span>
          <h2>{text.productsTitle}</h2>
        </div>
        <article className="product-card">
          <div className="product-card-art"><ProductIllustration /></div>
          <div className="product-card-copy">
            <span className="product-tag">PAWFLOW ONE</span>
            <h3>{text.productName}</h3>
            <p>{text.productDescription}</p>
            <div className="rating"><span aria-label="5 de 5 estrellas">★★★★★</span><b>4.9</b><small>(128)</small></div>
            <div className="price"><strong>$89</strong><del>$119</del><span>−25%</span></div>
            <Link className="button button-primary" to="/comederos-inteligentes/petfeeder">
              {text.shop}
              <span aria-hidden="true">↗</span>
            </Link>
            <div className="secure-note"><span aria-hidden="true">♧</span>{text.secure}</div>
          </div>
        </article>
      </section>

      <section className="reviews-section">
        <div className="section-heading">
          <span className="eyebrow">PAWFLOW COMMUNITY</span>
          <h2>{text.reviewTitle}</h2>
        </div>
        <div className="review-grid">
          {text.reviews.map(([name, review], index) => (
            <article className="review-card" key={name}>
              <div className="review-person">
                <span className={`avatar avatar-${index + 1}`} aria-hidden="true">{name.charAt(0)}</span>
                <div><strong>{name}</strong><span className="review-stars" aria-label="5 de 5 estrellas">★★★★★</span></div>
                <span className="verified">✓</span>
              </div>
              <p>“{review}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-banner" id="blog">
        <div className="blog-decoration" aria-hidden="true"><span>✿</span><span>✧</span></div>
        <div><span className="eyebrow">THE PAWFLOW JOURNAL</span><h2>{text.blogTitle}</h2><p>{text.blogText}</p></div>
        <Link className="button button-dark" to="/blog">
          {text.blogLink}
          <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="signup-strip" id="ingresar">
        <span className="signup-icon" aria-hidden="true">✦</span>
        <div><strong>{text.delivery}</strong><span>{text.warranty} · {text.secure}</span></div>
        <Link className="signup-link" to="/perfil">{text.nav[3]} <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  )
}
