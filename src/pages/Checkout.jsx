import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBuildingColumns, FaMoneyBillWave, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import { getProductIcon } from '../data/productIcons.jsx'

export default function Checkout() {
  const { t, i18n } = useTranslation()
  const { items, updateQty, removeItem, subtotal } = useCart()

  const [shipping, setShipping] = useState('standard')
  const [payment, setPayment] = useState('cod')
  const [promo, setPromo] = useState('')
  const [discount, setDiscount] = useState(0)

  const shippingFee = shipping === 'express' ? 30000 : 0
  const total = Math.max(0, subtotal - discount) + shippingFee

  const applyPromo = (e) => {
    e.preventDefault()
    // Simple demo promo: COCOON10 = 10% off
    if (promo.trim().toUpperCase() === 'COCOON10') {
      setDiscount(Math.round(subtotal * 0.1))
    } else {
      setDiscount(0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('checkout.placeOrder'))
  }

  return (
    <div className="container">
      <div className="checkout">
        {/* LEFT: form */}
        <form onSubmit={handleSubmit}>
          <section className="card">
            <h2>
              {t('checkout.contactTitle')}
              <span className="login-link">
                {t('checkout.haveAccount')}{' '}
                <a href="#signin">{t('checkout.signIn')}</a>
              </span>
            </h2>
            <div className="field">
              <input
                type="email"
                className="input"
                placeholder={t('checkout.emailPlaceholder')}
                required
              />
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              <span>{t('checkout.subscribe')}</span>
            </label>
          </section>

          <section className="card">
            <h2>{t('checkout.shippingTitle')}</h2>
            <div className="row-2">
              <div className="field">
                <input
                  className="input"
                  placeholder={t('checkout.fullName')}
                  required
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  placeholder={t('checkout.phone')}
                  required
                />
              </div>
            </div>
            <div className="row-2">
              <div className="field">
                <select className="select" defaultValue="" required>
                  <option value="" disabled>{t('checkout.province')}</option>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Cần Thơ</option>
                </select>
              </div>
              <div className="field">
                <select className="select" defaultValue="" required>
                  <option value="" disabled>{t('checkout.district')}</option>
                  <option>Quận 1</option>
                  <option>Quận 3</option>
                  <option>Quận 7</option>
                </select>
              </div>
            </div>
            <div className="row-2">
              <div className="field">
                <select className="select" defaultValue="" required>
                  <option value="" disabled>{t('checkout.ward')}</option>
                  <option>Phường Bến Nghé</option>
                  <option>Phường Đa Kao</option>
                </select>
              </div>
              <div className="field">
                <input
                  className="input"
                  placeholder={t('checkout.address')}
                  required
                />
              </div>
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              <span>{t('checkout.saveInfo')}</span>
            </label>
          </section>

          <section className="card">
            <h2>{t('checkout.shippingMethodTitle')}</h2>
            <label className={`shipping-option ${shipping === 'standard' ? 'active' : ''}`}>
              <input
                type="radio"
                name="shipping"
                value="standard"
                checked={shipping === 'standard'}
                onChange={() => setShipping('standard')}
              />
              <span>{t('checkout.standardShipping')}</span>
              <span className="price">{t('checkout.free')}</span>
            </label>
            <label className={`shipping-option ${shipping === 'express' ? 'active' : ''}`}>
              <input
                type="radio"
                name="shipping"
                value="express"
                checked={shipping === 'express'}
                onChange={() => setShipping('express')}
              />
              <span>{t('checkout.expressShipping')}</span>
              <span className="price">{formatPrice(30000, i18n.resolvedLanguage)}</span>
            </label>
          </section>

          <section className="card">
            <h2>{t('checkout.paymentMethodTitle')}</h2>
            <label className={`payment-method ${payment === 'cod' ? 'active' : ''}`}>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === 'cod'}
                onChange={() => setPayment('cod')}
              />
              <span><FaMoneyBillWave className="inline-icon" /> {t('checkout.cod')}</span>
            </label>
            <label className={`payment-method ${payment === 'bank' ? 'active' : ''}`}>
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={payment === 'bank'}
                onChange={() => setPayment('bank')}
              />
              <span><FaBuildingColumns className="inline-icon" /> {t('checkout.bank')}</span>
            </label>
          </section>

          <button
            type="submit"
            className="btn-place-order"
            disabled={items.length === 0}
          >
            {t('checkout.placeOrder')}
          </button>
        </form>

        {/* RIGHT: order summary */}
        <aside className="order-summary">
          <div className="card">
            <h2>{t('checkout.orderDetails')}</h2>

            {items.length === 0 ? (
              <div className="empty">
                <p>{t('checkout.emptyCart')}</p>
                <Link to="/" className="cart-btn">{t('checkout.backToShop')}</Link>
              </div>
            ) : (
              <>
                {items.map((it) => {
                  const ItemIcon = getProductIcon(it.icon, it.emoji)
                  return (
                    <div className="order-item" key={it.id}>
                      <div className="order-item-image" aria-hidden="true">
                        <ItemIcon className="order-item-icon" />
                      </div>
                      <div className="order-item-info">
                        <p className="order-item-name">{it.name}</p>
                        <div className="qty">
                          <button
                            type="button"
                            aria-label="decrease"
                            onClick={() => updateQty(it.id, it.qty - 1)}
                          >−</button>
                          <span>{it.qty}</span>
                          <button
                            type="button"
                            aria-label="increase"
                            onClick={() => updateQty(it.id, it.qty + 1)}
                          >+</button>
                        </div>
                        {typeof it.stock === 'number' && it.stock - it.qty < 5 && (
                          <p className="order-item-stock">
                            {t('checkout.stockLeft', { count: Math.max(0, it.stock - it.qty) })}
                          </p>
                        )}
                      </div>
                      <span className="order-item-price">
                        {formatPrice(it.price * it.qty, i18n.resolvedLanguage)}
                      </span>
                      <button
                        type="button"
                        className="order-item-remove"
                        aria-label="remove"
                        onClick={() => removeItem(it.id)}
                      >
                        <FaXmark />
                      </button>
                    </div>
                  )
                })}

                <p className="promo-label">{t('checkout.promoLabel')}</p>
                <div className="promo">
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder=""
                  />
                  <button type="button" onClick={applyPromo}>
                    {t('checkout.apply').toUpperCase()}
                  </button>
                </div>

                <div className="totals">
                  <div className="totals-row">
                    <span>{t('checkout.subtotal')}</span>
                    <span>{formatPrice(subtotal, i18n.resolvedLanguage)}</span>
                  </div>
                  <div className="totals-row">
                    <span>{t('checkout.discount')}</span>
                    <span>{formatPrice(discount, i18n.resolvedLanguage)}</span>
                  </div>
                  <div className="totals-row">
                    <span>{t('checkout.shippingFee')}</span>
                    <span>{shippingFee === 0 ? t('checkout.free') : formatPrice(shippingFee, i18n.resolvedLanguage)}</span>
                  </div>
                  <div className="totals-row total">
                    <span>{t('checkout.total')}</span>
                    <span>{formatPrice(total, i18n.resolvedLanguage)}</span>
                  </div>
                </div>

                <p className="note">{t('checkout.agreement')}</p>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
