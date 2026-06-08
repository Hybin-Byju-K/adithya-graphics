'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-heading leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Transform Your Brand?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-body max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's work together to create visual identities that resonate with your
            audience and drive real results for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" fullWidth>
                Start Your Project
              </Button>
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              View Portfolio <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-sm text-body/70 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Available for freelance projects, collaboration, and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
