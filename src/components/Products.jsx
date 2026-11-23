import { useContext, useState } from 'react'
import { CartContext } from '../context/context'
import { Link, useParams } from 'react-router-dom'
import './products.css'

const catalogCopy = {
  es: {
    eyebrow: 'LA TIENDA PAWFLOW',
    headline: <>Todo para una vida<br />más feliz juntos.</>,
    description: 'Tecnología y accesorios pensados para cuidar mejor de quienes más quieres.',
    shop: 'Ver productos',
    trust: ['Envío gratis desde $50', '30 días para devoluciones', 'Ayuda cuando la necesitas'],
    featured: 'Favoritos de Pawflow',
    featuredDescription: 'Pequeñas mejoras para sus grandes momentos.',
    new: 'Nuevo',
    sale: 'Oferta',
    add: 'Añadir',
    added: 'Añadido',
    bestseller: 'Favorito',
    detailTitle: 'Un pequeño cambio para una rutina más feliz.',
    back: 'Volver a productos',
    category: 'Categoría',
    quantity: 'Cantidad',
    decrease: 'Disminuir cantidad',
    increase: 'Aumentar cantidad',
    reviews: 'reseñas',
    highlights: 'Detalles del producto',
    reviewsTitle: 'OPINIONES',
    salePrice: 'Precio especial',
    promoTitle: 'Rutinas más fáciles. Colitas más felices.',
    promoDescription: 'Encuentra todo lo que necesitas para su bienestar, en un solo lugar.',
    promoButton: 'Explorar la tienda',
    categories: 'Encuentra su favorito',
    categoryTitles: ['Alimentación', 'Hidratación', 'Descanso y juego'],
    categoryLinks: ['Ver comederos', 'Ver bebederos', 'Ver accesorios'],
  },
  en: {
    eyebrow: 'THE PAWFLOW SHOP',
    headline: <>Everything for a<br />happier life together.</>,
    description: 'Thoughtful tech and accessories to care for the ones you love.',
    shop: 'Shop products',
    trust: ['Free shipping over $50', '30-day returns', 'Here when you need us'],
    featured: 'Pawflow favorites',
    featuredDescription: 'Little upgrades for their happiest moments.',
    new: 'New',
    sale: 'Sale',
    add: 'Add',
    added: 'Added',
    bestseller: 'Bestseller',
    detailTitle: 'A little upgrade for a happier routine.',
    back: 'Back to products',
    category: 'Category',
    quantity: 'Quantity',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    reviews: 'reviews',
    highlights: 'Product details',
    reviewsTitle: 'CUSTOMER REVIEWS',
    salePrice: 'Sale price',
    promoTitle: 'Easier routines. Happier tails.',
    promoDescription: 'Find everything you need for their wellbeing, all in one place.',
    promoButton: 'Explore the shop',
    categories: 'Find their favorite',
    categoryTitles: ['Mealtime', 'Hydration', 'Rest and play'],
    categoryLinks: ['Shop feeders', 'Shop fountains', 'Shop accessories'],
  },
}

