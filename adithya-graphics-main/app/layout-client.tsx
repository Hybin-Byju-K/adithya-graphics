'use client'

import { Navbar, Footer, LoadingScreen } from '@/components/common'

export function LayoutClient() {
  return (
    <>
      <LoadingScreen duration={1.5} />
      <Navbar />
    </>
  )
}

export function LayoutFooter() {
  return <Footer />
}
