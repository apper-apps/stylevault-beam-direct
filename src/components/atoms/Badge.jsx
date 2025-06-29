import React from 'react'

const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-purple-deep to-violet-rich text-white'
      case 'secondary':
        return 'bg-gradient-to-r from-pink-vibrant to-magenta-bold text-white'
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white'
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white'
      case 'outline':
        return 'border border-purple-deep text-purple-deep bg-white'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'px-2 py-1 text-xs'
      case 'sm':
        return 'px-3 py-1 text-sm'
      case 'md':
        return 'px-4 py-2 text-base'
      default:
        return 'px-3 py-1 text-sm'
    }
  }

  return (
    <span className={`
      inline-flex items-center justify-center font-medium rounded-full
      ${getVariantClasses()} ${getSizeClasses()} ${className}
    `}>
      {children}
    </span>
  )
}

export default Badge