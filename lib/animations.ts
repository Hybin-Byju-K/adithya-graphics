import gsap from 'gsap'
import { RefObject } from 'react'

// GSAP Animation Utilities
export const createTextRevealTimeline = () => {
  const timeline = gsap.timeline()
  return timeline
}

export const animateTextReveal = (
  element: string | Element,
  options: {
    duration?: number
    delay?: number
    stagger?: number
    ease?: string
  } = {}
) => {
  const { duration = 0.6, delay = 0, stagger = 0.05, ease = 'power2.out' } = options

  gsap.to(element, {
    duration,
    delay,
    opacity: 1,
    y: 0,
    stagger,
    ease,
  })
}

export const animateSlideIn = (
  element: string | Element,
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  options: {
    duration?: number
    delay?: number
    ease?: string
  } = {}
) => {
  const { duration = 0.6, delay = 0, ease = 'power2.out' } = options

  let fromVars: any = { opacity: 0 }
  switch (direction) {
    case 'left':
      fromVars.x = -60
      break
    case 'right':
      fromVars.x = 60
      break
    case 'up':
      fromVars.y = 60
      break
    case 'down':
      fromVars.y = -60
      break
  }

  gsap.fromTo(
    element,
    fromVars,
    {
      duration,
      delay,
      opacity: 1,
      x: 0,
      y: 0,
      ease,
    }
  )
}

export const createParallaxEffect = (
  element: RefObject<HTMLElement>,
  speed: number = 0.5
) => {
  if (!element.current) return

  gsap.to(element.current, {
    scrollTrigger: {
      trigger: element.current,
      start: 'top center',
      markers: false,
    },
    y: window.innerHeight * speed,
    ease: 'none',
  })
}

export const createCounterAnimation = (
  element: string | Element,
  endValue: number,
  options: {
    duration?: number
    delay?: number
  } = {}
) => {
  const { duration = 2, delay = 0 } = options

  const counter = { value: 0 }
  gsap.to(counter, {
    value: endValue,
    duration,
    delay,
    onUpdate: function () {
      ;(element as HTMLElement).textContent = Math.ceil(counter.value).toString()
    },
  })
}

// Framer Motion Variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export const slideInVariants = (direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  let initial: any = { opacity: 0 }
  switch (direction) {
    case 'left':
      initial.x = -60
      break
    case 'right':
      initial.x = 60
      break
    case 'up':
      initial.y = 60
      break
    case 'down':
      initial.y = -60
      break
  }

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0 },
  }
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Text animations
export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: 'easeOut',
    },
  }),
}

// Button hover variants
export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

// Page transition variants
export const pageTransitionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
}

// Marquee animation
export const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Floating animation
export const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Glow effect
export const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(229, 26, 36, 0.3)',
      '0 0 40px rgba(229, 26, 36, 0.5)',
      '0 0 20px rgba(229, 26, 36, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Rotate animation
export const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Utility function for staggered children animation
export function getStaggerDelay(index: number, baseDelay: number = 0.1): any {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * baseDelay,
      },
    },
  }
}

// Utility for creating custom scroll trigger animations
export function createScrollTriggerAnimation(
  element: RefObject<HTMLElement>,
  options: {
    toggleClass?: string
    callback?: () => void
    once?: boolean
  } = {}
) {
  if (!element.current) return

  gsap.set(element.current, { autoAlpha: 0, y: 50 })

  gsap.to(element.current, {
    scrollTrigger: {
      trigger: element.current,
      start: 'top 80%',
      toggleActions: options.once
        ? 'play none none none'
        : 'play pause resume pause',
      onEnter: options.callback,
    },
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
}

// Magnetic button effect helper (Framer Motion)
export const getMagneticStyle = (mouseX: number, mouseY: number, elementX: number, elementY: number, strength: number = 20) => {
  const diffX = mouseX - (elementX + strength / 2)
  const diffY = mouseY - (elementY + strength / 2)

  return {
    x: diffX * 0.1,
    y: diffY * 0.1,
  }
}
