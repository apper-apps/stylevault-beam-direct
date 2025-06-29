import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-purple-deep to-violet-rich text-white shadow-md hover:shadow-lg'
      case 'secondary':
        return 'border-2 border-purple-deep text-purple-deep hover:bg-gradient-to-r hover:from-purple-deep hover:to-violet-rich hover:text-white'
      case 'outline':
        return 'border border-gray-300 text-gray-700 hover:border-purple-deep hover:text-purple-deep'
      case 'ghost':
        return 'text-purple-deep hover:bg-lavender-light'
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg'
      default:
        return 'bg-gradient-to-r from-purple-deep to-violet-rich text-white shadow-md hover:shadow-lg'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-purple-deep focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <ApperIcon name="Loader2" size={20} className="animate-spin mr-2" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <ApperIcon name={icon} size={20} className="mr-2" />
      )}
      
      {children}
      
      {!loading && icon && iconPosition === 'right' && (
        <ApperIcon name={icon} size={20} className="ml-2" />
      )}
    </motion.button>
  )
}

export default Button