import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-the">the</span>
            <span className="logo-name">COCOON</span>
            <span className="logo-sub">ORIGINAL VIETNAM</span>
          </div>
          <p className="footer-tagline">{t('footer.col1Text')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col2Title')}</h4>
          <ul>
            <li><a href="#products">{t('footer.col2Link1')}</a></li>
            <li><a href="#products">{t('footer.col2Link2')}</a></li>
            <li><a href="#products">{t('footer.col2Link3')}</a></li>
            <li><a href="#products">{t('footer.col2Link4')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col3Title')}</h4>
          <ul>
            <li><a href="#contact">{t('footer.col3Link1')}</a></li>
            <li><a href="#contact">{t('footer.col3Link2')}</a></li>
            <li><a href="#contact">{t('footer.col3Link3')}</a></li>
            <li><a href="#contact">{t('footer.col3Link4')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col4Title')}</h4>
          <div className="footer-social">
            <a href="#contact" className="social-link"><FaFacebookF className="inline-icon" /> {t('footer.social1')}</a>
            <a href="#contact" className="social-link"><FaInstagram className="inline-icon" /> {t('footer.social2')}</a>
            <a href="#contact" className="social-link"><FaTiktok className="inline-icon" /> {t('footer.social3')}</a>
            <a href="#contact" className="social-link"><FaYoutube className="inline-icon" /> {t('footer.social4')}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}
