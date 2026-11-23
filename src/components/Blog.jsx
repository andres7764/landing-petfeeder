import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './blog.css'

const categories = [
  { id: 'bienestar', label: { es: 'Bienestar', en: 'Wellbeing' } },
  { id: 'nutricion', label: { es: 'Nutrición', en: 'Nutrition' } },
  { id: 'educacion', label: { es: 'Educación', en: 'Training' } },
  { id: 'tecnologia', label: { es: 'Tecnología', en: 'Technology' } },
]

const articles = [
  {
    slug: 'crear-una-rutina-tranquila',
    category: 'bienestar',
    date: '2026-10-28',
    minutes: 5,
    author: 'Equipo Pawflow',
    title: { es: 'Cómo crear una rutina tranquila para tu mascota', en: 'How to create a calm routine for your pet' },
    excerpt: { es: 'Los pequeños rituales diarios pueden darles seguridad. Aprende a crear horarios que funcionen para toda la familia.', en: 'Small daily rituals can help pets feel secure. Learn how to build a schedule that works for your whole family.' },
  },
  {
    slug: 'senales-de-un-perro-feliz',
    category: 'bienestar',
    date: '2026-10-14',
    minutes: 4,
    author: 'Dra. Laura Méndez',
    title: { es: 'Señales cotidianas de que tu perro se siente bien', en: 'Everyday signs your dog is feeling good' },
    excerpt: { es: 'Su lenguaje corporal dice mucho. Estas pistas sencillas te ayudarán a entender mejor su estado de ánimo.', en: 'Their body language says a lot. These simple clues can help you better understand how your dog is feeling.' },
  },
  {
    slug: 'enriquecimiento-en-casa',
    category: 'bienestar',
    date: '2026-09-30',
    minutes: 6,
    author: 'Equipo Pawflow',
    title: { es: 'Enriquecimiento en casa: ideas fáciles para cada día', en: 'At-home enrichment ideas for every day' },
    excerpt: { es: 'No hace falta mucho espacio para despertar su curiosidad. Prueba actividades sencillas que estimulan sus sentidos.', en: 'You do not need much space to spark their curiosity. Try simple activities that engage their senses.' },
  },
  {
    slug: 'descanso-para-gatos',
    category: 'bienestar',
    date: '2026-09-18',
    minutes: 4,
    author: 'Dra. Laura Méndez',
    title: { es: 'El descanso de tu gato: espacios donde se siente seguro', en: 'Help your cat find a safe, restful spot' },
    excerpt: { es: 'Descubre qué hace que un rincón sea realmente acogedor para tu gato y cómo respetar sus momentos de calma.', en: 'Find out what makes a corner truly comfortable for your cat and how to protect their quiet time.' },
  },
  {
    slug: 'paseos-con-menos-estres',
    category: 'bienestar',
    date: '2026-09-05',
    minutes: 5,
    author: 'Equipo Pawflow',
    title: { es: 'Paseos con menos estrés: una guía para empezar', en: 'Less stressful walks: a guide to getting started' },
    excerpt: { es: 'Un paseo agradable comienza antes de salir. Conoce algunos pasos para que explorar sea más relajado.', en: 'A pleasant walk starts before you head outside. Try these steps to make exploring feel more relaxed.' },
  },
  {
    slug: 'porciones-adecuadas',
    category: 'nutricion',
    date: '2026-10-25',
    minutes: 5,
    author: 'Dra. Laura Méndez',
    title: { es: 'Porciones adecuadas: una guía práctica para cada etapa', en: 'Portion sizes: a practical guide for every life stage' },
    excerpt: { es: 'La cantidad ideal depende de su edad, tamaño y actividad. Aprende qué tener en cuenta al servir cada comida.', en: 'The right amount depends on age, size, and activity. Learn what to consider when serving each meal.' },
  },
  {
    slug: 'hidratacion-para-gatos',
    category: 'nutricion',
    date: '2026-10-10',
    minutes: 4,
    author: 'Equipo Pawflow',
    title: { es: 'Hidratación felina: formas de animar a tu gato a beber', en: 'Cat hydration: ways to encourage your cat to drink' },
    excerpt: { es: 'Algunos gatos necesitan un poco de motivación extra para beber agua. Estas ideas pueden ayudar a mejorar su rutina.', en: 'Some cats need a little extra encouragement to drink water. These ideas can help improve their routine.' },
  },
  {
    slug: 'transicion-de-alimento',
    category: 'nutricion',
    date: '2026-09-26',
    minutes: 6,
    author: 'Dra. Laura Méndez',
    title: { es: 'Cómo cambiar su alimento de manera gradual', en: 'How to transition your pet to a new food' },
    excerpt: { es: 'Una transición paulatina ayuda a que tu mascota se adapte. Te contamos cómo organizar el cambio con calma.', en: 'A gradual transition can help your pet adjust. Here is how to plan the change at a comfortable pace.' },
  },
  {
    slug: 'premios-sin-excesos',
    category: 'nutricion',
    date: '2026-09-12',
    minutes: 3,
    author: 'Equipo Pawflow',
    title: { es: 'Premios y snacks: cómo incluirlos sin excesos', en: 'Treats and snacks: how to offer them mindfully' },
    excerpt: { es: 'Los premios pueden ser parte de una rutina equilibrada. Revisa estos consejos para ofrecerlos con intención.', en: 'Treats can be part of a balanced routine. Explore these tips for offering them thoughtfully.' },
  },
  {
    slug: 'horarios-de-comida',
    category: 'nutricion',
    date: '2026-08-29',
    minutes: 5,
    author: 'Dra. Laura Méndez',
    title: { es: '¿Cuántas veces al día debería comer mi mascota?', en: 'How often should my pet eat each day?' },
    excerpt: { es: 'La frecuencia de las comidas cambia según cada mascota. Estas preguntas te ayudarán a conversar con tu veterinario.', en: 'Meal frequency varies from pet to pet. These questions can help you have a useful conversation with your vet.' },
  },
  {
    slug: 'ensenar-a-usar-el-comedero',
    category: 'educacion',
    date: '2026-10-21',
    minutes: 5,
    author: 'Carlos Ruiz, educador canino',
    title: { es: 'Cómo enseñar a tu perro a esperar su comida', en: 'How to teach your dog to wait for mealtime' },
    excerpt: { es: 'Con paciencia y refuerzo positivo, la hora de comer puede ser más ordenada para todos en casa.', en: 'With patience and positive reinforcement, mealtimes can become calmer for everyone at home.' },
  },
  {
    slug: 'juegos-de-olfato',
    category: 'educacion',
    date: '2026-10-07',
    minutes: 4,
    author: 'Carlos Ruiz, educador canino',
    title: { es: 'Juegos de olfato para estimular a tu perro en casa', en: 'At-home scent games to engage your dog' },
    excerpt: { es: 'Usar su nariz es una actividad natural y entretenida. Empieza con estos juegos fáciles y seguros.', en: 'Using their nose is natural and rewarding. Start with these easy, safe scent games.' },
  },
  {
    slug: 'refuerzo-positivo-en-casa',
    category: 'educacion',
    date: '2026-09-23',
    minutes: 6,
    author: 'Carlos Ruiz, educador canino',
    title: { es: 'Refuerzo positivo: pequeños pasos, grandes aprendizajes', en: 'Positive reinforcement: small steps, lasting learning' },
    excerpt: { es: 'Celebrar los avances ayuda a construir hábitos. Aprende a reconocer el momento justo para reforzar.', en: 'Celebrating progress helps build habits. Learn how to spot the right moment to reinforce a behavior.' },
  },
  {
    slug: 'primeros-dias-gatito',
    category: 'educacion',
    date: '2026-09-09',
    minutes: 5,
    author: 'Equipo Pawflow',
    title: { es: 'Los primeros días de un gatito en casa', en: 'A kitten’s first days at home' },
    excerpt: { es: 'Un espacio tranquilo y tiempo para explorar hacen la diferencia. Prepara una bienvenida a su propio ritmo.', en: 'A quiet space and time to explore make a difference. Prepare a welcome at their own pace.' },
  },
  {
    slug: 'convivencia-perro-y-gato',
    category: 'educacion',
    date: '2026-08-25',
    minutes: 7,
    author: 'Carlos Ruiz, educador canino',
    title: { es: 'Perros y gatos en casa: primeros encuentros con calma', en: 'Dogs and cats at home: calm first introductions' },
    excerpt: { es: 'La convivencia se construye paso a paso. Aprende a preparar un primer encuentro respetuoso y supervisado.', en: 'Living together takes time. Learn how to prepare a respectful, supervised first introduction.' },
  },
  {
    slug: 'comedero-inteligente-rutina',
    category: 'tecnologia',
    date: '2026-10-18',
    minutes: 4,
    author: 'Equipo Pawflow',
    title: { es: 'Comederos inteligentes: tecnología al servicio de su rutina', en: 'Smart feeders: technology that supports their routine' },
    excerpt: { es: 'Conoce cómo la automatización puede ayudar a mantener horarios de comida más constantes.', en: 'See how automation can help keep mealtimes more consistent throughout the week.' },
  },
  {
    slug: 'elegir-fuente-de-agua',
    category: 'tecnologia',
    date: '2026-10-02',
    minutes: 5,
    author: 'Equipo Pawflow',
    title: { es: 'Qué tener en cuenta al elegir una fuente para mascotas', en: 'What to look for in a pet water fountain' },
    excerpt: { es: 'Tamaño, limpieza y ubicación importan. Esta guía te ayuda a comparar opciones para tu hogar.', en: 'Size, cleaning, and placement matter. Use this guide to compare options for your home.' },
  },
  {
    slug: 'camaras-para-mascotas',
    category: 'tecnologia',
    date: '2026-09-20',
    minutes: 4,
    author: 'Equipo Pawflow',
    title: { es: 'Cámaras para mascotas: tranquilidad con límites saludables', en: 'Pet cameras: peace of mind with healthy boundaries' },
    excerpt: { es: 'La tecnología puede acercarte a casa, pero también es importante cuidar la privacidad y el descanso.', en: 'Technology can bring you closer to home, while privacy and quiet time still deserve protection.' },
  },
  {
    slug: 'automatizar-comidas-sin-perder-flexibilidad',
    category: 'tecnologia',
    date: '2026-09-03',
    minutes: 6,
    author: 'Equipo Pawflow',
    title: { es: 'Automatizar comidas sin perder flexibilidad', en: 'Automated meals without losing flexibility' },
    excerpt: { es: 'Una rutina programada puede adaptarse a cambios. Descubre cómo combinar tecnología y atención diaria.', en: 'A programmed routine can adapt to change. Learn how to balance technology with everyday care.' },
  },
  {
    slug: 'limpieza-accesorios-inteligentes',
    category: 'tecnologia',
    date: '2026-08-20',
    minutes: 5,
    author: 'Equipo Pawflow',
    title: { es: 'Cómo limpiar y cuidar sus accesorios inteligentes', en: 'How to clean and care for smart pet accessories' },
    excerpt: { es: 'El mantenimiento sencillo ayuda a que sus accesorios duren más. Revisa qué limpiar y con qué frecuencia.', en: 'Simple maintenance helps accessories last longer. Find out what to clean and how often.' },
  },
]

const translations = {
  es: {
    pageTitle: 'Blog de cuidado para mascotas | Pawflow',
    pageDescription: 'Consejos prácticos sobre bienestar, nutrición, educación y tecnología para cuidar mejor de tu mascota.',
    eyebrow: 'EL BLOG DE PAWFLOW',
    headline: 'Ideas para una vida más feliz juntos.',
    intro: 'Consejos prácticos, historias y respuestas para acompañarte en cada etapa de su vida.',
    featuredLabel: 'LECTURA DESTACADA',
    readTime: 'de lectura',
    all: 'Todos',
    sectionIntro: 'Consejos e historias para acompañarte cada día.',
    viewMore: 'Ver más publicaciones',
    viewLess: 'Ver menos',
    noArticles: 'Pronto compartiremos nuevas publicaciones en esta categoría.',
    back: 'Volver al blog',
    articleLabel: 'ARTÍCULO',
    articleIntro: 'Una guía Pawflow para cuidar mejor de quienes hacen de cada día algo especial.',
    published: 'Publicado el',
  },
  en: {
    pageTitle: 'Pet care blog | Pawflow',
    pageDescription: 'Practical advice on pet wellbeing, nutrition, training, and technology to help you care for your companion.',
    eyebrow: 'THE PAWFLOW JOURNAL',
    headline: 'Ideas for a happier life together.',
    intro: 'Practical tips, stories, and answers to support you through every stage of their life.',
    featuredLabel: 'EDITOR’S PICK',
    readTime: 'min read',
    all: 'All',
    sectionIntro: 'Tips and stories to support you every day.',
    viewMore: 'View all articles',
    viewLess: 'Show less',
    noArticles: 'New articles in this category are coming soon.',
    back: 'Back to the blog',
    articleLabel: 'ARTICLE',
    articleIntro: 'A Pawflow guide to caring for the ones who make every day special.',
    published: 'Published',
  },
}

