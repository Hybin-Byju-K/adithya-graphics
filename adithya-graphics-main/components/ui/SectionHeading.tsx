'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useAnimations'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  size = 'lg',
  className = '',
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollAnimation(containerRef)

  // Size variants
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  }

  const subtitleSizes = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
  }

  // Text alignment
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      ref={containerRef}
      className={`space-y-2 md:space-y-4 ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={`text-accent font-semibold tracking-widest uppercase ${subtitleSizes[size]}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title with gradient */}
      <motion.h2
        className={`${titleSizes[size]} font-bold text-heading leading-tight`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {title.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          className="text-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}

      {/* Accent line */}
      {align === 'center' && (
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-accent to-accent-hover mx-auto mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      )}
    </motion.div>
  )
}
