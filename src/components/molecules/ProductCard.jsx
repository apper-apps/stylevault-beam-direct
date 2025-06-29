import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import Button from '@/components/atoms/Button'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/formatters'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.inStock) {
      toast.error('This product is currently out of stock')
      return
    }
    
    addToCart(product)
    toast.success(`${product.title} added to cart!`)
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
    >
      <Link to={`/product/${product.Id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="danger" size="md">Out of Stock</Badge>
            </div>
          )}
          
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" size="xs">
              {product.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-deep transition-colors duration-200">
            {product.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">
              {formatPrice(product.price)}
            </span>
            
            <Button
              size="sm"
              icon="Plus"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              Add
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard