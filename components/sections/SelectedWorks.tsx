'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, SectionHeading, Button } from '@/components/ui'
import Link from 'next/link'

// Sample portfolio items for preview
const PORTFOLIO_PREVIEW = [
  {
    id: '1',
    title: 'Modern Brand Identity',
    category: 'logo-branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'Packaging Design Series',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1585647953556-a0b3e8e6b08f?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '3',
    title: 'Digital Marketing Campaign',
    category: 'menu',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '4',
    title: 'Event Spatial Branding',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '5',
    title: 'Print Design Collection',
    category: 'poster',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '6',
    title: 'Video Content Production',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1516321318423-f06a6b1ef1c6?w=400&h=300&fit=crop',
    featured: true,
  },
]

export function SelectedWorks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeading
          subtitle="Recent Projects"
          title="Selected Works"
          description="A curated selection of our favorite projects that showcase our creative range"
          align="center"
          className="mb-16"
        />

        {/* Masonry Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PORTFOLIO_PREVIEW.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg bg-dark-gray">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <AnimatePresence>
                  {hoveredId === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-xl font-bold text-heading mb-2">
                          {item.title}
                        </h3>
                        <p className="text-accent text-sm mb-4 capitalize">
                          {item.category.replace('-', ' ')}
                        </p>
                        <Link
                          href={`/portfolio?category=${item.category}`}
                          className="inline-block text-accent hover:text-accent-hover transition-colors"
                        >
                          View Project →
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card */}
              <div className="p-4 bg-background border-b border-l border-r border-dark-gray">
                <h4 className="font-semibold text-heading text-sm line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-body text-xs capitalize mt-1">
                  {item.category.replace('-', ' ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button href="/portfolio" variant="primary" size="lg">
            View Complete Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
