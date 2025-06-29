import { useState, useEffect } from 'react'
import { productService } from '@/services/api/productService'

export const useProducts = (category = null) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      let data
      if (category) {
        data = await productService.getByCategory(category)
      } else {
        data = await productService.getAll()
      }
      
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [category])

  return { products, loading, error, refetch: loadProducts }
}

export const useProduct = (id) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadProduct = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await productService.getById(id)
      setProduct(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      loadProduct()
    }
  }, [id])

  return { product, loading, error, refetch: loadProduct }
}