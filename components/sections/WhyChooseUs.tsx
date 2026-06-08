'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, SectionHeading } from '@/components/ui'
import { FEATURES } from '@/lib/constants'
import { HiCheckCircle } from 'react-icons/hi'

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
          subtitle="Why Choose Me"
          title="Why Work With Adithya's Graphics?"
          description="Combining strategic thinking with creative excellence to deliver results that matter"
          align="center"
          className="mb-16"
        />

        {/* Features Grid - 5 columns responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="h-full"
            >
              <div className="relative p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <HiCheckCircle className="w-8 h-8 text-accent" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-heading mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>

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

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Projects', value: '100+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Success Rate', value: '98%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300"
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
  )
}
