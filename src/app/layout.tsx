import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BUSINESS } from '@/lib/constants'
import { Navbar, Footer } from '@/components/layout'
import { FloatingCall, BackToTop } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: `${BUSINESS.name} | 24/7 Emergency Plumber in Sydney`,
  description: `${BUSINESS.name} - Your trusted local plumber in Sydney. 24/7 emergency plumbing services, drain cleaning, leak detection, hot water repairs & more. Licensed & insured. Call ${BUSINESS.phone}`,
  keywords: 'plumber sydney, emergency plumber, 24/7 plumber, drain cleaning sydney, leak detection, hot water repair, bathroom plumbing, licensed plumber',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: `${BUSINESS.name} | 24/7 Emergency Plumber in Sydney`,
    description: `Your trusted local plumber in Sydney. 24/7 emergency services, licensed & insured professionals. Call ${BUSINESS.phone}`,
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Local Business Schema Markup
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    postalCode: '2000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8688,
    longitude: 151.2093,
  },
  url: 'https://sydneyproplumbing.com.au',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  image: 'https://sydneyproplumbing.com.au/og-image.jpg',
  sameAs: [
    'https://facebook.com/sydneyproplumbing',
    'https://instagram.com/sydneyproplumbing',
  ],
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'City', name: 'Parramatta' },
    { '@type': 'City', name: 'Blacktown' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Penrith' },
    { '@type': 'City', name: 'Bankstown' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-full`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <BackToTop />
      </body>
    </html>
  )
}
