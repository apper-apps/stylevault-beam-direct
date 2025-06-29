import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGrid from '@/components/organisms/ProductGrid'
import CategoryFilter from '@/components/molecules/CategoryFilter'
import SearchBar from '@/components/molecules/SearchBar'
import { productService } from '@/services/api/productService'

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [searchTerm, setSearchTerm] = useState('')

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const [productsData, categoriesData] = await Promise.all([
        productService.getAll(),
        productService.getCategories()
      ])
      
      setProducts(productsData)
      setCategories(categoriesData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategory, searchTerm])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          All Products
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover our complete collection of fashion and style
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <SearchBar onSearch={handleSearch} />
          
          <div className="text-gray-600">
            {loading ? (
              <div className="skeleton h-5 w-32"></div>
            ) : (
              `${filteredProducts.length} products found`
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          {loading ? (
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="skeleton h-6 w-24 mb-4"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="skeleton h-8 w-full"></div>
                ))}
              </div>
            </div>
          ) : (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          )}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3"
        >
          <ProductGrid
            products={filteredProducts}
            loading={loading}
            error={error}
            onRetry={loadData}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ProductsPage