const categoryGuides = {
  bienestar: {
    es: 'El bienestar se construye con atención, descanso y momentos compartidos. Observa las señales de tu mascota y adapta estas ideas a su personalidad y edad.',
    en: 'Wellbeing grows through attention, rest, and shared moments. Notice your pet’s cues and adapt these ideas to their personality and age.',
  },
  nutricion: {
    es: 'Cada mascota tiene necesidades distintas. Introduce cambios de forma gradual y consulta con un profesional veterinario para recibir recomendaciones adecuadas a su caso.',
    en: 'Every pet has different needs. Make changes gradually and ask a veterinary professional for recommendations that fit your pet.',
  },
  educacion: {
    es: 'La constancia y el refuerzo positivo ayudan a crear experiencias de aprendizaje respetuosas. Avanza en pasos pequeños y permite que tu mascota marque el ritmo.',
    en: 'Consistency and positive reinforcement create respectful learning experiences. Take small steps and let your pet set the pace.',
  },
  tecnologia: {
    es: 'La tecnología es una herramienta para acompañar, no para reemplazar la observación y el cuidado diario. Elige opciones sencillas que se adapten a tu hogar.',
    en: 'Technology is there to support—not replace—everyday attention and care. Choose simple options that work for your home.',
  },
}

function getCategoryLabel(categoryId, language) {
  return categories.find((category) => category.id === categoryId)?.label[language] ?? categoryId
}

