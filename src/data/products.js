// Product data — keys map to translations under products.list.*
export const products = [
  { id: 'p1', icon: 'bottle', price: 565000, stock: 8 },
  { id: 'p2', icon: 'coffee', price: 185000, stock: 25 },
  { id: 'p3', icon: 'beauty', price: 145000, stock: 50 },
  { id: 'p4', icon: 'seedling', price: 215000, stock: 18 },
  { id: 'p5', icon: 'citrus', price: 235000, stock: 12 },
  { id: 'p6', icon: 'leaf', price: 295000, stock: 7 },
]

export const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN').format(n) + ' đ'
