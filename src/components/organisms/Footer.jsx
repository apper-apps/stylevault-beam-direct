import React from 'react'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Men', href: '/products?category=Men' },
        { name: 'Women', href: '/products?category=Women' },
        { name: 'Kids', href: '/products?category=Kids' },
        { name: 'All Products', href: '/products' },
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Size Guide', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Newsletter', href: '#' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-deep to-pink-vibrant rounded-lg flex items-center justify-center">
                <ApperIcon name="ShoppingBag" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                StyleVault
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Your premium destination for fashion and style. Discover curated collections that define your unique look.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <ApperIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display font-bold text-xl mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new arrivals and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-deep"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-deep to-pink-vibrant rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} StyleVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer