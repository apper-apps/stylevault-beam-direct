import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Input = ({
  label,
  error,
  icon,
  type = 'text',
  className = '',
  required = false,
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-3 rounded-lg border-2 border-gray-200
    focus:border-purple-deep focus:ring-2 focus:ring-purple-deep focus:ring-opacity-20
    transition-all duration-200 outline-none
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    ${icon ? 'pl-12' : ''}
    ${className}
  `

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <ApperIcon name={icon} size={20} className="text-gray-400" />
          </div>
        )}
        
        <input
          type={type}
          className={inputClasses}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <ApperIcon name="AlertCircle" size={16} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  )
}

export default Input