'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui'
import { PROMISES } from '@/lib/constants'
import { HiCheckCircle } from 'react-icons/hi'

export default function PromisesPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Promises to You"
            subtitle="What You Can Expect"
            description="We stand by these core commitments in everything we do"
            align="center"
          />
        </div>
      </section>

      {/* Promises Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {PROMISES.map((promise, index) => (
              <motion.div
                key={promise.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Border left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-hover" />

                <div className="pl-8 md:pl-12">
                  {/* Number Badge */}
                  <motion.div
                    className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-heading font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-heading mb-4 leading-tight">
                        {promise.title}
                      </h3>
                      <p className="text-body text-lg leading-relaxed">
                        {promise.content}
                      </p>
                    </div>

                    {/* Icon Container */}
                    <motion.div
                      className="hidden md:flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Background circle */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-surface border-2 border-accent opacity-50"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                        {/* Icon */}
                        <HiCheckCircle className="w-16 h-16 text-accent relative z-10" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Divider */}
                {index < PROMISES.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-dark-gray via-dark-gray to-transparent mt-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Work With Confidence
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              We're not just a design studio—we're your creative partners committed to your
              success. Every project we take on is treated with the same level of care,
              professionalism, and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
