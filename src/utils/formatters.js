export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export const generateOrderId = () => {
  return `SV${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`
}

export const calculateTax = (subtotal, taxRate = 0.08) => {
  return subtotal * taxRate
}

export const calculateShipping = (subtotal, freeShippingThreshold = 100) => {
  return subtotal >= freeShippingThreshold ? 0 : 9.99
}