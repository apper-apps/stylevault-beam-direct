import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/molecules/ProductCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'

const ProductGrid = ({ products, loading, error, onRetry }) => {
  if (loading) {
    return <Loading type="products" />
  }

  if (error) {
    return <Error message={error} onRetry={onRetry} />
  }

  if (products.length === 0) {
    return <Empty type="products" />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="product-grid"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.Id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProductGrid