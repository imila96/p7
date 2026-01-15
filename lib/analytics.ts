// Analytics utilities - configure based on your analytics provider

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * Track page views
 */
export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID || !window.gtag) return
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

/**
 * Track custom events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}): void => {
  if (!GA_TRACKING_ID || !window.gtag) return
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
