// Root layout, controls the overall structure of the application
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "JackNew's Blog",
    template: "%s | JackNew's Blog",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
      {
        rel: 'icon',
        url: '/favicon-192x192.png',
      },
      {
        rel: 'icon',
        url: '/favicon-512x512.png',
      },
    ],
  },
  description: 'Personal blog sharing thoughts, ideas, and reflections on technology, life, and growth.',
  openGraph: {
    title: "JackNew's Blog",
    description: 'Personal blog sharing thoughts, ideas, and reflections on technology, life, and growth.',
    url: baseUrl,
    siteName: "JackNew's Blog",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("JackNew's Blog")}`,
        width: 1200,
        height: 630,
        alt: "JackNew's Blog",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "JackNew's Blog",
    description: 'Personal blog sharing thoughts, ideas, and reflections on technology, life, and growth.',
    images: [`${baseUrl}/og?title=${encodeURIComponent("JackNew's Blog")}`],
  },
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
