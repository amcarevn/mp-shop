import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaCartShopping, FaBars, FaXmark } from 'react-icons/fa6'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { count } = useCart()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const changeLang = (lng) => i18n.changeLanguage(lng)

  const closeMenu = () => setMenuOpen(false)

  const handleMobileCartClick = () => {
    closeMenu()
    navigate('/checkout')
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="ORIA" onClick={closeMenu}>
          <span className="logo-name">ORIA</span>
          <span className="logo-sub">SAFE SOLUTIONS FOR TROPICAL SKIN</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end>{t('nav.home')}</NavLink>
          <details className="nav-dropdown">
            <summary>{t('nav.product')}</summary>
            <div className="nav-dropdown-menu">
              <a href="#products">{t('nav.productAcne')}</a>
              <a href="#products">{t('nav.productDarkSpots')}</a>
              <a href="#products">{t('nav.productBrightening')}</a>
            </div>
          </details>
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
            <FaCartShopping className="inline-icon" />
            {t('nav.cart')}
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <Link to="/checkout" className="mobile-cart-btn" aria-label={t('nav.cart')}>
            <FaCartShopping />
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <Link to="/" className="logo" onClick={closeMenu}>
                <span className="logo-name">ORIA</span>
              </Link>
              <button
                type="button"
                className="hamburger"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <FaXmark />
              </button>
            </div>

            <div className="mobile-nav-links">
              <NavLink to="/" end onClick={closeMenu}>{t('nav.home')}</NavLink>
              <details className="mobile-nav-dropdown">
                <summary>{t('nav.product')}</summary>
                <div className="mobile-sub-links">
                  <a href="#products" onClick={closeMenu}>{t('nav.productAcne')}</a>
                  <a href="#products" onClick={closeMenu}>{t('nav.productDarkSpots')}</a>
                  <a href="#products" onClick={closeMenu}>{t('nav.productBrightening')}</a>
                </div>
              </details>
              <a href="#about" onClick={closeMenu}>{t('nav.about')}</a>
              <a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a>
            </div>

            <div className="mobile-nav-footer">
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
              <button type="button" className="btn-primary" onClick={handleMobileCartClick}>
                <FaCartShopping className="inline-icon" />
                {t('nav.cart')}
                {count > 0 && <span className="cart-count">{count}</span>}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
