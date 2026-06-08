'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  }

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-dark-gray shadow-lg'
          : 'bg-background'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <motion.div
              className="text-2xl font-bold text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AG
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm ${
                      isActive
                        ? 'text-accent bg-surface/50'
                        : 'text-body hover:text-heading'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button href="/" variant="primary" size="sm">
              Let's Work Together
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex-shrink-0 z-10 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-heading" />
            ) : (
              <HiMenu className="w-6 h-6 text-heading" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden bg-surface/50 backdrop-blur-sm border-t border-dark-gray"
              variants={navVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_LINKS.map((link, index) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      variants={menuItemVariants}
                      transition={{ delay: index * 0.05 }}
                      custom={index}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                          isActive
                            ? 'bg-accent text-heading'
                            : 'text-body hover:text-heading hover:bg-surface'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA */}
                <motion.div
                  variants={menuItemVariants}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="pt-4 border-t border-dark-gray"
                >
                  <Button href="/contact" variant="primary" size="md" fullWidth>
                    Let's Work Together
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
