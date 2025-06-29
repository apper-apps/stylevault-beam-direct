import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message, onRetry, type = 'general' }) => {
  const getErrorContent = () => {
    switch (type) {
      case 'product':
        return {
          icon: 'ShoppingBag',
          title: 'Product Not Found',
          description: 'The product you\'re looking for doesn\'t exist or has been removed.',
        }
      case 'cart':
        return {
          icon: 'ShoppingCart',
          title: 'Cart Error',
          description: 'There was an issue with your shopping cart. Please try again.',
        }
      case 'network':
        return {
          icon: 'Wifi',
          title: 'Connection Error',
          description: 'Please check your internet connection and try again.',
        }
      default:
        return {
          icon: 'AlertTriangle',
          title: 'Something went wrong',
          description: message || 'An unexpected error occurred. Please try again.',
        }
    }
  }

  const { icon, title, description } = getErrorContent()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-full p-6 mb-6">
        <ApperIcon
          name={icon}
          size={48}
          className="text-red-500"
        />
      </div>
      
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      
      <p className="text-gray-600 text-center mb-8 max-w-md">
        {description}
      </p>
      
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="btn-gradient flex items-center space-x-2"
        >
          <ApperIcon name="RefreshCw" size={20} />
          <span>Try Again</span>
        </motion.button>
      )}
    </motion.div>
  )
}

export default Error