const products = [
  {
    "id": "feeder-plus",
    "art": "feeder-plus",
    "badge": "new",
    "tone": "sage",
    "images": [
      "/images/products/feeder-plus-1.jpg",
      "/images/products/feeder-plus-2.jpg",
      "/images/products/feeder-plus-3.jpg"
    ],
    "name": {
      "es": "Comedero inteligente plus",
      "en": "Smart pet feeder plus"
    },
    "url": "/comederos-inteligentes/petfeeder",
    "keywords": {
      "es": ["comedero inteligente", "dispensador comida mascota", "comedero automatico app", "alimentador perros gatos"],
      "en": ["smart pet feeder", "automatic pet feeder", "app controlled feeder", "dog cat food dispenser"]
    },
    "category": {
      "es": "Alimentación inteligente",
      "en": "Smart feeding"
    },
    "shortDescription": {
      "es": "<p>Porciones exactas, control por app y <strong>cámara HD integrada</strong> para cuidar su dieta desde cualquier lugar.</p>",
      "en": "<p>Exact portions, app control, and a <strong>built-in HD camera</strong> to manage their diet from anywhere.</p>"
    },
    "longDescription": {
      "es": "<div><p>El <strong>Comedero inteligente plus</strong> automatiza las comidas diarias de tu perro o gato con precisión de porciones y programación flexible desde tu smartphone.</p><ul><li>Depósito hermético de 4L que conserva la frescura del concentrado.</li><li>Notificaciones de nivel de alimento y respaldo con baterías ante cortes de luz.</li><li>Bandeja de acero inoxidable desmontable y fácil de lavar.</li></ul></div>",
      "en": "<div><p>The <strong>Smart pet feeder plus</strong> automates your dog's or cat's daily meals with portion precision and flexible scheduling from your smartphone.</p><ul><li>4L airtight hopper that keeps dry kibble fresh.</li><li>Low-food alerts and battery backup in case of power outages.</li><li>Removable stainless steel bowl for easy cleaning.</li></ul></div>"
    },
    "price": "$129",
    "discountPrice": "$104",
    "rating": 4.9,
    "reviews": [
      {
        "name": "Valeria Gómez",
        "message": "Programar las porciones me ayudó a controlar el peso de mi gato y la app responde al instante.",
        "date": "2026-10-14",
        "rating": 5
      },
      {
        "name": "Andrés Restrepo",
        "message": "Muy sólido y fácil de limpiar. Ideal cuando salgo tarde de trabajar.",
        "date": "2026-11-02",
        "rating": 4.8
      }
    ]
  },
  {
    "id": "gps-collar",
    "art": "gps-collar",
    "badge": "bestseller",
    "tone": "blue",
    "images": [
      "/images/products/gps-collar-1.jpg",
      "/images/products/gps-collar-2.jpg"
    ],
    "name": {
      "es": "Collar personalizado con rastreo mascota",
      "en": "Custom GPS pet tracking collar"
    },
    "url": "/productos/collar-personalizado-rastreo-mascota",
    "keywords": {
      "es": ["collar rastreo mascota", "collar gps perro", "collar personalizado nombre", "localizador mascotas"],
      "en": ["pet tracking collar", "gps dog collar", "custom engraved collar", "pet tracker"]
    },
    "category": {
      "es": "Seguridad y rastreo",
      "en": "Safety and tracking"
    },
    "shortDescription": {
      "es": "<p>Ubicación en tiempo real, <strong>placa grabada personalizada</strong> y resistencia al agua para paseos sin preocupaciones.</p>",
      "en": "<p>Real-time location, <strong>custom engraved tag</strong>, and water resistance for worry-free walks.</p>"
    },
    "longDescription": {
      "es": "<div><p>Diseñado para brindarte tranquilidad en cada salida, este collar combina rastreo de ubicación con una placa metálica grabada con el nombre de tu mascota y tu teléfono de contacto.</p><ul><li>Zonas seguras configurables con alertas inmediatas al móvil.</li><li>Material ligero, suave y resistente a salpicaduras y lluvia.</li><li>Batería recargable de larga duración con indicador LED nocturno.</li></ul></div>",
      "en": "<div><p>Designed to give you peace of mind on every outing, this collar pairs location tracking with an engraved metal tag featuring your pet's name and your phone number.</p><ul><li>Customizable safe zones with instant mobile alerts.</li><li>Lightweight, soft material resistant to splashes and rain.</li><li>Long-lasting rechargeable battery with a night LED indicator.</li></ul></div>"
    },
    "price": "$79",
    "discountPrice": "$64",
    "rating": 4.7,
    "reviews": [
      {
        "name": "Mateo Suárez",
        "message": "El grabado quedó impecable y el rastreo me da mucha calma en parques grandes.",
        "date": "2026-09-28",
        "rating": 4.7
      }
    ]
  },
  {
    "id": "cat-climbing-rope",
    "art": "cat-climbing-rope",
    "badge": "new",
    "tone": "peach",
    "images": [
      "/images/products/cat-climbing-rope-1.jpg",
      "/images/products/cat-climbing-rope-2.jpg"
    ],
    "name": {
      "es": "Cuerda para trepar gato",
      "en": "Cat climbing rope"
    },
    "url": "/productos/cuerda-para-trepar-gato",
    "keywords": {
      "es": ["cuerda trepar gato", "juguete escalada gatos", "cuerda sisal gato", "enriquecimiento ambiental felino"],
      "en": ["cat climbing rope", "cat climbing toy", "sisal rope for cats", "feline enrichment"]
    },
    "category": {
      "es": "Juego y enriquecimiento",
      "en": "Play and enrichment"
    },
    "shortDescription": {
      "es": "<p>Cuerda trenzada de alta resistencia para <strong>trepar, afilar uñas y liberar energía</strong> en casa.</p>",
      "en": "<p>High-durability braided rope for <strong>climbing, scratching, and burning energy</strong> indoors.</p>"
    },
    "longDescription": {
      "es": "<div><p>Estimula el instinto natural de escalada y ejercicio de tu gato con una cuerda gruesa y antideslizante pensada para espacios interiores.</p><ul><li>Fibras naturales resistentes al desgaste y a las uñas.</li><li>Anclaje seguro para puertas, vigas o estructuras modulares.</li><li>Ayuda a reducir el sedentarismo y el estrés felino.</li></ul></div>",
      "en": "<div><p>Stimulate your cat's natural climbing and exercise instincts with a thick, slip-resistant rope built for indoor spaces.</p><ul><li>Natural fibers built to withstand claws and daily wear.</li><li>Secure mounting for doors, beams, or modular setups.</li><li>Helps reduce boredom and indoor stress.</li></ul></div>"
    },
    "price": "$34",
    "discountPrice": "$29",
    "rating": 4.6,
    "reviews": [
      {
        "name": "Camila Ríos",
        "message": "A mi gata le encantó desde el primer día; ahora trepa y juega mucho más.",
        "date": "2026-10-19",
        "rating": 4.6
      }
    ]
  },
  {
    "id": "wooden-cat-steps",
    "art": "wooden-cat-steps",
    "badge": "",
    "tone": "sage",
    "images": [
      "/images/products/wooden-cat-steps-1.jpg",
      "/images/products/wooden-cat-steps-2.jpg"
    ],
    "name": {
      "es": "Escalones de madera para gatos",
      "en": "Wooden cat wall steps"
    },
    "url": "/productos/escalones-de-madera-para-gatos",
    "keywords": {
      "es": ["escalones madera gatos", "repisas pared gatos", "mueble gato pared", "circuitos felinos"],
      "en": ["wooden cat steps", "cat wall shelves", "wall mounted cat furniture", "cat climbing steps"]
    },
    "category": {
      "es": "Hábitat y muros",
      "en": "Habitat and wall furniture"
    },
    "shortDescription": {
      "es": "<p>Escalones de madera natural con <strong>superficie antideslizante</strong> para crear rutas verticales en la pared.</p>",
      "en": "<p>Natural wood steps with <strong>non-slip surfaces</strong> to build vertical pathways on your wall.</p>"
    },
    "longDescription": {
      "es": "<div><p>Aprovecha el espacio vertical de tu hogar con escalones de madera cálida y estable que permiten a tu gato observar, descansar y desplazarse con seguridad.</p><ul><li>Acabado en madera natural con tapetes adherentes para mayor tracción.</li><li>Soportes reforzados incluidos para una fijación firme en pared.</li><li>Diseño minimalista que armoniza con la decoración del hogar.</li></ul></div>",
      "en": "<div><p>Make the most of vertical space at home with warm, sturdy wooden steps that let your cat perch, rest, and move safely.</p><ul><li>Natural wood finish with grip pads for confident footing.</li><li>Reinforced wall brackets included for a solid mount.</li><li>Minimalist look that blends naturally with home decor.</li></ul></div>"
    },
    "price": "$58",
    "discountPrice": "$49",
    "rating": 4.8,
    "reviews": [
      {
        "name": "Sebastián Mora",
        "message": "Se ven muy estéticos en la sala y aguantan perfecto el salto de mi gato adulto.",
        "date": "2026-11-08",
        "rating": 4.8
      }
    ]
  },
  {
    "id": "pet-massage-comb",
    "art": "pet-massage-comb",
    "badge": "sale",
    "tone": "lavender",
    "images": [
      "/images/products/pet-massage-comb-1.jpg",
      "/images/products/pet-massage-comb-2.jpg"
    ],
    "name": {
      "es": "Peine de masaje para mascotas",
      "en": "Pet massage comb"
    },
    "url": "/productos/peine-de-masaje-para-mascotas",
    "keywords": {
      "es": ["peine masaje mascotas", "cepillo masajeador perro gato", "cuidado pelaje mascota", "deslanador suave"],
      "en": ["pet massage comb", "pet massaging brush", "dog cat grooming comb", "gentle fur brush"]
    },
    "category": {
      "es": "Cuidado y bienestar",
      "en": "Grooming and wellness"
    },
    "shortDescription": {
      "es": "<p>Puntas suaves que <strong>masajean y retiran pelo suelto</strong> sin lastimar la piel de perros y gatos.</p>",
      "en": "<p>Gentle tips that <strong>massage and lift loose fur</strong> without irritating dog or cat skin.</p>"
    },
    "longDescription": {
      "es": "<div><p>Convierte el cepillado diario en un momento de relajación. Su diseño ergonómico estimula la circulación mientras recoge el pelo suelto de forma cómoda.</p><ul><li>Puntas redondeadas flexibles ideales para pieles sensibles.</li><li>Mango ergonómico antideslizante para un control cómodo.</li><li>Fácil de limpiar tras cada sesión de cepillado.</li></ul></div>",
      "en": "<div><p>Turn daily grooming into a relaxing routine. Its ergonomic design stimulates circulation while lifting loose hair comfortably.</p><ul><li>Flexible rounded tips gentle on sensitive skin.</li><li>Ergonomic non-slip grip for easy handling.</li><li>Quick to clean after every grooming session.</li></ul></div>"
    },
    "price": "$22",
    "discountPrice": "$16",
    "rating": 4.7,
    "reviews": [
      {
        "name": "Laura Castellanos",
        "message": "A mi perro antes no le gustaba cepillarse y con este se queda tranquilo.",
        "date": "2026-10-25",
        "rating": 4.7
      }
    ]
  },
  {
    "id": "curved-wall-scratchers",
    "art": "curved-wall-scratchers",
    "badge": "new",
    "tone": "blue",
    "images": [
      "/images/products/curved-wall-scratchers-1.jpg",
      "/images/products/curved-wall-scratchers-2.jpg"
    ],
    "name": {
      "es": "Rascadores de pared curvos",
      "en": "Curved wall scratchers"
    },
    "url": "/productos/rascadores-de-pared-curvos",
    "keywords": {
      "es": ["rascadores pared curvos", "rascador gato pared", "rascador curvo felino", "proteger muebles gato"],
      "en": ["curved wall scratchers", "wall cat scratcher", "curved scratching post", "cat furniture protector"]
    },
    "category": {
      "es": "Rascadores y cuidado de uñas",
      "en": "Scratchers and claw care"
    },
    "shortDescription": {
      "es": "<p>Curvatura ergonómica para <strong>estiramientos y rascado cómodo</strong>, protegiendo tus muebles y esquinas.</p>",
      "en": "<p>Ergonomic curve for <strong>comfortable stretching and scratching</strong> while protecting your furniture.</p>"
    },
    "longDescription": {
      "es": "<div><p>Los <strong>Rascadores de pared curvos</strong> ofrecen una superficie amplia y anatómica que acompaña el estiramiento natural del gato al afilar sus uñas.</p><ul><li>Forma curva que facilita el agarre y el estiramiento completo.</li><li>Instalación práctica en pared sin ocupar espacio en el piso.</li><li>Superficie texturizada de alta duración para uso diario.</li></ul></div>",
      "en": "<div><p><strong>Curved wall scratchers</strong> provide a wide, contoured surface that supports your cat's natural stretch while scratching.</p><ul><li>Curved profile for comfortable grip and full-body stretches.</li><li>Wall-mounted design that keeps floor space clear.</li><li>Durable textured surface built for everyday scratching.</li></ul></div>"
    },
    "price": "$42",
    "discountPrice": "$35",
    "rating": 4.8,
    "reviews": [
      {
        "name": "Daniela Ospina",
        "message": "Salvó el sofá de la sala; se ve moderno y mis dos gatos lo usan todos los días.",
        "date": "2026-11-12",
        "rating": 4.8
      }
    ]
  }

]

