'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiMail,
  HiPhone,

  HiArrowRight,
} from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { Button } from '@/components/ui'
import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      className="relative bg-background border-t border-dark-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent">
              Adithya's Graphics
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Crafting premium visual identities and compelling design solutions
              for modern brands.
            </p>
            <motion.div
              className="flex gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <Button href="/contact" variant="primary" size="sm">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-heading">Navigation</h4>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-body hover:text-accent transition-colors duration-300 hover:translate-x-1 transform"
                >
                  <HiArrowRight className="w-4 h-4 mr-2" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-heading">Services</h4>
            <ul className="space-y-3 text-sm text-body">
              <li className="hover:text-accent transition-colors cursor-pointer">
                Logo & Branding
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Print Design
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Digital Design
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Video Production
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-heading">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-3 text-body hover:text-accent transition-colors duration-300"
              >
                <HiMail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm break-all">{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-start gap-3 text-body hover:text-accent transition-colors duration-300"
              >
                <HiPhone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-body">
                <MdLocationOn className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-dark-gray to-transparent my-12"
          variants={itemVariants}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          variants={itemVariants}
        >
          <p className="text-body text-sm">
            © {currentYear} Adithya's Graphics. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm text-body">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex gap-4">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-dark-gray flex items-center justify-center text-accent hover:bg-accent hover:text-heading transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              f
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-dark-gray flex items-center justify-center text-accent hover:bg-accent hover:text-heading transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ig
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-dark-gray flex items-center justify-center text-accent hover:bg-accent hover:text-heading transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              in
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
