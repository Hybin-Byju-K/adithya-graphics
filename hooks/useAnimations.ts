'use client'

import { useEffect, useRef, useState, RefObject } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Hook for scroll-triggered animations
export function useScrollAnimation(ref: RefObject<HTMLElement>, options: any = {}) {
  useEffect(() => {
    if (!ref.current) return

    const defaults = {
      trigger: ref.current,
      start: 'top 80%',
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    }

    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: defaults.trigger,
          start: defaults.start,
        },
        autoAlpha: 1,
        y: 0,
        duration: defaults.duration,
        ease: defaults.ease,
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [ref, options])
}

// Hook for mouse follower effect
export function useMouseFollower(ref: RefObject<HTMLElement>, options: { size?: number; speed?: number } = {}) {
  const { size = 20, speed = 0.3 } = options
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const follower = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    const animate = () => {
      if (follower.current) {
        follower.current.style.left = mouseX.current - size / 2 + 'px'
        follower.current.style.top = mouseY.current - size / 2 + 'px'
      }
      requestAnimationFrame(animate)
    }

    ref.current.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      ref.current?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref, size, speed])

  return follower
}

// Hook for parallax scroll
export function useParallax(ref: RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
      y: -200 * speed,
      ease: 'none',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [ref, speed])
}

// Hook for counting animation
export function useCountAnimation(
  ref: RefObject<HTMLElement>,
  endValue: number,
  options: { duration?: number; start?: string } = {}
) {
  const { duration = 2.5, start = 'top 80%' } = options

  useEffect(() => {
    if (!ref.current) return

    const counter = { value: 0 }

    gsap.to(counter, {
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none reset',
      },
      value: endValue,
      duration,
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.ceil(counter.value).toString()
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [ref, endValue, duration, start])
}

// Hook for typing animation
export function useTypingAnimation(
  ref: RefObject<HTMLElement>,
  text: string,
  options: { speed?: number; startDelay?: number } = {}
) {
  const { speed = 50, startDelay = 0 } = options

  useEffect(() => {
    if (!ref.current) return

    let index = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (index < text.length) {
        if (ref.current) {
          ref.current.textContent = text.substring(0, index + 1)
        }
        index++
        timeoutId = setTimeout(type, speed)
      }
    }

    timeoutId = setTimeout(type, startDelay)

    return () => clearTimeout(timeoutId)
  }, [ref, text, speed, startDelay])
}

// Hook for element in viewport
export function useInViewport(ref: RefObject<HTMLElement>, options: IntersectionObserverInit = {}) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, options])

  return isInView
}

// Hook for window size
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// Hook for scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

// Hook for debounce
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// Hook for throttle
export function useThrottle<T>(value: T, interval: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastUpdated = useRef<number>(Date.now())

  useEffect(() => {
    const now = Date.now()

    if (now >= lastUpdated.current + interval) {
      lastUpdated.current = now
      setThrottledValue(value)
    } else {
      const timeout = setTimeout(() => {
        lastUpdated.current = Date.now()
        setThrottledValue(value)
      }, interval)

      return () => clearTimeout(timeout)
    }
  }, [value, interval])

  return throttledValue
}

// Hook for lazy loading callback
export function useLazyLoad(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, callback])
}

// Hook for lock body scroll
export function useLockBodyScroll(lock: boolean = true) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lock])
}

// Hook for prefetch images
export function usePrefetchImage(src: string) {
  useEffect(() => {
    const img = new Image()
    img.src = src
  }, [src])
}
