'use client'

import { useEffect } from 'react'

/**
 * Performance optimization component
 * Handles lazy loading, preloading, and resource hints
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical assets
    const preloadCriticalAssets = () => {
      // Add any critical assets to preload
      const criticalAssets: string[] = []
      
      criticalAssets.forEach(asset => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = asset.endsWith('.css') ? 'style' : 'script'
        link.href = asset
        document.head.appendChild(link)
      })
    }
    
    // Defer non-critical JavaScript
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]')
      scripts.forEach(script => {
        script.setAttribute('defer', '')
      })
    }
    
    // Run optimizations
    if (typeof window !== 'undefined') {
      preloadCriticalAssets()
      deferNonCriticalScripts()
      
      // Cleanup on unmount
      return () => {
        // Cleanup if needed
      }
    }
  }, [])
  
  return null
}
