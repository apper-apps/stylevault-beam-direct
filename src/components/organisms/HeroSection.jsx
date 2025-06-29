import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-lavender-light via-white to-pink-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="gradient-text">Style</span> Your
              <br />
              <span className="text-gray-900">Perfect Look</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover curated fashion collections that define your unique style. 
              From casual everyday wear to statement pieces that turn heads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" icon="ShoppingBag">
                  Shop Now
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" icon="Sparkles">
                New Arrivals
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-gray-600 font-medium">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10k+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4.9</div>
                <div className="text-gray-600 font-medium">Rating</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://picsum.photos/600/700?random=hero"
                alt="Fashion Hero"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-vibrant to-magenta-bold text-white px-6 py-3 rounded-full font-bold shadow-lg"
              >
                New Collection
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-deep to-violet-rich text-white px-6 py-3 rounded-full font-bold shadow-lg"
              >
                Free Shipping
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection