import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LayoutClient, LayoutFooter } from './layout-client'

export const metadata: Metadata = {
  title: "Adithya's Graphics - Premium Graphic Design Studio",
  description:
    'Premium graphic design services including branding, print design, packaging, and video production. Crafting visual identities that drive results.',

  generator: 'Next.js',
  authors: [{ name: 'Adithya Krishnan' }],

  keywords: [
    'graphic design',
    'branding',
    'logo design',
    'print design',
    'packaging design',
    'video production',
    'Kerala',
  ],

  creator: 'Adithya Krishnan',
  publisher: "Adithya's Graphics",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adithyasgraphics.com',
    title: "Adithya's Graphics - Premium Graphic Design Studio",
    description:
      'Premium graphic design services including branding, print design, packaging, and video production.',
    images: [
      {
        url: 'https://adithyasgraphics.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Adithya's Graphics",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Adithya's Graphics - Premium Graphic Design Studio",
    description:
      'Premium graphic design services including branding, print design, packaging, and video production.',
    images: ['https://adithyasgraphics.com/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutClient />
        {children}
        <LayoutFooter />
      </body>
    </html>
  )
}