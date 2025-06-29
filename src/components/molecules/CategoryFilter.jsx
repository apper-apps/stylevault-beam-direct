import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const allCategories = ['All', ...categories]

  return (
    <div className="bg-white rounded-xl shadow-card p-6 sticky top-4">
      <h3 className="font-display font-bold text-xl mb-4 gradient-text">
        Categories
      </h3>
      
      <div className="space-y-2">
        {allCategories.map((category) => (
          <motion.div key={category} whileHover={{ x: 4 }}>
            <Button
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="w-full justify-start text-left"
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  layoutId="active-category"
                  className="ml-auto w-2 h-2 bg-white rounded-full"
                />
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter