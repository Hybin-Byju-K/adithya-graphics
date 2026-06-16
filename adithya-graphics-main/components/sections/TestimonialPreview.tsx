'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, SectionHeading, Button } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'
import { HiStar } from 'react-icons/hi'
import { MdFormatQuote } from 'react-icons/md'
import Link from 'next/link'

export function TestimonialPreview() {
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
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeading
          subtitle="Client Feedback"
          title="What Clients Say"
          description="Trusted by amazing teams and individual creators"
          align="center"
          className="mb-16"
        />

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <div className="relative p-8 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 h-full flex flex-col group">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-accent opacity-20 group-hover:opacity-40"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <MdFormatQuote className="w-8 h-8" />
                </motion.div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
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
                <p className="text-body text-sm leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-dark-gray">
                  <p className="font-semibold text-heading text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-body text-xs">Client</p>
                </div>

                {/* Hover underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-accent to-accent-hover mt-4"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Testimonials Link */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
          >
            Read all testimonials
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
