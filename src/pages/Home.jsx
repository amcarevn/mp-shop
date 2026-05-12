import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { FaLeaf, FaLocationDot, FaShieldHalved, FaWandMagicSparkles } from 'react-icons/fa6'
import { products, formatPrice } from '../data/products.js'
import { getProductIcon } from '../data/productIcons.jsx'
import { useCart } from '../context/CartContext.jsx'

const brandFeatures = [
  { Icon: FaLeaf, key: 'feature1' },
  { Icon: FaLocationDot, key: 'feature2' },
  { Icon: FaShieldHalved, key: 'feature3' },
  { Icon: FaWandMagicSparkles, key: 'feature4' },
]

const featuredProduct = products.find(p => p.id === 'sf3') || products[0]
const CATEGORY_ANCHOR_BY_PRODUCT_ID = {
  ap1: 'products-acne',
  sf1: 'products-dark-spots',
  lg1: 'products-brightening',
}
export default function Home() {
  const { t, i18n } = useTranslation()
  const { addItem } = useCart()
  const navigate = useNavigate()

  const handleAdd = (p) => {
    addItem({
      id: p.id,
      name: t(`products.list.${p.id}.name`),
      price: p.price,
      icon: p.icon,
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
            {brandFeatures.map(({ Icon, key }) => (
              <div key={key} className="brand-feature-item">
                <Icon className="brand-feature-icon" aria-hidden="true" />
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
            <div className="product-image highlight-icon-placeholder" aria-hidden="true">
              {(() => { const Icon = getProductIcon(featuredProduct.icon); return <Icon className="product-icon highlight-icon" /> })()}
            </div>
          </div>
          <div className="highlight-text">
            <span className="highlight-badge">{t('brand.highlightBadge')}</span>
            <h2>{t('brand.highlightTitle')}</h2>
            <p>{t('brand.highlightDesc')}</p>
            <div className="highlight-price">{formatPrice(featuredProduct.price, i18n.resolvedLanguage)}</div>
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
            {products.map((p) => {
              const ProductIcon = getProductIcon(p.icon)
              const anchorId = CATEGORY_ANCHOR_BY_PRODUCT_ID[p.id]
              return (
                <article key={p.id} id={anchorId} className="product-card">
                  <div className="product-image" aria-hidden="true">
                    <ProductIcon className="product-icon" />
                  </div>
                  <h3 className="product-name">{t(`products.list.${p.id}.name`)}</h3>
                  <p className="product-desc">{t(`products.list.${p.id}.desc`)}</p>
                  <div className="product-bottom">
                    <span className="product-price">{formatPrice(p.price, i18n.resolvedLanguage)}</span>
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
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== BLOG / INSIGHTS SECTION ===== */}
      <section className="section" id="blog" style={{ background: 'var(--color-bg-alt, #f9f9f9)' }}>
        <div className="container">
          <h2 className="section-title">{t('blog.title')}</h2>
          <p className="section-sub">{t('blog.subtitle')}</p>
          <div className="product-grid">
            {[1, 2, 3].map((n) => (
              <article key={n} className="product-card" style={{ cursor: 'default' }}>
                <h3 className="product-name">{t(`blog.post${n}Title`)}</h3>
                <p className="product-desc">{t(`blog.post${n}Excerpt`)}</p>
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
