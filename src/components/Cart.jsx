import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/context'

export const CartComponent = ({ language = 'es' }) => {
  const { cart, setCart } = useContext(CartContext)
  const isEnglish = language === 'en'
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [confirmationState, setConfirmationState] = useState('closed')
  const closingTimer = useRef(null)
  const closeButton = useRef(null)
  const submitButton = useRef(null)
  const itemCount = cart.reduce((sum, product) => sum + (product.quantity || 1), 0)
  const total = cart.reduce((sum, product) => sum + product.price * (product.quantity || 1), 0)
  const isConfirmationVisible = confirmationState !== 'closed'

  useEffect(() => () => window.clearTimeout(closingTimer.current), [])

  useEffect(() => {
    if (confirmationState === 'open') closeButton.current?.focus()
  }, [confirmationState])

  useEffect(() => {
    if (!isConfirmationVisible) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeConfirmation()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isConfirmationVisible])

  const closeConfirmation = () => {
    if (confirmationState !== 'open') return

    setConfirmationState('closing')
    closingTimer.current = window.setTimeout(() => {
      setConfirmationState('closed')
      submitButton.current?.focus()
    }, 220)
  }

  const handleCustomerChange = (event) => {
    const { name, value } = event.target
    setCustomer((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    const order = {
      customer: {
        name: customer.name.trim(),
        email: customer.email.trim(),
        phone: customer.phone.trim(),
      },
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        unitPrice: product.price,
        quantity: product.quantity || 1,
        subtotal: product.price * (product.quantity || 1),
      })),
      itemCount,
      total,
      currency: 'USD',
    }

    try {
      const response = await fetch(import.meta.env.VITE_ORDERS_API_URL || '/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      })

      if (!response.ok) {
        throw new Error(isEnglish
          ? 'We could not send your request. Please try again.'
          : 'No pudimos enviar tu solicitud. Inténtalo nuevamente.')
      }

      setConfirmationState('open')
    } catch (error) {
      setSubmitError(error instanceof Error
        ? error.message
        : (isEnglish ? 'Something went wrong. Please try again.' : 'Ocurrió un error. Inténtalo nuevamente.'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="cart-page">
      <span className="eyebrow">{isEnglish ? 'YOUR PAWFLOW PICKS' : 'TUS FAVORITOS PAWFLOW'}</span>
      <h1>{isEnglish ? 'Shopping cart' : 'Tu carrito'}</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <span className="cart-empty-icon" aria-hidden="true">♡</span>
          <h2>{isEnglish ? 'Your cart is waiting for a little something.' : 'Tu carrito espera algo especial.'}</h2>
          <p>{isEnglish ? 'Explore products made for happier routines.' : 'Descubre productos para rutinas más felices.'}</p>
          <Link className="button button-primary" to="/productos">
            {isEnglish ? 'Explore products' : 'Ver productos'} <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((product) => (
              <article className="cart-item" key={product.id}>
                {product.image
                  ? <img className="cart-item-image" src={product.image} alt="" onError={(event) => event.currentTarget.classList.add('is-unavailable')} />
                  : <span className="cart-item-icon" aria-hidden="true">✦</span>}
                <div className="cart-item-details">
                  <h2>{product.name}</h2>
                  <span>{isEnglish ? 'Pawflow · Everyday care' : 'Pawflow · Cuidado diario'}</span>
                </div>
                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() => setCart((items) => items.map((item) => (
                      item.id === product.id ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) } : item
                    )))}
                    disabled={(product.quantity || 1) <= 1}
                    aria-label={isEnglish ? 'Decrease quantity' : 'Disminuir cantidad'}
                  >
                    −
                  </button>
                  <span aria-live="polite">{product.quantity || 1}</span>
                  <button
                    type="button"
                    onClick={() => setCart((items) => items.map((item) => (
                      item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                    )))}
                    aria-label={isEnglish ? 'Increase quantity' : 'Aumentar cantidad'}
                  >
                    +
                  </button>
                </div>
                <strong className="cart-item-subtotal">${(product.price * (product.quantity || 1)).toFixed(2)}</strong>
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => setCart((items) => items.filter((item) => item.id !== product.id))}
                  aria-label={`${isEnglish ? 'Remove' : 'Eliminar'} ${product.name}`}
                >
                  {isEnglish ? 'Remove' : 'Eliminar'}
                </button>
              </article>
            ))}
          </div>
          <form className="cart-customer-form" onSubmit={handleSubmit}>
            <div className="cart-form-heading">
              <span className="eyebrow">{isEnglish ? 'YOUR DETAILS' : 'TUS DATOS'}</span>
              <h2>{isEnglish ? 'Where can we reach you?' : '¿Cómo podemos contactarte?'}</h2>
              <p>{isEnglish ? 'Share your details and we will follow up about your order.' : 'Déjanos tus datos para contactarte sobre tu pedido.'}</p>
            </div>
            <label>
              <span>{isEnglish ? 'Full name' : 'Nombre de la persona'}</span>
              <input
                autoComplete="name"
                name="name"
                value={customer.name}
                onChange={handleCustomerChange}
                required
                maxLength={120}
              />
            </label>
            <div className="cart-form-row">
              <label>
                <span>{isEnglish ? 'Email' : 'Correo electrónico'}</span>
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  value={customer.email}
                  onChange={handleCustomerChange}
                  required
                  maxLength={254}
                />
              </label>
              <label>
                <span>{isEnglish ? 'Phone' : 'Teléfono'}</span>
                <input
                  autoComplete="tel"
                  name="phone"
                  type="tel"
                  value={customer.phone}
                  onChange={handleCustomerChange}
                  required
                  maxLength={30}
                />
              </label>
            </div>
            {submitError && <p className="cart-submit-error" role="alert">{submitError}</p>}
            <button
              className="button button-primary cart-submit"
              type="submit"
              disabled={isSubmitting || cart.length === 0}
              ref={submitButton}
            >
              {isSubmitting
                ? (isEnglish ? 'Sending…' : 'Enviando…')
                : (isEnglish ? 'Send my request' : 'Enviar mis datos')}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </form>
          <aside className="cart-summary">
            <h2>{isEnglish ? 'Order summary' : 'Resumen del pedido'}</h2>
            <div><span>{isEnglish ? 'Items' : 'Productos'} ({itemCount})</span><strong>${total.toFixed(2)}</strong></div>
            <ul className="cart-summary-items">
              {cart.map((product) => (
                <li key={product.id}>
                  <span>{product.name} <b>× {product.quantity || 1}</b></span>
                  <strong>${(product.price * (product.quantity || 1)).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div><span>{isEnglish ? 'Shipping' : 'Envío'}</span><strong>{isEnglish ? 'Calculated at checkout' : 'Calculado al pagar'}</strong></div>
            <div className="cart-total"><span>{isEnglish ? 'Subtotal' : 'Subtotal'}</span><strong>${total.toFixed(2)}</strong></div>
            <Link className="cart-continue" to="/productos">
              {isEnglish ? 'Continue shopping' : 'Seguir comprando'}
            </Link>
          </aside>
        </div>
      )}
      {isConfirmationVisible && (
        <div
          className={`cart-confirmation-backdrop${confirmationState === 'closing' ? ' is-closing' : ''}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeConfirmation()
          }}
        >
          <section
            className="cart-confirmation-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-confirmation-title"
            aria-describedby="cart-confirmation-message"
          >
            <button
              ref={closeButton}
              type="button"
              className="cart-confirmation-close"
              onClick={closeConfirmation}
              aria-label={isEnglish ? 'Close confirmation' : 'Cerrar confirmación'}
            >
              ×
            </button>
            <span className="cart-confirmation-icon" aria-hidden="true">✓</span>
            <span className="eyebrow">{isEnglish ? 'REQUEST RECEIVED' : 'SOLICITUD RECIBIDA'}</span>
            <h2 id="cart-confirmation-title">{isEnglish ? 'Thank you for reaching out!' : '¡Gracias por escribirnos!'}</h2>
            <p id="cart-confirmation-message">
              {isEnglish
                ? 'We will be in touch with you soon to confirm the details.'
                : 'Próximamente nos comunicaremos contigo para confirmar los detalles de tu pedido.'}
            </p>
            <button type="button" className="button button-primary" onClick={closeConfirmation}>
              {isEnglish ? 'Close' : 'Cerrar'}
            </button>
          </section>
        </div>
      )}
    </main>
  )
}
