import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppProvider, CartContext } from './context/context'
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import ProtectedRoute from './components/Protected-route'
import { HomeComponent } from './components/home'
import { BlogComponent } from './components/Blog'
import { ProductDetailsComponent, ProductsComponent } from './components/Products'
import { PetFeederComponent } from './components/PetFeeder'
import { CartComponent } from './components/Cart'
import { AboutComponent } from './components/About'
import { ContactComponent } from './components/Contact'
import { LoginComponent } from './components/Login'
import { SiteFooter } from './components/SiteFooter'

const copy = {
  es: {
    nav: ['Inicio', 'Productos', 'Blog', 'Ingresar'],
    eyebrow: 'CUIDADO INTELIGENTE PARA MASCOTAS',
    title: 'Su rutina, un poco más feliz.',
    description:
      'Alimentación fresca y puntual, incluso cuando tu día se complica. Conoce el comedero inteligente pensado para ellos y para ti.',
    shop: 'Descubrir productos',
    details: 'Conocer más',
    delivery: 'Envío gratis',
    warranty: 'Garantía de 2 años',
    secure: 'Pago seguro',
    sectionLabel: 'HECHO PARA SU BIENESTAR',
    sectionTitle: 'Buenos hábitos, todos los días.',
    features: [
      ['Horarios a tu medida', 'Programa sus comidas desde el móvil y mantén su rutina dondequiera que estés.'],
      ['Porciones precisas', 'Sirve la cantidad ideal para ayudarle a mantener una alimentación equilibrada.'],
      ['Tranquilidad para ti', 'Recibe avisos y revisa sus comidas con una experiencia sencilla e intuitiva.'],
    ],
    productsLabel: 'NUESTROS FAVORITOS',
    productsTitle: 'Pequeños detalles, grandes ronroneos.',
    productName: 'Comedero inteligente',
    productDescription: 'El compañero perfecto para sus comidas.',
    reviewTitle: 'Familias felices, mascotas felices.',
    reviews: [
      ['Laura M.', 'Ahora come a la misma hora todos los días. ¡Nos encanta!'],
      ['Diego R.', 'Muy fácil de configurar y nos da muchísima tranquilidad.'],
      ['Sofía G.', 'Práctico, bonito y perfecto para nuestra rutina.'],
    ],
    blogTitle: 'Ideas para cuidar mejor.',
    blogText: 'Consejos, rutinas y novedades para una vida más feliz junto a tu mascota.',
    blogLink: 'Leer el blog',
    footer: 'Hecho con cariño para quienes tienen patas.',
  },
  en: {
    nav: ['Home', 'Products', 'Blog', 'Sign in'],
    eyebrow: 'SMARTER PET CARE',
    title: 'Their routine, a little happier.',
    description:
      'Fresh meals served on time, even when your day gets busy. Meet the smart feeder made for them—and for you.',
    shop: 'Explore products',
    details: 'Learn more',
    delivery: 'Free shipping',
    warranty: '2-year warranty',
    secure: 'Secure checkout',
    sectionLabel: 'MADE FOR THEIR WELLBEING',
    sectionTitle: 'Good habits, every day.',
    features: [
      ['Schedules that fit', 'Set mealtimes from your phone and keep their routine wherever you are.'],
      ['Just-right portions', 'Serve the right amount to help keep every meal balanced.'],
      ['Peace of mind', 'Get helpful updates and check mealtimes with an easy, intuitive experience.'],
    ],
    productsLabel: 'OUR FAVORITES',
    productsTitle: 'Little details, lots of happy purrs.',
    productName: 'Smart pet feeder',
    productDescription: 'The perfect companion for mealtime.',
    reviewTitle: 'Happy families, happy pets.',
    reviews: [
      ['Laura M.', 'Now mealtime is right on schedule every day. We love it!'],
      ['Diego R.', 'So easy to set up and gives us real peace of mind.'],
      ['Sofia G.', 'Practical, beautiful, and perfect for our routine.'],
    ],
    blogTitle: 'Ideas for better pet care.',
    blogText: 'Tips, routines, and news for a happier life with your pet.',
    blogLink: 'Read the blog',
    footer: 'Made with love for the ones with paws.',
  },
}

function PawMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className="brand-mark">
      <path d="M20 20c-5.8 0-11.6 6.2-10.4 11.1.8 3.2 4.2 3.1 7.1 1.8 2.2-1 4.4-1 6.6 0 2.9 1.3 6.3 1.4 7.1-1.8C31.6 26.2 25.8 20 20 20Z" />
      <ellipse cx="9.5" cy="15.2" rx="3.3" ry="4.4" transform="rotate(-26 9.5 15.2)" />
      <ellipse cx="18" cy="10.1" rx="3.3" ry="4.4" transform="rotate(-8 18 10.1)" />
      <ellipse cx="27" cy="11.5" rx="3.3" ry="4.4" transform="rotate(13 27 11.5)" />
      <ellipse cx="33" cy="18.2" rx="3.3" ry="4.4" transform="rotate(28 33 18.2)" />
    </svg>
  )
}

function Header({ language, setLanguage, text }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useContext(CartContext)
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/inicio" onClick={closeMenu} aria-label="TPM, inicio">
        <PawMark />
        <span>Tecnología para Mascotas</span>
      </Link>
      <Link
        className="cart-link mobile-cart-link"
        to="/carrito"
        onClick={closeMenu}
        aria-label={`${language === 'en' ? 'Shopping cart' : 'Carrito de compras'}: ${cartCount} ${language === 'en' ? 'products' : 'productos'}`}
        data-cart-target
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" />
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
        </svg>
        <span className="cart-count" key={cartCount} aria-hidden="true">{cartCount}</span>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {language === 'en' ? `${cartCount} products in cart` : `${cartCount} productos en el carrito`}
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
        <Link to="/inicio" onClick={closeMenu}>{text.nav[0]}</Link>
        <Link to="/productos" onClick={closeMenu}>{text.nav[1]}</Link>
        <Link to="/blog" onClick={closeMenu}>{text.nav[2]}</Link>
        <Link
          className="cart-link"
          to="/carrito"
          onClick={closeMenu}
          aria-label={`${language === 'en' ? 'Shopping cart' : 'Carrito de compras'}: ${cartCount} ${language === 'en' ? 'products' : 'productos'}`}
          data-cart-target
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" />
            <circle cx="10" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
          </svg>
          <span>{language === 'en' ? 'Cart' : 'Carrito'}</span>
          <span className="cart-count" key={cartCount} aria-hidden="true">{cartCount}</span>
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {language === 'en' ? `${cartCount} products in cart` : `${cartCount} productos en el carrito`}
          </span>
        </Link>
        <Link className="login-link" to="/login" onClick={closeMenu}>{text.nav[3]}</Link>
        <label className="language-select">
          <span className="sr-only">Idioma / Language</span>
          <select
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value)
              closeMenu()
            }}
            aria-label="Idioma / Language"
          >
            <option value="es">ES · Español</option>
            <option value="en">EN · English</option>
          </select>
        </label>
      </nav>
    </header>
  )
}

function RouteViews({ text, language }) {
  const location = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [location.pathname])

  return (
    <div className="route-transition" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomeComponent text={text} />} />
        <Route path="/blog/:slug" element={<BlogComponent text={text} />} />
        <Route path="/blog" element={<BlogComponent text={text} />} />
        <Route path="/comederos-inteligentes/petfeeder" element={<PetFeederComponent language={language} />} />
        <Route path="/productos/petfeeder" element={<PetFeederComponent language={language} />} />
        <Route path="/productos/:slug" element={<ProductDetailsComponent text={text} />} />
        <Route path="/productos" element={<ProductsComponent text={text} />} />
        <Route path="/carrito" element={<CartComponent language={language} />} />
        <Route path="/nosotros" element={<AboutComponent language={language} />} />
        <Route path="/contacto" element={<ContactComponent language={language} />} />
        <Route path="/login" element={<LoginComponent language={language} />} />
        <Route element={<ProtectedRoute isAuthenticated={true} />}>
          <Route path="/perfil" element={<main className="profile-placeholder"><h1>Tu cuenta TPM</h1><p>Bienvenido a Pawflow.</p><Link className="button button-primary" to="/inicio">Volver al inicio</Link></main>} />
        </Route>
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState('es')
  const text = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <AppProvider>
      <BrowserRouter>
        <div className="site-shell">
          <Header language={language} setLanguage={setLanguage} text={text} />
          <RouteViews text={text} language={language} />
          <SiteFooter language={language} />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
