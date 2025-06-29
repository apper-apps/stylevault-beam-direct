import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { formatPrice, formatDate } from '@/utils/formatters'

const OrderSuccessPage = () => {
  const [orderData, setOrderData] = useState(null)

  useEffect(() => {
    const storedOrder = localStorage.getItem('last-order')
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder))
    }
  }, [])

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-8 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
          <ApperIcon name="CheckCircle" size={48} className="text-white" />
        </div>
        
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed and is being processed.
        </p>

        {orderData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-card p-6 mb-8 text-left"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-center gradient-text">
              Order Details
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Order ID:</span>
                <span className="font-mono text-purple-deep">{orderData.id}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-semibold">Order Date:</span>
                <span>{formatDate(orderData.orderDate)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-semibold">Customer:</span>
                <span>{orderData.billingInfo.name}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{orderData.billingInfo.email}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-display font-bold text-lg mb-4">Items Ordered</h3>
              <div className="space-y-3">
                {orderData.items.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.product.title}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-semibold">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="gradient-text">
                    {formatPrice(calculateTotal(orderData.items))}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-gray-600">
            You will receive an email confirmation shortly with tracking information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" icon="ShoppingBag">
                Continue Shopping
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" size="lg" icon="Home">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default OrderSuccessPage