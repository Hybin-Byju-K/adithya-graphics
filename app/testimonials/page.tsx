'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'
import { HiStar, HiQuote } from 'react-icons/hi'

export default function TestimonialsPage() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials"
            description="Real feedback from real clients who've experienced our work"
            align="center"
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="relative p-8 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group"
              >
                {/* Quote Icon - Background */}
                <motion.div
                  className="absolute top-4 right-4 text-accent opacity-10 group-hover:opacity-20"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <HiQuote className="w-16 h-16" />
                </motion.div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <HiStar className="w-5 h-5 text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-body text-base leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-dark-gray">
                  <p className="font-semibold text-heading text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-accent text-sm">Verified Client</p>
                </div>

                {/* Hover underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-accent to-accent-hover mt-6"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Happy Clients', value: '50+' },
              { label: 'Projects Completed', value: '100+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Repeat Clients', value: '75%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-background rounded-lg border border-dark-gray text-center"
              >
                <motion.h4
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-body text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
