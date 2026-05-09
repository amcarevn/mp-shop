import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { products, formatVND } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Home() {
  const { t } = useTranslation()
  const { addItem } = useCart()
  const navigate = useNavigate()

  const handleAdd = (p) => {
    addItem({
      id: p.id,
      name: t(`products.list.${p.id}.name`),
      price: p.price,
      emoji: p.emoji,
      stock: p.stock,
    })
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <button className="btn-primary" onClick={() => {
            const el = document.getElementById('products')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}>
            {t('hero.cta')}
          </button>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <h2 className="section-title">{t('products.title')}</h2>
          <p className="section-sub">{t('products.subtitle')}</p>

          <div className="product-grid">
            {products.map((p) => (
              <article key={p.id} className="product-card">
                <div className="product-image" aria-hidden="true">
                  {p.emoji}
                </div>
                <h3 className="product-name">
                  {t(`products.list.${p.id}.name`)}
                </h3>
                <p className="product-desc">
                  {t(`products.list.${p.id}.desc`)}
                </p>
                <div className="product-bottom">
                  <span className="product-price">{formatVND(p.price)}</span>
                  <button
                    className="btn-add"
                    onClick={() => {
                      handleAdd(p)
                      navigate('/checkout')
                    }}
                  >
                    {t('products.addToCart')}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
