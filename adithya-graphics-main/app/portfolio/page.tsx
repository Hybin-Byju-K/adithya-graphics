'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, Button } from '@/components/ui'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'
import Link from 'next/link'

// Sample portfolio data organized by category
const PORTFOLIO_ITEMS = {
  'business-card': [
    { id: '1', title: 'Modern Minimalist Card', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop' },
    { id: '2', title: 'Tech Startup Card', image: 'https://images.unsplash.com/photo-1611532736db-6f4ee8d6a0bb?w=400&h=500&fit=crop' },
    { id: '3', title: 'Creative Agency Card', image: 'https://images.unsplash.com/photo-1564208565-e5f8d79be914?w=400&h=500&fit=crop' },
  ],
  'logo-branding': [
    { id: '1', title: 'Brand Identity System', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop' },
    { id: '2', title: 'Logo Design Concepts', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop' },
    { id: '3', title: 'Visual Brand Guidelines', image: 'https://images.unsplash.com/photo-1566993537851-f6b2c4b1854f?w=400&h=500&fit=crop' },
  ],
  'menu': [
    { id: '1', title: 'Restaurant Menu Design', image: 'https://images.unsplash.com/photo-1504674900769-7d09f76cb2a7?w=400&h=500&fit=crop' },
    { id: '2', title: 'Cafe Menu Design', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=500&fit=crop' },
  ],
  'packaging': [
    { id: '1', title: 'Product Packaging', image: 'https://images.unsplash.com/photo-1585647953556-a0b3e8e6b08f?w=400&h=500&fit=crop' },
    { id: '2', title: 'Luxury Packaging', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop' },
  ],
  'poster': [
    { id: '1', title: 'Event Poster', image: 'https://images.unsplash.com/photo-1578502494516-2cb22fdf495c?w=400&h=500&fit=crop' },
    { id: '2', title: 'Concert Poster', image: 'https://images.unsplash.com/photo-1514306173714-84567e9f4e66?w=400&h=500&fit=crop' },
  ],
  'event': [
    { id: '1', title: 'Event Branding', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop' },
  ],
  'video': [
    { id: '1', title: 'Short Form Video', image: 'https://images.unsplash.com/photo-1516321318423-f06a6b1ef1c6?w=400&h=500&fit=crop' },
    { id: '2', title: 'Social Media Content', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop' },
  ],
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('logo-branding')
  const currentItems = PORTFOLIO_ITEMS[activeCategory as keyof typeof PORTFOLIO_ITEMS] || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Complete Portfolio"
            subtitle="Our Work"
            description="Discover the full range of creative projects and design solutions"
            align="center"
          />
        </div>
      </section>

      {/* Category Navigation */}
      <section className="section-padding bg-background sticky top-20 z-30 border-b border-dark-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-heading'
                    : 'bg-surface text-body hover:text-heading border border-dark-gray'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg bg-dark-gray h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-heading font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <button className="px-4 py-2 bg-accent text-heading rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-heading mb-6">
            Interested in Working Together?
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </main>
  )
}
