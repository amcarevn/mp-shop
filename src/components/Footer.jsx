import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function getRandomDish(items, currentDish = '') {
  if (!items.length) return ''
  if (items.length === 1) return items[0]

  let nextDish = currentDish

  while (nextDish === currentDish) {
    nextDish = items[Math.floor(Math.random() * items.length)]
  }

  return nextDish
}

export default function Footer() {
  const { t, i18n } = useTranslation()
  const foodOptions = t('footer.foodOptions', { returnObjects: true })
  const dishes = Array.isArray(foodOptions) ? foodOptions : []
  const [selectedDish, setSelectedDish] = useState('')

  useEffect(() => {
    setSelectedDish(getRandomDish(dishes))
  }, [i18n.language])

  return (
    <footer className="footer" id="contact">
      <div className="container footer-picker">
        <span className="footer-eyebrow">{t('footer.eyebrow')}</span>
        <h2>{t('footer.title')}</h2>
        <p className="footer-description">{t('footer.description')}</p>

        <div className="footer-result" aria-live="polite">
          <span className="footer-result-label">{t('footer.resultLabel')}</span>
          <strong>{selectedDish || t('footer.fallback')}</strong>
        </div>

        <button
          type="button"
          className="btn-primary footer-button"
          onClick={() => setSelectedDish((currentDish) => getRandomDish(dishes, currentDish))}
        >
          {t('footer.button')}
        </button>

        <ul className="footer-dishes">
          {dishes.map((dish) => (
            <li
              key={dish}
              className={dish === selectedDish ? 'is-selected' : ''}
            >
              {dish}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="container">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}
