'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui'
import { EXPERTISE, DESIGN_SKILLS, LIFESTYLE } from '@/lib/constants'
import { HiCode } from 'react-icons/hi'

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Where Visual Strategy Meets Business Solutions"
            align="center"
            size="lg"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-heading">My Story</h2>
            <p className="text-body text-lg leading-relaxed">
              Hi, I'm <span className="text-accent font-semibold">Adithya Krishnan</span>, a
              multidisciplinary Graphic Designer based in Thrissur, Kerala. Driven by a passion
              for visual storytelling, my work bridges the gap between modern design trends
              and impactful marketing strategies.
            </p>
            <p className="text-body text-lg leading-relaxed">
              My career took off in the fast-paced world of agency life at Sukta Advertising,
              engineering everything from corporate brand identities to high-converting social
              media campaigns. Today, I run my own creative studio, Adithya's Graphics, helping
              businesses stand out across both digital and print mediums.
            </p>
            <p className="text-body text-lg leading-relaxed">
              Navigating the world as a disabled creator has given me a unique perspective on
              design—teaching me to look at accessibility, problem-solving, and visual
              communication through a completely different lens. Whether it's shaping a brand
              from scratch, editing engaging video content, or layouting print designs, the goal
              remains the same: creating purposeful design that drives results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Core Expertise"
            subtitle="What I Offer"
            align="center"
            className="mb-16"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {EXPERTISE.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="p-6 bg-background rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-heading mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Toolkit & Technologies"
            subtitle="Tools I Use"
            align="center"
            className="mb-16"
          />

          {/* Group skills by category */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Design & Vector', 'Layout & Print', 'Video Production', 'AI & Productivity'].map(
              (category) => {
                const categorySkills = DESIGN_SKILLS.filter((s) => s.category === category)
                return (
                  <motion.div key={category} variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-heading mb-6">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categorySkills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          className="p-4 bg-surface rounded-lg border border-dark-gray hover:border-accent group transition-all duration-300"
                          whileHover={{ y: -4 }}
                        >
                          <p className="font-semibold text-heading group-hover:text-accent transition-colors">
                            {skill.name}
                          </p>
                          <p className="text-body text-sm mt-2 capitalize">
                            {skill.proficiency?.replace(/_/g, ' ')}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              }
            )}
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Beyond the Screen"
            subtitle="When I'm Not Designing"
            description="What inspires my creative work"
            align="center"
            className="mb-16"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {LIFESTYLE.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-background rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 text-center"
              >
                <p className="text-body text-lg leading-relaxed">{activity}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
