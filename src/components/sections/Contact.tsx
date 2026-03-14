'use client'

import { useState, FormEvent } from 'react'
import { BUSINESS, CONTACT_INFO } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '@/components/ui/Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Static form - just show success message
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <SectionHeading
          title={CONTACT_INFO.title}
          subtitle={CONTACT_INFO.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              Request a Free Quote
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600\" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Thank You!
                </h4>
                <p className="text-green-700">
                  We&apos;ve received your request and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe your plumbing issue or request..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Get Free Quote
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <p className="text-lg font-semibold text-primary-500">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Us</p>
                    <p className="text-lg font-semibold text-primary-500">
                      {BUSINESS.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Visit Us</p>
                    <p className="text-lg font-semibold text-primary-500">
                      {BUSINESS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Business Hours</p>
                    <p className="text-lg font-semibold text-primary-500">
                      {BUSINESS.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={CONTACT_INFO.mapPlaceholder}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