function updateMetaTag(selector, attribute, value) {
  let tag = document.head.querySelector(selector)
  let created = false

  if (!tag) {
    tag = document.createElement('meta')
    const [key, content] = attribute
    tag.setAttribute(key, content)
    document.head.append(tag)
    created = true
  }

  const previous = tag.getAttribute('content')
  tag.setAttribute('content', value)
  return () => {
    if (created) tag.remove()
    else if (previous !== null) tag.setAttribute('content', previous)
    else tag.removeAttribute('content')
  }
}

function PostArtwork({ category, title, featured = false }) {
  const palettes = {
    bienestar: ['#e7f0e9', '#639078', '#c2d6c6'],
    nutricion: ['#f5ece1', '#d28c55', '#e3c9a9'],
    educacion: ['#e9edf4', '#7184a7', '#c7d0e0'],
    tecnologia: ['#e5eff0', '#528a91', '#bad6d8'],
  }
  const [background, accent, soft] = palettes[category]

  return (
    <svg
      className={`blog-art${featured ? ' blog-art-featured' : ''}`}
      viewBox="0 0 640 360"
      role="img"
      aria-label={title}
      focusable="false"
    >
      <rect width="640" height="360" fill={background} />
      <circle cx="516" cy="63" r="118" fill="#fff" opacity=".34" />
      <circle cx="91" cy="320" r="112" fill={soft} opacity=".7" />
      <path d="M0 282c112-52 195-30 297-5s216 35 343-31v114H0V282Z" fill="#fff" opacity=".54" />
      {category === 'bienestar' && (
        <g>
          <path d="M286 254c-10-42 14-99 54-119 26-13 57-3 72 22 17 28 9 67-12 95l-19 25h-85l-10-23Z" fill={accent} />
          <path d="M326 183c-13-20-45-24-58-6-13 18 2 44 20 53 5-23 20-37 38-47Z" fill={soft} />
          <circle cx="385" cy="161" r="6" fill="#fff" />
          <path d="M366 196c13 8 25 8 37 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          <path d="M286 280h151" stroke={accent} strokeWidth="9" strokeLinecap="round" opacity=".55" />
          <path d="M179 192c13-15 33-15 46 0-13 16-33 16-46 0Zm10-17c8-9 20-9 28 0-8 9-20 9-28 0Zm28 0c8-9 20-9 28 0-8 9-20 9-28 0Z" fill={accent} opacity=".78" />
        </g>
      )}
      {category === 'nutricion' && (
        <g>
          <path d="M218 188h208l-21 75c-7 26-27 40-57 40h-52c-30 0-50-14-57-40l-21-75Z" fill="#fff" opacity=".85" />
          <ellipse cx="322" cy="188" rx="104" ry="32" fill={accent} />
          <ellipse cx="322" cy="183" rx="86" ry="22" fill="#f3d9b9" />
          <circle cx="287" cy="178" r="10" fill="#6c956f" />
          <circle cx="322" cy="187" r="11" fill="#cf785a" />
          <circle cx="356" cy="177" r="9" fill="#e1ae5e" />
          <path d="M323 133c-20-20-20-43 0-62 20 19 20 42 0 62Zm-28 1c-25-10-35-29-28-53 25 10 35 29 28 53Zm56 0c25-10 35-29 28-53-25 10-35 29-28 53Z" fill={accent} opacity=".8" />
          <path d="M249 285h145" stroke={accent} strokeWidth="8" strokeLinecap="round" opacity=".35" />
        </g>
      )}
      {category === 'educacion' && (
        <g>
          <path d="M287 268c-37-28-47-75-22-108 18-24 47-27 67-8 20-19 49-16 67 8 25 33 15 80-22 108l-45 33-45-33Z" fill={accent} />
          <path d="m306 187 26 24 49-53" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="209" cy="117" r="22" fill={soft} />
          <path d="M193 118c9-12 23-12 32 0m-25 12c5 5 13 5 18 0" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
          <path d="m430 112 8 17 18 3-13 13 3 18-16-9-16 9 3-18-13-13 18-3 8-17Z" fill={accent} opacity=".56" />
        </g>
      )}
      {category === 'tecnologia' && (
        <g>
          <rect x="244" y="106" width="151" height="166" rx="27" fill="#fff" opacity=".88" />
          <rect x="258" y="121" width="123" height="112" rx="18" fill={accent} />
          <circle cx="319" cy="177" r="33" fill="#fff" opacity=".91" />
          <circle cx="319" cy="177" r="21" fill={soft} />
          <circle cx="319" cy="177" r="9" fill={accent} />
          <path d="M287 252h64" stroke={soft} strokeWidth="8" strokeLinecap="round" />
          <path d="M435 151c18 0 33 15 33 33v24h-67v-24c0-18 15-33 34-33Z" fill={soft} />
          <circle cx="434" cy="133" r="20" fill={accent} opacity=".75" />
          <path d="M452 253c17-17 42-17 59 0" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" opacity=".6" />
        </g>
      )}
      <circle cx="498" cy="272" r="5" fill={accent} opacity=".6" />
      <circle cx="525" cy="251" r="3" fill={accent} opacity=".4" />
    </svg>
  )
}