function animateToCart(source) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const target = [...document.querySelectorAll('[data-cart-target]')]
    .find((element) => element.getClientRects().length > 0)
  if (!target || typeof source.animate !== 'function') return

  const sourceRect = source.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  if (!sourceRect.width || !targetRect.width) return

  const startX = sourceRect.left + sourceRect.width / 2
  const startY = sourceRect.top + sourceRect.height / 2
  const endX = targetRect.left + targetRect.width / 2
  const endY = targetRect.top + targetRect.height / 2
  const traveler = document.createElement('span')
  traveler.className = 'cart-flight'
  traveler.setAttribute('aria-hidden', 'true')
  traveler.textContent = '+'
  traveler.style.left = `${startX}px`
  traveler.style.top = `${startY}px`
  document.body.append(traveler)

  const animation = traveler.animate(
    [
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      {
        transform: `translate(calc(-50% + ${endX - startX}px), calc(-50% + ${endY - startY}px)) scale(.35)`,
        opacity: .8,
      },
    ],
    { duration: 380, easing: 'cubic-bezier(.2, .75, .25, 1)' },
  )
  animation.addEventListener('finish', () => traveler.remove(), { once: true })
}

function getProductPath(product) {
  return product.url || `/productos/${product.id}`
}

function getProductPrice(product) {
  const price = product.discountPrice || product.price
  return Number(String(price).replace(/[^\d.-]/g, '')) || 0
}

