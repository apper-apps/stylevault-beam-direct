import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CartItem from '@/components/molecules/CartItem'
import CartSummary from '@/components/organisms/CartSummary'
import Button from '@/components/atoms/Button'
import Empty from '@/components/ui/Empty'
import { useCart } from '@/context/CartContext'

const CartPage = () => {
  const { items, clearCart } = useCart()

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          Shopping Cart
        </h1>
        
        {items.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xl text-gray-600">
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </p>
            
            <Button
              variant="outline"
              icon="Trash2"
              onClick={handleClearCart}
              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
            >
              Clear Cart
            </Button>
          </div>
        )}
      </motion.div>

      {items.length === 0 ? (
        <Empty type="cart" />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.productId} item={item} />
                ))}
              </div>
            </AnimatePresence>
            
            {/* Continue Shopping */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t"
            >
              <Link to="/products">
                <Button variant="outline" icon="ArrowLeft">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage