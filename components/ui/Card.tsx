'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  children?: React.ReactNode
  image?: string
  title?: string
  description?: string
  variant?: 'default' | 'elevated' | 'bordered' | 'service'
  hoverable?: boolean
  tilt?: boolean
  className?: string
  onClick?: () => void
}

export function Card({
  children,
  image,
  title,
  description,
  variant = 'default',
  hoverable = true,
  tilt = false,
  className = '',
  onClick,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y - rect.height / 2) / rect.height) * 20
    const rotateY = ((x - rect.width / 2) / rect.width) * -20

    setTiltRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTiltRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  // Base classes
  const baseClasses = 'relative rounded-lg transition-all duration-300 overflow-hidden'

  // Variant classes
  const variantClasses = {
    default: 'bg-surface border border-dark-gray hover:border-accent',
    elevated:
      'bg-surface shadow-lg hover:shadow-xl border border-dark-gray/50',
    bordered: 'border-2 border-accent bg-background hover:bg-surface',
    service: 'bg-surface border border-dark-gray hover:border-accent-hover group',
  }

  const containerClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${hoverable ? 'hover:shadow-glow cursor-pointer' : ''}
    ${className}
  `

  return (
    <motion.div
      ref={cardRef}
      className={containerClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
      whileHover={hoverable ? { y: -8 } : {}}
      style={{
        rotateX: tilt ? tiltRotation.x : 0,
        rotateY: tilt ? tiltRotation.y : 0,
        transformPerspective: '1000px',
      }}
    >
      {/* Image section */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-dark-gray">
          <Image
            src={image}
            alt={title || 'Card image'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay */}
          {variant === 'service' && (
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          )}
        </div>
      )}

      {/* Content section */}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-heading mb-3 line-clamp-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-body text-sm leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>
        )}

        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Hover indicator line */}
      {hoverable && variant !== 'service' && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-hover"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}
