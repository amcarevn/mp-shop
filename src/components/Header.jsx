import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { count } = useCart()

  const changeLang = (lng) => i18n.changeLanguage(lng)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="The Cocoon">
          <span className="logo-the">the</span>
          <span className="logo-name">COCOON</span>
          <span className="logo-sub">ORIGINAL VIETNAM</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end>{t('nav.home')}</NavLink>
          <a href="#products">{t('nav.shop')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={i18n.resolvedLanguage === 'vi' ? 'active' : ''}
              onClick={() => changeLang('vi')}
            >
              VI
            </button>
            <span>|</span>
            <button
              type="button"
              className={i18n.resolvedLanguage === 'en' ? 'active' : ''}
              onClick={() => changeLang('en')}
            >
              EN
            </button>
          </div>

          <Link to="/checkout" className="cart-btn">
            🛒 {t('nav.cart')}
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}
