import type { Metadata, Viewport } from 'next'
import './globals.css'
import { WebVitals } from './web-vitals'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'YourBrand'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Build Your Online Store | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: 'Create your online store with powerful tools and features. Build fast, sell more, and grow your business with our e-commerce platform.',
  keywords: ['e-commerce', 'online store', 'store builder', 'website builder', 'sell online'],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `Build Your Online Store | ${siteName}`,
    description: 'Create your online store with powerful tools and features',
    siteName: siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Build Your Online Store | ${siteName}`,
    description: 'Create your online store with powerful tools and features',
    creator: `@${siteName}`,
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WebVitals />
      </body>
    </html>
  )
}
