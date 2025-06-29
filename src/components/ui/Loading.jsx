import React from 'react'

const Loading = ({ type = 'products' }) => {
  if (type === 'product-detail') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image skeleton */}
          <div className="skeleton h-96 lg:h-[500px] rounded-xl"></div>
          
          {/* Details skeleton */}
          <div className="space-y-6">
            <div className="skeleton h-8 w-3/4 rounded"></div>
            <div className="skeleton h-6 w-1/4 rounded"></div>
            <div className="space-y-2">
              <div className="skeleton h-4 w-full rounded"></div>
              <div className="skeleton h-4 w-full rounded"></div>
              <div className="skeleton h-4 w-2/3 rounded"></div>
            </div>
            <div className="skeleton h-12 w-40 rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'hero') {
    return (
      <div className="bg-gradient-to-br from-lavender-light via-white to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="skeleton h-12 w-3/4 rounded"></div>
              <div className="skeleton h-6 w-full rounded"></div>
              <div className="skeleton h-6 w-2/3 rounded"></div>
              <div className="skeleton h-12 w-40 rounded-lg"></div>
            </div>
            <div className="skeleton h-80 rounded-xl"></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'cart') {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-card">
            <div className="skeleton h-16 w-16 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-3/4 rounded"></div>
              <div className="skeleton h-4 w-1/2 rounded"></div>
            </div>
            <div className="skeleton h-8 w-20 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  // Default products loading
  return (
    <div className="product-grid">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="skeleton h-48 rounded-t-xl"></div>
          <div className="p-4 space-y-3">
            <div className="skeleton h-5 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-1/2 rounded"></div>
            <div className="skeleton h-8 w-full rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Loading