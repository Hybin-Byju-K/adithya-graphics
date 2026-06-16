'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  isExternal?: boolean
  fullWidth?: boolean
  magnetic?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  isExternal = false,
  fullWidth = false,
  magnetic = false,
  icon,
  iconPosition = 'left',
  type = 'button',
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Base styles
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg'

  // Size variants
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Color variants
  const variantClasses = {
    primary: 'bg-accent text-heading hover:bg-accent-hover shadow-lg hover:shadow-glow disabled:bg-gray-600',
    secondary: 'bg-surface text-heading border border-accent hover:border-accent-hover hover:bg-accent hover:text-surface',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-heading',
    ghost: 'text-accent hover:text-accent-hover hover:bg-surface/50',
  }

  const containerClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `

  const content = (
    <motion.span
      className={`flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.span>
  )

  // Magnetic effect container
  if (magnetic && !href) {
    return (
      <motion.button
        className={containerClasses}
        onClick={onClick}
        disabled={disabled}
        type={type}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!disabled ? { scale: 1.1 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
      >
        {content}
      </motion.button>
    )
  }

  // Link button
  if (href) {
    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}

    return (
      <Link href={href} {...linkProps}>
        <motion.span
          className={containerClasses}
          whileHover={!disabled ? { scale: 1.05 } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
        >
          {content}
        </motion.span>
      </Link>
    )
  }

  // Regular button
  return (
    <motion.button
      className={containerClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {content}
    </motion.button>
  )
}
