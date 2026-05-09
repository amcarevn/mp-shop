// Product data — keys map to translations under products.list.*
export const products = [
  { id: 'p1', emoji: '🧴', price: 565000, stock: 8 },
  { id: 'p2', emoji: '☕', price: 185000, stock: 25 },
  { id: 'p3', emoji: '💄', price: 145000, stock: 50 },
  { id: 'p4', emoji: '🥥', price: 215000, stock: 18 },
  { id: 'p5', emoji: '🍊', price: 235000, stock: 12 },
  { id: 'p6', emoji: '🌿', price: 295000, stock: 7 },
]

export const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN').format(n) + ' đ'