function ProductMedia({ product, imageIndex = 0, language = 'es' }) {
  const image = product.images?.[imageIndex]

  return (
    <div className="catalog-product-media">
      <ProductArt type={product.art} />
      {image && (
        <img
          className="catalog-product-photo"
          src={image}
          alt={product.name?.[language] || product.name?.es || 'Pawflow product'}
          onError={(event) => event.currentTarget.classList.add('is-unavailable')}
        />
      )}
    </div>
  )
}

function QuantityControl({ quantity, onChange, copy, className = '' }) {
  return (
    <div className={`catalog-quantity-control ${className}`} aria-label={copy.quantity}>
      <button
        type="button"
        aria-label={copy.decrease}
        onClick={() => onChange(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
        −
      </button>
      <span aria-live="polite">{quantity}</span>
      <button
        type="button"
        aria-label={copy.increase}
        onClick={() => onChange(quantity + 1)}
      >
        +
      </button>
    </div>
  )
}

function useAddToCart(language) {
  const { setCart } = useContext(CartContext)
  const [addedProduct, setAddedProduct] = useState('')

  const addToCart = (product, source, quantity = 1) => {
    animateToCart(source)
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id)
      if (existingProduct) {
        return currentCart.map((item) => (
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + quantity }
            : item
        ))
      }

      return [...currentCart, {
        id: product.id,
        name: product.name[language],
        price: getProductPrice(product),
        quantity,
        image: product.images?.[0],
      }]
    })
    setAddedProduct(product.id)
  }

  return { addedProduct, addToCart }
}

