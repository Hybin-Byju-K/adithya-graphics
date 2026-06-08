'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { Button } from '@/components/ui'
import { HiChevronDown } from 'react-icons/hi'

export function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animated headline sequence with GSAP
    const timeline = gsap.timeline()

    const headlines = [
      'Ideas that Speak.',
      'Design that Connect.',
      'We design BRANDS that leave a mark.',
    ]

    headlines.forEach((headline, index) => {
      timeline.to(
        headlineRef.current,
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        index * 2.5
      )

      if (index < headlines.length - 1) {
        // Change text
        timeline.add(() => {
          if (headlineRef.current) {
            headlineRef.current.textContent = headlines[index + 1]
          }
        }, index * 2.5 + 0.8)

        // Fade out
        timeline.to(
          headlineRef.current,
          {
            duration: 0.6,
            opacity: 0,
            y: 20,
            ease: 'power2.in',
          },
          index * 2.5 + 2
        )
      }
    })
  }, [])

  // Floating particles animation
  useEffect(() => {
    if (!particlesRef.current) return

    const particles = particlesRef.current.querySelectorAll('.particle')
    particles.forEach((particle) => {
      const randomDuration = 3 + Math.random() * 2
      const randomDelay = Math.random() * 1
      const randomX = -50 + Math.random() * 100
      const randomY = -50 + Math.random() * 100

      gsap.to(particle, {
        x: randomX,
        y: randomY,
        opacity: 0,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        repeatDelay: 0.5,
        ease: 'power1.inOut',
      })
    })
  }, [])

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
    },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 bg-accent rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      {/* Logo - Top Left */}
      <motion.div
        className="absolute top-20 left-4 md:left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
          <span className="text-heading font-bold text-2xl">AG</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          {/* Animated Headline */}
          <motion.div
            ref={headlineRef}
            className="text-5xl md:text-7xl font-bold text-heading leading-tight"
            initial={{ opacity: 0, y: 30 }}
          >
            Ideas that Speak.
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl text-body/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming visions into compelling visual narratives that drive
            engagement and results
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button href="/portfolio" variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Let's Work Together
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={scrollIndicatorVariants}
        animate="animate"
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-body text-sm">Scroll to explore</span>
          <HiChevronDown className="w-6 h-6 text-accent" />
        </div>
      </motion.div>

      {/* Parallax Background Movement */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle, #e51a24 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  )
}
