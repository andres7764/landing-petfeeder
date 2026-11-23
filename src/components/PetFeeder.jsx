import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PetFeederProductCard } from './Products'
import './petfeeder.css'

const pageCopy = {
  es: {
    eyebrow: 'SMART PET CARE SYSTEM',
    heroTitle: 'Tu mascota merece un cuidado más inteligente.',
    heroSubtitle: 'Su bienestar, bajo control. Su alimentación, más inteligente.',
    heroDescription: 'Controla su alimentación, monitorea su peso y recibe alertas sobre comportamientos e indicadores detectables, en un sistema pensado para perros y gatos.',
    primaryCta: 'Conoce PetFeeder',
    secondaryCta: 'Descubre cómo funciona',
    deviceLabel: 'CUIDADO CONECTADO',
    deviceStatus: 'Rutina de alimentación',
    deviceAccess: 'Identificación individual',
    featuresEyebrow: 'MÁS QUE UN COMEDERO',
    featuresTitle: 'Todo lo que necesitas para cuidar mejor de tu mascota.',
    featuresDescription: 'Una solución inteligente que integra alimentación, monitoreo y control en un solo dispositivo.',
    features: [
      ['Su peso también cuenta su historia.', 'Registra el peso corporal de tu mascota cuando utiliza la plataforma y consulta sus variaciones a lo largo del tiempo.', 'Seguimiento del peso corporal'],
      ['Cada comida, en el momento indicado.', 'Programa horarios y cantidades para ayudar a mantener una rutina de alimentación organizada y consistente.', 'Horarios y porciones'],
      ['Cada mascota tiene su propia alimentación.', 'Identifica individualmente a tus mascotas y gestiona el acceso al comedero según su identificación.', 'Acceso individualizado'],
      ['Hay cambios que merecen tu atención.', 'Recibe información sobre comportamientos e indicadores detectables que podrían requerir atención.', 'Alertas oportunas'],
      ['Que su comida nunca te tome por sorpresa.', 'Monitorea el nivel de alimento disponible y anticípate a la próxima recarga.', 'Control de reservas'],
    ],
    alertNote: 'Las alertas no son diagnósticos veterinarios ni reemplazan la evaluación de un profesional.',
    valueEyebrow: 'TRANQUILIDAD PARA TODA LA FAMILIA',
    valueTitle: 'Más tranquilidad para ti. Más bienestar para ellos.',
    valueDescription: 'Tu mascota es parte de tu familia. PetFeeder te ayuda a organizar su alimentación, conocer sus hábitos y mantenerte atento a información importante, estés donde estés.',
    valueQuote: 'Porque cuidarlos también significa estar pendientes de los pequeños detalles.',
    benefitsEyebrow: 'CUIDADO EN CADA DETALLE',
    benefitsTitle: 'Una rutina más clara para todos.',
    benefits: [
      ['Alimentación organizada', 'Programa horarios y cantidades para mantener una rutina consistente.'],
      ['Seguimiento de peso', 'Consulta el peso registrado de tu mascota y conoce su evolución.'],
      ['Alimentación individualizada', 'Identifica a tus mascotas y administra el acceso al comedero.'],
      ['Alertas oportunas', 'Conoce comportamientos e indicadores inusuales que el sistema detecte.'],
      ['Control de reservas', 'Anticípate cuando el alimento esté próximo a agotarse.'],
      ['Cuidado conectado', 'Reúne información importante de tus mascotas en una sola experiencia.'],
    ],
    howEyebrow: 'SENCILLO DESDE EL PRIMER DÍA',
    howTitle: 'Cuidar de tu mascota nunca había sido tan sencillo.',
    steps: [
      ['Configura PetFeeder', 'Instala el dispositivo y configura los perfiles de tus mascotas.'],
      ['Personaliza su alimentación', 'Establece horarios, porciones y parámetros para cada mascota.'],
      ['Déjalo trabajar', 'PetFeeder administra la dispensación y el acceso mientras registra información de uso.'],
      ['Mantente informado', 'Consulta los registros de peso y alimentación, y presta atención a las notificaciones.'],
    ],
    multiEyebrow: 'HECHO PARA COMPARTIR HOGAR',
    multiTitle: 'Un hogar, diferentes necesidades. Una solución inteligente.',
    multiDescription: 'Cada mascota tiene sus propios hábitos y preferencias. PetFeeder está pensado para hogares con perros y gatos, para gestionar su alimentación individual y el acceso al comedero mediante identificación.',
    multiNote: 'Una solución pensada para que cada mascota reciba la atención que necesita.',
    finalEyebrow: 'PETFEEDER · SMART PET CARE SYSTEM',
    finalTitle: 'Su bienestar merece algo más que un comedero.',
    finalDescription: 'Descubre una nueva forma de organizar su alimentación, monitorear su peso y mantenerte informado sobre sus hábitos.',
    finalCta: 'Quiero conocer PetFeeder',
    contactCta: 'Habla con nuestro equipo',
    footerLine: 'PetFeeder. Tecnología que cuida de quienes hacen parte de tu familia.',
    offerEyebrow: 'CONOCE EL SISTEMA',
    offerTitle: 'Empieza una rutina más inteligente.',
    offerDescription: 'Agrega PetFeeder al carrito o escríbenos para resolver tus dudas.',
    metaTitle: 'PetFeeder | Comedero Inteligente para Perros y Gatos',
    metaDescription: 'Controla la alimentación, monitorea el peso y recibe alertas inteligentes sobre tus mascotas con PetFeeder. Tecnología para cuidar perros y gatos.',
    metaKeywords: 'comedero inteligente para gatos, comedero automático para perros, alimentación inteligente para mascotas, comedero con control de acceso, comedero inteligente para varias mascotas, monitoreo de alimentación de mascotas',
    featureIcons: ['◉', '◷', '⌁', '✳', '▤'],
    benefitIcons: ['◷', '◉', '⌁', '✳', '▤', '♡'],
  },
  en: {
    eyebrow: 'SMART PET CARE SYSTEM',
    heroTitle: 'Your pet deserves smarter care.',
    heroSubtitle: 'Their wellbeing, in view. Their feeding, made smarter.',
    heroDescription: 'Manage feeding, track your pet’s weight, and receive alerts about detectable behaviors and indicators with a system designed for dogs and cats.',
    primaryCta: 'Meet PetFeeder',
    secondaryCta: 'See how it works',
    deviceLabel: 'CONNECTED CARE',
    deviceStatus: 'Feeding routine',
    deviceAccess: 'Individual identification',
    featuresEyebrow: 'MORE THAN A FEEDER',
    featuresTitle: 'Everything you need to care for your pet better.',
    featuresDescription: 'One smart solution bringing feeding, monitoring, and access management together.',
    features: [
      ['Their weight tells a story.', 'Record your pet’s body weight when they use the platform and review changes over time.', 'Body weight tracking'],
      ['Every meal, right on schedule.', 'Set feeding times and portions to help maintain an organized, consistent routine.', 'Schedules and portions'],
      ['Each pet gets their own meal.', 'Identify pets individually and manage feeder access based on their identification.', 'Individual access'],
      ['Some changes deserve your attention.', 'Get information about detectable behaviors and indicators that may need your attention.', 'Timely alerts'],
      ['Know when food is running low.', 'Monitor the available food level and plan ahead for the next refill.', 'Food reserve tracking'],
    ],
    alertNote: 'Alerts are not veterinary diagnoses and do not replace an assessment by a professional.',
    valueEyebrow: 'PEACE OF MIND FOR THE WHOLE FAMILY',
    valueTitle: 'More peace of mind for you. More wellbeing for them.',
    valueDescription: 'Your pet is part of your family. PetFeeder helps you organize feeding, understand their habits, and stay aware of important information, wherever you are.',
    valueQuote: 'Because caring for them also means noticing the little things.',
    benefitsEyebrow: 'CARE IN EVERY DETAIL',
    benefitsTitle: 'A clearer routine for everyone.',
    benefits: [
      ['Organized feeding', 'Set schedules and portions to support a consistent routine.'],
      ['Weight tracking', 'Review your pet’s recorded weight and follow their progress.'],
      ['Individualized feeding', 'Identify pets and manage feeder access individually.'],
      ['Timely alerts', 'Learn about unusual behaviors and indicators detected by the system.'],
      ['Food reserve tracking', 'Plan ahead when food is running low.'],
      ['Connected care', 'Bring important information about your pets into one experience.'],
    ],
    howEyebrow: 'SIMPLE FROM DAY ONE',
    howTitle: 'Caring for your pet has never felt so simple.',
    steps: [
      ['Set up PetFeeder', 'Install the device and configure your pets’ profiles.'],
      ['Personalize their feeding', 'Set schedules, portions, and feeding preferences for each pet.'],
      ['Let it work', 'PetFeeder manages dispensing and access while recording usage information.'],
      ['Stay informed', 'Review weight and feeding records, and keep an eye on notifications.'],
    ],
    multiEyebrow: 'MADE FOR MULTI-PET HOMES',
    multiTitle: 'One home, different needs. One smart solution.',
    multiDescription: 'Every pet has unique habits and preferences. PetFeeder is designed for homes with dogs and cats, helping manage individual feeding and feeder access through identification.',
    multiNote: 'A solution designed to give every pet the attention they need.',
    finalEyebrow: 'PETFEEDER · SMART PET CARE SYSTEM',
    finalTitle: 'Their wellbeing deserves more than a feeder.',
    finalDescription: 'Discover a new way to organize feeding, track weight, and stay informed about your pets’ habits.',
    finalCta: 'I want to know PetFeeder',
    contactCta: 'Talk to our team',
    footerLine: 'PetFeeder. Technology that cares for the ones who are part of your family.',
    offerEyebrow: 'MEET THE SYSTEM',
    offerTitle: 'Start a smarter routine.',
    offerDescription: 'Add PetFeeder to your cart or contact us with any questions.',
    metaTitle: 'PetFeeder | Smart Feeder for Dogs and Cats',
    metaDescription: 'Manage feeding, track weight, and receive smart alerts about your pets with PetFeeder. Technology to care for dogs and cats.',
    metaKeywords: 'smart cat feeder, automatic dog feeder, smart pet feeding, pet feeder access control, multi-pet smart feeder, pet feeding monitoring',
    featureIcons: ['◉', '◷', '⌁', '✳', '▤'],
    benefitIcons: ['◷', '◉', '⌁', '✳', '▤', '♡'],
  },
}