function ProductArt({ type }) {
  if (type === 'feeder' || type?.includes('feeder')) {
    return (
      <svg viewBox="0 0 280 220" role="img" aria-label="Comedero inteligente">
        <ellipse cx="142" cy="189" rx="91" ry="13" fill="#cbd8cc" opacity=".55" />
        <path d="M75 66c0-17 29-29 65-29s65 12 65 29v77H75V66Z" fill="#fff" stroke="#d7dfd7" strokeWidth="3" />
        <ellipse cx="140" cy="66" rx="65" ry="25" fill="#f8faf7" stroke="#d7dfd7" strokeWidth="3" />
        <path d="M85 105h110v41c0 12-25 22-55 22s-55-10-55-22v-41Z" fill="#edf2ed" stroke="#d7dfd7" strokeWidth="3" />
        <ellipse cx="140" cy="105" rx="55" ry="18" fill="#dce6dd" />
        <rect x="119" y="77" width="42" height="22" rx="7" fill="#eaf3ec" />
        <circle cx="130" cy="88" r="4" fill="#68a07c" />
        <path d="M141 88h11" stroke="#68a07c" strokeWidth="3" strokeLinecap="round" />
        <path d="M85 146c0 12 25 22 55 22s55-10 55-22" fill="none" stroke="#cfd9d0" strokeWidth="3" />
        <path d="M91 53c16-12 37-17 54-17" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </svg>
    )
  }

  if (type === 'fountain' || type?.includes('fountain')) {
    return (
      <svg viewBox="0 0 280 220" role="img" aria-label="Fuente de agua para mascotas">
        <ellipse cx="140" cy="186" rx="91" ry="13" fill="#cbd8dc" opacity=".6" />
        <path d="M67 133c0-17 33-30 73-30s73 13 73 30v28c0 16-33 28-73 28s-73-12-73-28v-28Z" fill="#f8fbfb" stroke="#d8e2e4" strokeWidth="3" />
        <ellipse cx="140" cy="132" rx="73" ry="28" fill="#e5f1f3" stroke="#d8e2e4" strokeWidth="3" />
        <path d="M105 128c0-21 12-38 35-38s35 17 35 38" fill="#fff" stroke="#d3dfe1" strokeWidth="3" />
        <path d="M118 119c5-11 13-16 22-16s17 5 22 16" fill="none" stroke="#80b8c2" strokeWidth="5" strokeLinecap="round" />
        <path d="M140 104V77" stroke="#80b8c2" strokeWidth="4" strokeLinecap="round" />
        <circle cx="140" cy="71" r="7" fill="#9bcbd2" />
        <path d="M78 144c24 17 100 19 124 0" fill="none" stroke="#dbe7e8" strokeWidth="3" />
        <circle cx="190" cy="159" r="4" fill="#8bbec7" />
      </svg>
    )
  }

  if (
    type === 'bowl'
    || type?.includes('rope')
    || type?.includes('steps')
    || type?.includes('scratch')
  ) {
    return (
      <svg viewBox="0 0 280 220" role="img" aria-label="Plato para mascotas">
        <ellipse cx="140" cy="177" rx="95" ry="13" fill="#decfc3" opacity=".65" />
        <path d="M61 111c0-16 35-29 79-29s79 13 79 29l-15 49c-4 14-29 22-64 22s-60-8-64-22l-15-49Z" fill="#f9f4ef" stroke="#e2d7cd" strokeWidth="3" />
        <ellipse cx="140" cy="111" rx="79" ry="29" fill="#fffdfa" stroke="#e2d7cd" strokeWidth="3" />
        <ellipse cx="140" cy="111" rx="62" ry="19" fill="#e8d2bf" />
        <path d="M88 115c16 10 88 10 104 0" fill="none" stroke="#dcc3ae" strokeWidth="3" />
        <path d="M79 148c26 14 96 16 122 0" fill="none" stroke="#efe5dd" strokeWidth="4" />
        <path d="M73 105c17-12 43-18 67-18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 280 220" role="img" aria-label="Cámara para mascotas">
      <ellipse cx="140" cy="181" rx="76" ry="12" fill="#d4d0df" opacity=".6" />
      <path d="M82 97c0-20 26-35 58-35s58 15 58 35v52c0 16-26 28-58 28s-58-12-58-28V97Z" fill="#fff" stroke="#dedbe5" strokeWidth="3" />
      <ellipse cx="140" cy="97" rx="58" ry="35" fill="#f7f6fa" stroke="#dedbe5" strokeWidth="3" />
      <circle cx="140" cy="97" r="23" fill="#42454b" />
      <circle cx="140" cy="97" r="15" fill="#252a30" />
      <circle cx="135" cy="91" r="5" fill="#8eaab2" />
      <circle cx="168" cy="78" r="4" fill="#d79c73" />
      <path d="M108 151c15 8 49 8 64 0" fill="none" stroke="#e6e3ed" strokeWidth="3" />
      <path d="M112 70c9-7 19-10 28-10" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function CategoryIllustration({ type }) {
  return (
    <span className={`catalog-category-art catalog-category-${type}`} aria-hidden="true">
      {type === 'mealtime' ? '⌂' : type === 'hydration' ? '◌' : '♡'}
    </span>
  )
}

export function ProductsComponent({ text }) {
  const language = text?.nav?.[0] === 'Home' ? 'en' : 'es'
  const copy = catalogCopy[language]
  const { addedProduct, addToCart } = useAddToCart(language)
  const [quantities, setQuantities] = useState({})
  const setProductQuantity = (productId, quantity) => {
    setQuantities((current) => ({ ...current, [productId]: quantity }))
  }

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</span>
          <h1>{copy.headline}</h1>
          <p>{copy.description}</p>
          <div className="catalog-hero-actions">
            <a className="button button-primary" href="#catalog-featured">{copy.shop}<span aria-hidden="true">↗</span></a>
            <Link className="catalog-petfeeder-link" to="/comederos-inteligentes/petfeeder">
              {language === 'es' ? 'Conoce PetFeeder' : 'Meet PetFeeder'} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="catalog-hero-art">
          <span className="catalog-hero-orbit" />
          <div className="catalog-hero-product"><ProductArt type="feeder" /></div>
          <span className="catalog-hero-caption"><span>✦</span>{language === 'es' ? 'Diseñado para su bienestar' : 'Designed for their wellbeing'}</span>
        </div>
      </section>

      <div className="catalog-trust">
        {copy.trust.map((item, index) => (
          <div className="catalog-trust-item" key={item}>
            <span className="catalog-trust-icon" aria-hidden="true">{['↗', '↺', '♡'][index]}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <section className="catalog-featured" id="catalog-featured">
        <div className="catalog-section-heading">
          <span className="eyebrow">{language === 'es' ? 'SELECCIÓN PAWFLOW' : 'CURATED BY PAWFLOW'}</span>
          <h2>{copy.featured}</h2>
          <p>{copy.featuredDescription}</p>
        </div>
        <div className="catalog-product-grid">
          {products.map((product) => (
            <article className="catalog-product-card" key={product.id}>
              <Link className={`catalog-product-image catalog-tone-${product.tone}`} to={getProductPath(product)} aria-label={`${product.name[language]}: ${copy.detailTitle}`}>
                {product.badge && <span className={`catalog-badge catalog-badge-${product.badge}`}>{copy[product.badge] || product.badge}</span>}
                <ProductMedia product={product} />
              </Link>
              <div className="catalog-product-info">
                <span className="catalog-product-kind">{product.category?.[language] || (language === 'es' ? 'CUIDADO PARA MASCOTAS' : 'PET CARE')}</span>
                <h3><Link to={getProductPath(product)}>{product.name?.[language] || product.name?.es}</Link></h3>
                <div
                  className="catalog-product-short-description"
                  dangerouslySetInnerHTML={{ __html: product.shortDescription?.[language] || product.shortDescription?.es || '' }}
                />
                <span className="catalog-card-rating" aria-label={`${product.rating || 0} / 5`}>
                  <span aria-hidden="true">★★★★★</span>
                  <b>{product.rating || '—'}</b>
                  <small>({product.reviews?.length || 0})</small>
                </span>
                <div className="catalog-product-bottom">
                  <div className="catalog-price">
                    <strong>{product.discountPrice || product.price}</strong>
                    {product.discountPrice && <del>{product.price}</del>}
                  </div>
                  <QuantityControl
                    quantity={quantities[product.id] || 1}
                    onChange={(quantity) => setProductQuantity(product.id, quantity)}
                    copy={copy}
                  />
                  <button
                    className={`catalog-shop-link${addedProduct === product.id ? ' is-added' : ''}`}
                    type="button"
                    onClick={(event) => addToCart(product, event.currentTarget, quantities[product.id] || 1)}
                    aria-label={`${addedProduct === product.id ? copy.added : copy.add} ${product.name?.[language] || product.name?.es}`}
                  >
                    {addedProduct === product.id ? copy.added : copy.add}<span aria-hidden="true">{addedProduct === product.id ? '✓' : '→'}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-promo">
        <div className="catalog-promo-copy">
          <span className="eyebrow">{language === 'es' ? 'MENOS PREOCUPACIONES, MÁS MIMOS' : 'LESS WORRY, MORE WAGGING'}</span>
          <h2>{copy.promoTitle}</h2>
          <p>{copy.promoDescription}</p>
          <a className="button button-dark" href="#catalog-categories">{copy.promoButton}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="catalog-promo-art" aria-hidden="true">
          <span className="promo-paw promo-paw-one">✦</span>
          <span className="promo-paw promo-paw-two">✧</span>
          <div className="promo-bowl"><span /></div>
          <div className="promo-orbit" />
        </div>
      </section>

      <section className="catalog-categories" id="catalog-categories">
        <div className="catalog-section-heading">
          <span className="eyebrow">{language === 'es' ? 'UN HOGAR FELIZ' : 'A HAPPIER HOME'}</span>
          <h2>{copy.categories}</h2>
        </div>
        <div className="catalog-category-grid">
          {['mealtime', 'hydration', 'play'].map((type, index) => (
            <a className={`catalog-category-card catalog-category-card-${type}`} href="#catalog-featured" key={type}>
              <CategoryIllustration type={type} />
              <span className="catalog-category-content">
                <strong>{copy.categoryTitles[index]}</strong>
                <span>{copy.categoryLinks[index]} <i aria-hidden="true">→</i></span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export function ProductDetailsComponent({ text }) {
  const { slug } = useParams()
  const language = text?.nav?.[0] === 'Home' ? 'en' : 'es'
  const copy = catalogCopy[language]
  const product = products.find((item) => item.id === slug || item.url?.split('/').filter(Boolean).pop() === slug)
  const { addedProduct, addToCart } = useAddToCart(language)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <main className="catalog-not-found">
        <h1>{language === 'en' ? 'We could not find this product.' : 'No encontramos este producto.'}</h1>
        <Link className="catalog-back-link" to="/productos">{copy.back}</Link>
      </main>
    )
  }

  return (
    <main className="catalog-detail-page">
      <Link className="catalog-back-link" to="/productos">← {copy.back}</Link>
      <article className="catalog-detail-card">
        <div className={`catalog-detail-art catalog-tone-${product.tone}`}>
          <ProductMedia product={product} imageIndex={activeImage} language={language} />
          {product.images?.length > 1 && (
            <div className="catalog-detail-thumbnails" aria-label={language === 'es' ? 'Imágenes del producto' : 'Product images'}>
              {product.images.map((image, index) => (
                <button
                  type="button"
                  className={activeImage === index ? 'is-active' : ''}
                  key={image}
                  onClick={() => setActiveImage(index)}
                  aria-label={`${language === 'es' ? 'Ver imagen' : 'View image'} ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img src={image} alt="" onError={(event) => event.currentTarget.classList.add('is-unavailable')} />
                  <span>{index + 1}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="catalog-detail-copy">
          <span className="catalog-product-kind">{product.category?.[language] || (language === 'es' ? 'CUIDADO PARA MASCOTAS' : 'PET CARE')}</span>
          <h1>{product.name?.[language] || product.name?.es}</h1>
          <div
            className="catalog-detail-short-description"
            dangerouslySetInnerHTML={{ __html: product.shortDescription?.[language] || product.shortDescription?.es || '' }}
          />
          <span className="catalog-detail-rating" aria-label={`${product.rating || 0} / 5`}>
            ★★★★★ <b>{product.rating || '—'}</b>
            <span>({product.reviews?.length || 0} {copy.reviews})</span>
          </span>
          <div className="catalog-detail-price">
            <strong>{product.discountPrice || product.price}</strong>
            {product.discountPrice && <del>{product.price}</del>}
          </div>
          <div
            className="catalog-detail-description"
            dangerouslySetInnerHTML={{ __html: product.longDescription?.[language] || product.longDescription?.es || '' }}
          />
          <div className="catalog-detail-buy">
            <QuantityControl quantity={quantity} onChange={setQuantity} copy={copy} />
            <button
              className={`button button-primary catalog-detail-add${addedProduct === product.id ? ' is-added' : ''}`}
              type="button"
              onClick={(event) => addToCart(product, event.currentTarget, quantity)}
            >
              {addedProduct === product.id ? copy.added : copy.add}
              <span aria-hidden="true">{addedProduct === product.id ? '✓' : '→'}</span>
            </button>
          </div>
          <div className="catalog-detail-trust">
            <span>✓ {copy.trust[0]}</span>
            <span>✓ {copy.trust[1]}</span>
          </div>
        </div>
      </article>
      {product.reviews?.length > 0 && (
        <section className="catalog-reviews">
          <span className="eyebrow">{copy.reviewsTitle}</span>
          <h2>{language === 'es' ? 'Lo que cuentan quienes ya lo probaron' : 'What customers are saying'}</h2>
          <div className="catalog-review-grid">
            {product.reviews.map((review) => (
              <article className="catalog-review-card" key={`${product.id}-${review.name}-${review.date}`}>
                <span aria-label={`${review.rating} / 5`}>★★★★★ <b>{review.rating}</b></span>
                <p>{review.message}</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export function PetFeederProductCard({ language = 'es' }) {
  const isEnglish = language === 'en'
  const product = products.find((item) => item.id === 'feeder-plus')
  const { addedProduct, addToCart } = useAddToCart(language)
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  return (
    <article className="petfeeder-offer-card">
      <div className={`petfeeder-offer-art catalog-tone-${product.tone}`}>
        <span className="catalog-badge catalog-badge-new">{isEnglish ? 'SMART CARE' : 'CUIDADO INTELIGENTE'}</span>
        <ProductMedia product={product} language={language} />
      </div>
      <div className="petfeeder-offer-copy">
        <span className="petfeeder-offer-category">
          {isEnglish ? 'SMART PET CARE SYSTEM' : 'SISTEMA INTELIGENTE PARA MASCOTAS'}
        </span>
        <h3>{isEnglish ? 'PetFeeder Smart Feeder' : 'PetFeeder Comedero Inteligente'}</h3>
        <p>
          {isEnglish
            ? 'A smarter feeding routine for dogs and cats. Get in touch to learn more about the system.'
            : 'Una rutina de alimentación más inteligente para perros y gatos. Contáctanos para conocer más sobre el sistema.'}
        </p>
        <div className="petfeeder-offer-price">
          <strong>{product.discountPrice || product.price}</strong>
          {product.discountPrice && <del>{product.price}</del>}
        </div>
        <div className="petfeeder-offer-actions">
          <QuantityControl
            quantity={quantity}
            onChange={setQuantity}
            copy={{
              quantity: isEnglish ? 'Quantity' : 'Cantidad',
              decrease: isEnglish ? 'Decrease quantity' : 'Disminuir cantidad',
              increase: isEnglish ? 'Increase quantity' : 'Aumentar cantidad',
            }}
          />
          <button
            type="button"
            className={`button button-primary petfeeder-offer-add${addedProduct === product.id ? ' is-added' : ''}`}
            onClick={(event) => addToCart(product, event.currentTarget, quantity)}
          >
            {addedProduct === product.id
              ? (isEnglish ? 'Added to cart' : 'Agregado al carrito')
              : (isEnglish ? 'Add to cart' : 'Agregar al carrito')}
            <span aria-hidden="true">{addedProduct === product.id ? '✓' : '→'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
