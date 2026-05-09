import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { products, formatVND } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

const brandFeatures = [
  { icon: '🌿', key: 'feature1' },
  { icon: '🇻🇳', key: 'feature2' },
  { icon: '🛡️', key: 'feature3' },
  { icon: '✨', key: 'feature4' },
]

const featuredProduct = products[0]

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
      {/* ===== HERO BANNER ===== */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
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

      {/* ===== BRAND FEATURES STRIP ===== */}
      <section className="brand-features">
        <div className="container">
          <div className="brand-features-grid">
            {brandFeatures.map(({ icon, key }) => (
              <div key={key} className="brand-feature-item">
                <span className="brand-feature-icon">{icon}</span>
                <div>
                  <strong>{t(`brand.${key}Title`)}</strong>
                  <p>{t(`brand.${key}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCT HIGHLIGHT ===== */}
      {featuredProduct && (
      <section className="highlight-section">
        <div className="container highlight-inner">
          <div className="highlight-image-wrap">
            <img
              src="/Chai_Sen_924c4d6134.png"
              alt={t('brand.highlightTitle')}
              className="highlight-img"
            />
          </div>
          <div className="highlight-text">
            <span className="highlight-badge">{t('brand.highlightBadge')}</span>
            <h2>{t('brand.highlightTitle')}</h2>
            <p>{t('brand.highlightDesc')}</p>
            <div className="highlight-price">{formatVND(featuredProduct.price)}</div>
            <button
              className="btn-primary"
              onClick={() => {
                handleAdd(featuredProduct)
                navigate('/checkout')
              }}
            >
              {t('brand.highlightCta')}
            </button>
          </div>
        </div>
      </section>
      )}

      {/* ===== PRODUCTS GRID ===== */}
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

      {/* ===== ABOUT / BRAND SECTION ===== */}
      <section className="about-section" id="about">
        <div className="about-bg" />
        <div className="container about-content">
          <h2>{t('brand.aboutTitle')}</h2>
          <p>{t('brand.aboutText')}</p>
          <a href="#products" className="btn-outline">{t('brand.aboutCta')}</a>
        </div>
      </section>
    </>
  )
}
