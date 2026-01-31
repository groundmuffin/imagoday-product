'use client'

import { useState, useEffect, useRef, type RefObject } from 'react'

interface UseScrollAnimationOptions {
  /** Percentage of element visible before triggering (0-1). Default: 0.1 */
  threshold?: number
  /** Margin around the root. Default: '0px' */
  rootMargin?: string
  /** Only trigger once. Default: true */
  triggerOnce?: boolean
}

interface UseScrollAnimationReturn<T extends HTMLElement> {
  ref: RefObject<T | null>
  isVisible: boolean
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
 * return (
 *   <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

/**
 * Generates staggered animation delay classes for child elements.
 * Use with scroll animations for a cascading effect.
 *
 * @param index - The index of the child element
 * @param baseDelay - Base delay in ms. Default: 100
 * @returns CSS animation delay style object
 */
export function getStaggeredDelay(index: number, baseDelay: number = 100): React.CSSProperties {
  return { animationDelay: `${index * baseDelay}ms` }
}
