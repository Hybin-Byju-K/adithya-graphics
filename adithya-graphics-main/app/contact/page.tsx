'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, Button } from '@/components/ui'
import { CONTACT_INFO } from '@/lib/constants'
import { HiMail, HiPhone, HiCheckCircle } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
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
      {/* Header Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Let's Create Something Amazing"
            subtitle="Get In Touch"
            description="Have a project in mind? Let's collaborate and bring your vision to life"
            align="center"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-surface rounded-lg p-8 border border-dark-gray">
                <h3 className="text-2xl font-bold text-heading mb-6">Send a Message</h3>

                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <HiCheckCircle className="w-16 h-16 text-accent mb-4" />
                    <h4 className="text-xl font-bold text-heading mb-2">Message Sent!</h4>
                    <p className="text-body text-center">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-heading font-semibold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-dark-gray rounded-lg text-heading placeholder-light-gray focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-heading font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-dark-gray rounded-lg text-heading placeholder-light-gray focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-heading font-semibold mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-dark-gray rounded-lg text-heading placeholder-light-gray focus:border-accent focus:outline-none transition-colors"
                        placeholder="+91 95679 51234"
                      />
                    </motion.div>

                    {/* Subject */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-heading font-semibold mb-2">
                        Project Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-dark-gray rounded-lg text-heading placeholder-light-gray focus:border-accent focus:outline-none transition-colors"
                        placeholder="What's your project about?"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-heading font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-dark-gray rounded-lg text-heading placeholder-light-gray focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={() => {}}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Email Card */}
              <motion.div
                className="p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <HiMail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-heading mb-2">Email</h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-body hover:text-accent transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <HiPhone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-heading mb-2">Phone</h4>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-body hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <p className="font-bold text-heading mb-2">Quick Chat</p>
                  <p className="text-body text-sm mb-4">Message on WhatsApp</p>
                  <span className="inline-block px-4 py-2 bg-accent text-heading rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                    Open WhatsApp
                  </span>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                className="p-6 bg-surface rounded-lg border border-dark-gray hover:border-accent transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <MdLocationOn className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-heading mb-2">Location</h4>
                    <p className="text-body">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
