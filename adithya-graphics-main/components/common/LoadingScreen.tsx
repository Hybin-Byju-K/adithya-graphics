'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  duration?: number
}

export function LoadingScreen({ duration = 2 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration * 1000)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-20 h-20">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-accent border-r-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Middle rotating ring */}
            <motion.div
              className="absolute inset-2 border-2 border-transparent border-b-accent rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Inner pulsing dot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-accent font-semibold tracking-widest text-sm">
              Loading
            </p>
            <motion.p
              className="text-body text-xs mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Creating something amazing...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
