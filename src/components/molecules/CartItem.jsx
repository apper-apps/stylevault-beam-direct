import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/formatters'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.productId)
    } else {
      updateQuantity(item.productId, newQuantity)
    }
  }

  const handleRemove = () => {
    removeFromCart(item.productId)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-200"
    >
      <img
        src={item.product.image}
        alt={item.product.title}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">
          {item.product.title}
        </h4>
        <p className="text-sm text-gray-600">{item.product.category}</p>
        <p className="text-lg font-bold gradient-text">
          {formatPrice(item.product.price)}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
        >
          <ApperIcon name="Minus" size={16} className="text-gray-600" />
        </button>
        
        <span className="w-8 text-center font-semibold">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
        >
          <ApperIcon name="Plus" size={16} className="text-gray-600" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-bold text-gray-900">
          {formatPrice(item.product.price * item.quantity)}
        </p>
        <Button
          variant="ghost"
          size="sm"
          icon="Trash2"
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-1"
        >
          Remove
        </Button>
      </div>
    </motion.div>
  )
}

export default CartItem