import React from 'react'
import HeroSection from '@/components/organisms/HeroSection'
import CategorySection from '@/components/organisms/CategorySection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <CategorySection
        category="Men"
        title="Men's Collection"
        description="Discover our latest men's fashion featuring contemporary styles and premium quality pieces for the modern gentleman."
      />
      
      <CategorySection
        category="Women"
        title="Women's Collection"
        description="Explore elegant and versatile pieces designed for the confident woman who values both style and comfort."
      />
      
      <CategorySection
        category="Kids"
        title="Kids Collection"
        description="Fun, comfortable, and durable clothing designed for active kids who love to play and explore."
      />
    </div>
  )
}

export default HomePage