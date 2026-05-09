// Product data — keys map to translations under products.list.*
export const products = [
  // SPOT-FADE Collection (dark spots / brightening)
  { id: 'sf1', icon: 'bottle',   price: 490000, stock: 20 },
  { id: 'sf2', icon: 'seedling', price: 590000, stock: 15 },
  { id: 'sf3', icon: 'beauty',   price: 890000, stock: 12 },
  { id: 'sf4', icon: 'leaf',     price: 690000, stock: 18 },
  { id: 'sf5', icon: 'citrus',   price: 490000, stock: 25 },
  // ACNE-PURE Collection (acne / oily skin)
  { id: 'ap1', icon: 'bottle',   price: 420000, stock: 20 },
  { id: 'ap2', icon: 'seedling', price: 490000, stock: 15 },
  { id: 'ap3', icon: 'beauty',   price: 750000, stock: 12 },
  { id: 'ap4', icon: 'leaf',     price: 560000, stock: 18 },
  { id: 'ap5', icon: 'bottle',   price: 380000, stock: 30 },
  // LUMI-GLOW Collection (brightening / radiance)
  { id: 'lg1', icon: 'bottle',   price: 490000, stock: 20 },
  { id: 'lg2', icon: 'seedling', price: 590000, stock: 15 },
  { id: 'lg3', icon: 'beauty',   price: 990000, stock: 10 },
  { id: 'lg4', icon: 'leaf',     price: 890000, stock: 12 },
  { id: 'lg5', icon: 'citrus',   price: 490000, stock: 25 },
]

const DEFAULT_VND_TO_USD_EXCHANGE_RATE = 25000
const parsedExchangeRate = Number(import.meta.env.VITE_VND_TO_USD_RATE)
const VND_TO_USD_EXCHANGE_RATE =
  Number.isFinite(parsedExchangeRate) && parsedExchangeRate > 0
    ? parsedExchangeRate
    : DEFAULT_VND_TO_USD_EXCHANGE_RATE

export const formatPrice = (n, language = 'vi') => {
  const normalizedLanguage = String(language || 'vi').toLowerCase()

  if (normalizedLanguage.startsWith('en')) {
    const amountInUsd = Number(n) / VND_TO_USD_EXCHANGE_RATE
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amountInUsd)
  }

  return new Intl.NumberFormat('vi-VN').format(n) + ' đ'
}

export const formatVND = (n) => formatPrice(n, 'vi')
