'use client'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.Hero})), { ssr: false })
const Services = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.Services})), { ssr: false })
const WhyChooseUs = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.WhyChooseUs})), { ssr: false })
const SelectedWorks = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.SelectedWorks})), { ssr: false })
const TestimonialPreview = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.TestimonialPreview})), { ssr: false })
const CTA = dynamic(() => import('@/components/sections').then(m => Promise.resolve({default: m.CTA})), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <SelectedWorks />
      <TestimonialPreview />
      <CTA />
    </>
  )
}