function PetFeederIllustration({ copy }) {
  return (
    <div className="petfeeder-visual" aria-label="Ilustración conceptual del sistema PetFeeder" role="img">
      <span className="petfeeder-visual-orbit" />
      <span className="petfeeder-visual-spark petfeeder-spark-one">✦</span>
      <span className="petfeeder-visual-spark petfeeder-spark-two">✧</span>
      <div className="petfeeder-info-card" aria-hidden="true">
        <span className="petfeeder-info-icon">✦</span>
        <span><small>PetFeeder</small><strong>{copy.deviceStatus}</strong></span>
        <i>✓</i>
      </div>
      <div className="petfeeder-device" aria-hidden="true">
        <div className="petfeeder-lid"><span /></div>
        <div className="petfeeder-hopper">
          <div className="petfeeder-hopper-window"><span /></div>
          <span className="petfeeder-device-mark">PF</span>
          <span className="petfeeder-device-light" />
        </div>
        <div className="petfeeder-bowl"><span /></div>
        <div className="petfeeder-device-shadow" />
      </div>
      <div className="petfeeder-visual-caption"><span>✦</span>{copy.deviceLabel}</div>
    </div>
  )
}

export function PetFeederComponent({ language = 'es' }) {
  const isEnglish = language === 'en'
  const copy = pageCopy[isEnglish ? 'en' : 'es']

  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    const keywordsTag = document.querySelector('meta[name="keywords"]')
    const previousDescription = descriptionTag?.content
    const previousKeywords = keywordsTag?.content
    const description = descriptionTag || document.head.appendChild(document.createElement('meta'))
    const keywords = keywordsTag || document.head.appendChild(document.createElement('meta'))

    description.name = 'description'
    description.content = copy.metaDescription
    keywords.name = 'keywords'
    keywords.content = copy.metaKeywords
    document.title = copy.metaTitle

    return () => {
      document.title = previousTitle
      if (previousDescription === undefined) description.remove()
      else description.content = previousDescription
      if (previousKeywords === undefined) keywords.remove()
      else keywords.content = previousKeywords
    }
  }, [copy])

  return (
    <main className="petfeeder-page">
      <section className="petfeeder-hero">
        <div className="petfeeder-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</span>
          <h1>{copy.heroTitle}</h1>
          <p className="petfeeder-hero-subtitle">{copy.heroSubtitle}</p>
          <p className="petfeeder-hero-description">{copy.heroDescription}</p>
          <div className="petfeeder-hero-actions">
            <a className="button button-primary" href="#funcionalidades">{copy.primaryCta}<span aria-hidden="true">↗</span></a>
            <a className="petfeeder-text-link" href="#como-funciona">{copy.secondaryCta}<span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <PetFeederIllustration copy={copy} />
      </section>

      <section className="petfeeder-feature-section" id="funcionalidades">
        <div className="petfeeder-section-heading">
          <span className="eyebrow">{copy.featuresEyebrow}</span>
          <h2>{copy.featuresTitle}</h2>
          <p>{copy.featuresDescription}</p>
        </div>
        <div className="petfeeder-feature-grid">
          {copy.features.map(([title, description, benefit], index) => (
            <article className="petfeeder-feature-card" key={title}>
              <span className={`petfeeder-feature-icon petfeeder-feature-icon-${index + 1}`} aria-hidden="true">{copy.featureIcons[index]}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="petfeeder-feature-benefit"><i aria-hidden="true">✓</i>{benefit}</span>
            </article>
          ))}
        </div>
        <p className="petfeeder-disclaimer"><span aria-hidden="true">ⓘ</span>{copy.alertNote}</p>
      </section>

      <section className="petfeeder-value-section">
        <div className="petfeeder-value-decoration" aria-hidden="true"><span>✦</span><span>✧</span></div>
        <div className="petfeeder-value-copy">
          <span className="eyebrow">{copy.valueEyebrow}</span>
          <h2>{copy.valueTitle}</h2>
          <p>{copy.valueDescription}</p>
          <strong>{copy.valueQuote}</strong>
        </div>
        <div className="petfeeder-value-card" aria-hidden="true">
          <span>♡</span>
          <p>{isEnglish ? 'Care that fits their routine' : 'Cuidado que acompaña su rutina'}</p>
          <div><i /><i /><i /><i /><i /><i /><i /></div>
          <small>{isEnglish ? 'Every day, a little more peace of mind.' : 'Cada día, un poco más de tranquilidad.'}</small>
        </div>
      </section>

      <section className="petfeeder-benefits-section">
        <div className="petfeeder-section-heading">
          <span className="eyebrow">{copy.benefitsEyebrow}</span>
          <h2>{copy.benefitsTitle}</h2>
        </div>
        <div className="petfeeder-benefit-grid">
          {copy.benefits.map(([title, description], index) => (
            <article className="petfeeder-benefit-card" key={title}>
              <span aria-hidden="true">{copy.benefitIcons[index]}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="petfeeder-how-section" id="como-funciona">
        <div className="petfeeder-section-heading">
          <span className="eyebrow">{copy.howEyebrow}</span>
          <h2>{copy.howTitle}</h2>
        </div>
        <ol className="petfeeder-steps">
          {copy.steps.map(([title, description], index) => (
            <li className="petfeeder-step" key={title}>
              <span className="petfeeder-step-number">0{index + 1}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="petfeeder-multi-section">
        <div className="petfeeder-multi-art" aria-hidden="true">
          <span className="petfeeder-pet-shape petfeeder-dog-shape">●</span>
          <span className="petfeeder-pet-shape petfeeder-cat-shape">●</span>
          <span className="petfeeder-paw-mark">✦</span>
        </div>
        <div className="petfeeder-multi-copy">
          <span className="eyebrow">{copy.multiEyebrow}</span>
          <h2>{copy.multiTitle}</h2>
          <p>{copy.multiDescription}</p>
          <strong>{copy.multiNote}</strong>
        </div>
      </section>

      <section className="petfeeder-offer-section" id="comprar">
        <div className="petfeeder-section-heading">
          <span className="eyebrow">{copy.offerEyebrow}</span>
          <h2>{copy.offerTitle}</h2>
          <p>{copy.offerDescription}</p>
        </div>
        <PetFeederProductCard language={language} />
      </section>

      <section className="petfeeder-final-cta">
        <span className="eyebrow">{copy.finalEyebrow}</span>
        <h2>{copy.finalTitle}</h2>
        <p>{copy.finalDescription}</p>
        <div className="petfeeder-final-actions">
          <Link className="button button-primary" to="/contacto">{copy.finalCta}<span aria-hidden="true">↗</span></Link>
          <Link className="petfeeder-text-link" to="/contacto">{copy.contactCta}<span aria-hidden="true">→</span></Link>
        </div>
        <small>{copy.footerLine}</small>
      </section>
    </main>
  )
}