function BlogSeo({ article, language, copy }) {
  useEffect(() => {
    const title = article
      ? `${article.title[language]} | Pawflow`
      : copy.pageTitle
    const description = article
      ? article.excerpt[language]
      : copy.pageDescription
    const previousTitle = document.title
    document.title = title

    const restoreDescription = updateMetaTag('meta[name="description"]', ['name', 'description'], description)
    const restoreOgTitle = updateMetaTag('meta[property="og:title"]', ['property', 'og:title'], title)
    const restoreOgDescription = updateMetaTag('meta[property="og:description"]', ['property', 'og:description'], description)

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.pawflowBlogSchema = 'true'
    structuredData.textContent = JSON.stringify(
      article
        ? {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title[language],
            description: article.excerpt[language],
            datePublished: article.date,
            author: { '@type': 'Person', name: article.author },
            inLanguage: language,
            mainEntityOfPage: window.location.href,
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Pawflow',
            description: copy.pageDescription,
            inLanguage: language,
            blogPost: [...articles]
              .sort((first, second) => second.date.localeCompare(first.date))
              .slice(0, 4)
              .map((post) => ({
                '@type': 'BlogPosting',
                headline: post.title[language],
                url: `${window.location.origin}/blog/${post.slug}`,
                datePublished: post.date,
                author: { '@type': 'Person', name: post.author },
              })),
          },
    )
    document.head.append(structuredData)

    return () => {
      document.title = previousTitle
      restoreDescription()
      restoreOgTitle()
      restoreOgDescription()
      structuredData.remove()
    }
  }, [article, copy, language])

  return null
}

function ArticleDetail({ article, language, copy }) {
  const categoryLabel = getCategoryLabel(article.category, language)
  const date = new Intl.DateTimeFormat(language === 'es' ? 'es' : 'en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${article.date}T00:00:00Z`))

  return (
    <main className="blog-article-page">
      <BlogSeo article={article} language={language} copy={copy} />
      <nav className="blog-breadcrumbs" aria-label={language === 'es' ? 'Migas de pan' : 'Breadcrumb'}>
        <Link to="/inicio">{language === 'es' ? 'Inicio' : 'Home'}</Link>
        <span aria-hidden="true">/</span>
        <Link to="/blog">Blog</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{categoryLabel}</span>
      </nav>
      <article className="blog-article">
        <header className="blog-article-header">
          <span className="blog-category-pill">{categoryLabel}</span>
          <h1>{article.title[language]}</h1>
          <p className="blog-article-excerpt">{article.excerpt[language]}</p>
          <div className="blog-article-meta">
            <span className="blog-author-avatar" aria-hidden="true">{article.author.charAt(0)}</span>
            <span>{article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{copy.published} {date}</time>
            <span aria-hidden="true">·</span>
            <span>{article.minutes} {copy.readTime}</span>
          </div>
        </header>
        <div className="blog-article-art">
          <PostArtwork category={article.category} title={article.title[language]} featured />
        </div>
        <div className="blog-article-body">
          <p className="blog-article-lead">{article.excerpt[language]}</p>
          <p>{categoryGuides[article.category][language]}</p>
          <p>{copy.articleIntro}</p>
          <Link className="blog-back-link" to="/blog">← {copy.back}</Link>
        </div>
      </article>
    </main>
  )
}

export const BlogComponent = ({ text }) => {
  const { slug } = useParams()
  const language = text?.nav?.[0] === 'Home' ? 'en' : 'es'
  const copy = translations[language]
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedCategories, setExpandedCategories] = useState({})
  const article = slug ? articles.find((post) => post.slug === slug) : null

  if (slug) {
    if (!article) {
      return (
        <main className="blog-not-found">
          <h1>{language === 'es' ? 'No encontramos esta publicación.' : 'We could not find this article.'}</h1>
          <Link className="blog-back-link" to="/blog">{copy.back}</Link>
        </main>
      )
    }
    return <ArticleDetail article={article} language={language} copy={copy} />
  }

  const visibleCategories = activeCategory === 'all'
    ? categories
    : categories.filter((category) => category.id === activeCategory)

  return (
    <main className="blog-home" id="blog-top">
      <BlogSeo language={language} copy={copy} />
      <section className="blog-hero">
        <div className="blog-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</span>
          <h1>{copy.headline}</h1>
          <p>{copy.intro}</p>
          <a className="blog-hero-link" href="#blog-categories">
            {language === 'es' ? 'Explorar publicaciones' : 'Explore articles'} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <Link className="blog-featured-card" to={`/blog/${articles[0].slug}`}>
          <div className="blog-featured-art">
            <PostArtwork category={articles[0].category} title={articles[0].title[language]} featured />
            <span className="blog-featured-label">{copy.featuredLabel}</span>
          </div>
          <div className="blog-featured-copy">
            <span className="blog-category-pill">{getCategoryLabel(articles[0].category, language)}</span>
            <h2>{articles[0].title[language]}</h2>
            <p>{articles[0].excerpt[language]}</p>
            <span className="blog-post-meta">
              <span className="blog-author-avatar" aria-hidden="true">{articles[0].author.charAt(0)}</span>
              <span>{articles[0].author}</span>
              <span aria-hidden="true">·</span>
              <span>{articles[0].minutes} {copy.readTime}</span>
              <span className="blog-read-arrow" aria-hidden="true">↗</span>
            </span>
          </div>
        </Link>
        <span className="blog-hero-decoration blog-hero-decoration-one" aria-hidden="true">✦</span>
        <span className="blog-hero-decoration blog-hero-decoration-two" aria-hidden="true">✧</span>
      </section>

      <section className="blog-listing" id="blog-categories" aria-labelledby="blog-listing-title">
        <div className="blog-listing-header">
          <div>
            <span className="eyebrow">{language === 'es' ? 'LEE, APRENDE, COMPARTE' : 'READ, LEARN, SHARE'}</span>
            <h2 id="blog-listing-title">{language === 'es' ? 'Historias para cuidar mejor.' : 'Stories to help you care.'}</h2>
            <p>{copy.sectionIntro}</p>
          </div>
          <div className="blog-filters" role="group" aria-label={language === 'es' ? 'Filtrar publicaciones por categoría' : 'Filter articles by category'}>
            <button
              type="button"
              className={`blog-filter${activeCategory === 'all' ? ' is-active' : ''}`}
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              {copy.all}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                className={`blog-filter${activeCategory === category.id ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                key={category.id}
              >
                {category.label[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-category-sections" aria-live="polite">
          {visibleCategories.map((category) => {
            const categoryArticles = articles.filter((post) => post.category === category.id)
            const expanded = Boolean(expandedCategories[category.id])
            const displayedArticles = expanded ? categoryArticles : categoryArticles.slice(0, 4)

            return (
              <section className="blog-category-section" key={category.id} aria-labelledby={`category-${category.id}`}>
                <div className="blog-category-heading">
                  <h3 id={`category-${category.id}`}>{category.label[language]}</h3>
                  <span>{categoryArticles.length} {language === 'es' ? 'publicaciones' : 'articles'}</span>
                </div>
                {categoryArticles.length > 0 ? (
                  <div className="blog-card-grid">
                    {displayedArticles.map((post, index) => (
                      <article className={`blog-card${index === 0 ? ' blog-card-feature' : ''}`} key={post.slug}>
                        <Link className="blog-card-art" to={`/blog/${post.slug}`} aria-label={post.title[language]}>
                          <PostArtwork category={post.category} title={post.title[language]} />
                          <span className="blog-category-pill">{category.label[language]}</span>
                        </Link>
                        <div className="blog-card-copy">
                          <div className="blog-card-topline">
                            <span>{post.author}</span>
                            <span>{post.minutes} {copy.readTime}</span>
                          </div>
                          <h4><Link to={`/blog/${post.slug}`}>{post.title[language]}</Link></h4>
                          <p>{post.excerpt[language]}</p>
                          <div className="blog-card-footer">
                            <time dateTime={post.date}>
                              {new Intl.DateTimeFormat(language === 'es' ? 'es' : 'en', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                timeZone: 'UTC',
                              }).format(new Date(`${post.date}T00:00:00Z`))}
                            </time>
                            <Link className="blog-card-read" to={`/blog/${post.slug}`}>
                              {language === 'es' ? 'Leer artículo' : 'Read article'} <span aria-hidden="true">↗</span>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="blog-empty-category">{copy.noArticles}</p>
                )}
                {categoryArticles.length > 4 && (
                  <button
                    className="blog-more-button"
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setExpandedCategories((current) => ({ ...current, [category.id]: !expanded }))}
                  >
                    {expanded ? copy.viewLess : copy.viewMore}
                    <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
                  </button>
                )}
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}
