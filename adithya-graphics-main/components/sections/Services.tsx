'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, SectionHeading } from '@/components/ui'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export function Services() {
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
          subtitle="What I Do"
          title="Premium Design Services"
          description="Comprehensive creative solutions spanning digital, print, branding, and video production"
          align="center"
          className="mb-16"
        />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/portfolio?category=${service.id}`}>
                <Card
                  variant="service"
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  className="h-full flex flex-col cursor-pointer"
                >
                  <motion.div
                    className="mt-auto flex items-center text-accent font-semibold"
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore <HiArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
          >
            View all services <HiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
