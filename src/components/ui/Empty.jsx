import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ type = 'products', message, actionText, actionPath }) => {
  const navigate = useNavigate()

  const getEmptyContent = () => {
    switch (type) {
      case 'cart':
        return {
          icon: 'ShoppingCart',
          title: 'Your cart is empty',
          description: 'Looks like you haven\'t added any items to your cart yet. Start shopping to fill it up!',
          actionText: 'Start Shopping',
          actionPath: '/products',
          gradient: 'from-purple-deep to-violet-rich'
        }
      case 'products':
        return {
          icon: 'Package',
          title: 'No products found',
          description: 'We couldn\'t find any products matching your criteria. Try adjusting your filters or browse all categories.',
          actionText: 'View All Products',
          actionPath: '/products',
          gradient: 'from-pink-vibrant to-magenta-bold'
        }
      case 'category':
        return {
          icon: 'Grid3x3',
          title: 'No products in this category',
          description: 'This category is currently empty. Check out our other categories or browse all products.',
          actionText: 'Browse All Categories',
          actionPath: '/',
          gradient: 'from-violet-rich to-pink-vibrant'
        }
      default:
        return {
          icon: 'Search',
          title: 'Nothing here yet',
          description: message || 'There\'s nothing to show at the moment.',
          actionText: actionText || 'Go Back',
          actionPath: actionPath || '/',
          gradient: 'from-purple-deep to-magenta-bold'
        }
    }
  }

  const { icon, title, description, actionText: defaultActionText, actionPath: defaultActionPath, gradient } = getEmptyContent()

  const handleAction = () => {
    navigate(actionPath || defaultActionPath)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <div className={`bg-gradient-to-br ${gradient} rounded-full p-8 mb-8 shadow-lg`}>
        <ApperIcon
          name={icon}
          size={64}
          className="text-white"
        />
      </div>
      
      <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
        {description}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAction}
        className={`bg-gradient-to-r ${gradient} text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2`}
      >
        <ApperIcon name="ArrowRight" size={20} />
        <span>{actionText || defaultActionText}</span>
      </motion.button>
    </motion.div>
  )
}

export default Empty