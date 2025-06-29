import productsData from '@/services/mockData/products.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const productService = {
  async getAll() {
    await delay(300)
    return [...productsData]
  },

  async getById(id) {
    await delay(200)
    const product = productsData.find(p => p.Id === parseInt(id))
    if (!product) {
      throw new Error('Product not found')
    }
    return { ...product }
  },

  async getByCategory(category) {
    await delay(250)
    if (category === 'All') {
      return [...productsData]
    }
    return productsData.filter(p => p.category === category)
  },

  async getFeatured(limit = 8) {
    await delay(200)
    return productsData.slice(0, limit).map(p => ({ ...p }))
  },

  async getBestSellers(limit = 4) {
    await delay(200)
    // Simulate best sellers by taking products with higher prices
    return productsData
      .sort((a, b) => b.price - a.price)
      .slice(0, limit)
      .map(p => ({ ...p }))
  },

  async getCategories() {
    await delay(100)
    const categories = [...new Set(productsData.map(p => p.category))]
    return categories
  }
}