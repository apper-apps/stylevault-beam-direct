import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import { useCart } from '@/context/CartContext'
import { formatPrice, calculateTax, calculateShipping } from '@/utils/formatters'

const CartSummary = ({ showCheckoutButton = true }) => {
  const { items, getCartTotal } = useCart()
  
  const subtotal = getCartTotal()
  const tax = calculateTax(subtotal)
  const shipping = calculateShipping(subtotal)
  const total = subtotal + tax + shipping

  if (items.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-card p-6 sticky top-4"
    >
      <h3 className="font-display font-bold text-xl mb-6 gradient-text">
        Order Summary
      </h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.length} items)</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600 font-semibold">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
        
        {subtotal < 100 && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
            <p className="text-sm text-green-700">
              Add {formatPrice(100 - subtotal)} more for free shipping!
            </p>
          </div>
        )}
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="gradient-text">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      
      {showCheckoutButton && (
        <Link to="/checkout" className="block">
          <Button size="lg" className="w-full" icon="CreditCard">
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </motion.div>
  )
}

export default CartSummary