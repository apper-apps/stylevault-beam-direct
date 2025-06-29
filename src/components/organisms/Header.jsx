import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartItemsCount } = useCart()
  const location = useLocation()
  const cartItemsCount = getCartItemsCount()

  const navigation = [
    { name: 'Home', href: '/', icon: 'Home' },
    { name: 'Products', href: '/products', icon: 'Package' },
    { name: 'Cart', href: '/cart', icon: 'ShoppingCart' },
  ]

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-deep to-pink-vibrant rounded-lg flex items-center justify-center">
              <ApperIcon name="ShoppingBag" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-display font-bold gradient-text">
              StyleVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-purple-deep bg-lavender-light'
                    : 'text-gray-700 hover:text-purple-deep hover:bg-lavender-light/50'
                }`}
              >
                <ApperIcon name={item.icon} size={18} />
                <span>{item.name}</span>
                {item.name === 'Cart' && cartItemsCount > 0 && (
                  <Badge variant="primary" size="xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-deep hover:bg-lavender-light/50 transition-colors duration-200"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg font-semibold transition-all duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-purple-deep bg-lavender-light'
                        : 'text-gray-700 hover:text-purple-deep hover:bg-lavender-light/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <ApperIcon name={item.icon} size={20} />
                      <span>{item.name}</span>
                    </div>
                    {item.name === 'Cart' && cartItemsCount > 0 && (
                      <Badge variant="primary" size="xs">
                        {cartItemsCount}
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header