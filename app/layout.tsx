import type { Metadata } from 'next'
import './globals.css'
import { Navbar, Footer, LoadingScreen } from '@/components/common'

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
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Adithya Krishnan',
  publisher: "Adithya's Graphics",
  robots: 'index, follow',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-background text-body antialiased">
        <LoadingScreen duration={1.5} />
        <Navbar />
        <main className="flex flex-col min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
