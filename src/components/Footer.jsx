import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const dishes = useMemo(() => {
    const foodOptions = i18n.getResource(i18n.language, 'translation', 'footer.foodOptions')
    return Array.isArray(foodOptions) ? foodOptions : []
  }, [i18n.language])
  const [selectedDish, setSelectedDish] = useState('')

  const pickRandomDish = useCallback((currentDish = '') => {
    if (!dishes.length) return ''

    const availableDishes = dishes.filter((dish) => dish !== currentDish)
    const source = availableDishes.length ? availableDishes : dishes
    return source[Math.floor(Math.random() * source.length)]
  }, [dishes])

  useEffect(() => {
    setSelectedDish(pickRandomDish())
  }, [pickRandomDish])

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
          onClick={() => setSelectedDish((currentDish) => pickRandomDish(currentDish))}
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
        <div className="container">{t('footer.bottomText')}</div>
      </div>
    </footer>
  )
}
