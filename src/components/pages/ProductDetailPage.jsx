import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { useProduct } from '@/hooks/useProducts'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/formatters'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { product, loading, error, refetch } = useProduct(id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addingToCart, setAddingToCart] = useState(false)

  const handleAddToCart = async () => {
    if (!product.inStock) {
      toast.error('This product is currently out of stock')
      return
    }

    setAddingToCart(true)
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500))
    
    addToCart(product, quantity)
    toast.success(`${product.title} added to cart!`)
    setAddingToCart(false)
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  if (loading) {
    return <Loading type="product-detail" />
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Error message={error} onRetry={refetch} type="product" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Error message="Product not found" type="product" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
      >
        <Link to="/" className="hover:text-purple-deep transition-colors duration-200">
          Home
        </Link>
        <ApperIcon name="ChevronRight" size={16} />
        <Link to="/products" className="hover:text-purple-deep transition-colors duration-200">
          Products
        </Link>
        <ApperIcon name="ChevronRight" size={16} />
        <span className="text-gray-900">{product.title}</span>
      </motion.nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <Badge variant="danger" size="md">Out of Stock</Badge>
            </div>
          )}
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <Badge variant="secondary" size="sm" className="mb-3">
              {product.category}
            </Badge>
            
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="text-3xl font-bold gradient-text mb-6">
              {formatPrice(product.price)}
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                >
                  <ApperIcon name="Minus" size={16} />
                </button>
                
                <span className="w-12 text-center font-semibold text-lg">
                  {quantity}
                </span>
                
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                >
                  <ApperIcon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock || addingToCart}
              loading={addingToCart}
              icon={addingToCart ? undefined : "ShoppingCart"}
              className="w-full sm:w-auto"
            >
              {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>

          {/* Product Features */}
          <div className="border-t pt-6">
            <h3 className="font-display font-bold text-lg mb-4">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Truck" size={20} className="text-purple-deep" />
                <span className="text-gray-600">Free shipping over $100</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="RotateCcw" size={20} className="text-purple-deep" />
                <span className="text-gray-600">30-day returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Shield" size={20} className="text-purple-deep" />
                <span className="text-gray-600">1-year warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Heart" size={20} className="text-purple-deep" />
                <span className="text-gray-600">Premium quality</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetailPage