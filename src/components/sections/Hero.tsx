import Image from 'next/image'
import { BUSINESS, TRUST_BADGES } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { PhoneIcon, ShieldIcon, ClockIcon, CheckIcon } from '@/components/ui/Icons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/working.png"
          alt="Plumber at work"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
            <ShieldIcon className="w-4 h-4" />
            <span>Licensed & Insured Plumbers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            24/7 Emergency Plumber in Sydney
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {BUSINESS.tagline}. Fast, reliable plumbing services when you need
            them most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              variant="primary"
              size="lg"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Now: {BUSINESS.phone}
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get Free Quote
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {TRUST_BADGES.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {badge.icon === 'shield' && <ShieldIcon className="w-5 h-5" />}
                  {badge.icon === 'clock' && <ClockIcon className="w-5 h-5" />}
                  {badge.icon === 'check' && <CheckIcon className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-white font-semibold">{badge.title}</p>
                  <p className="text-gray-300 text-sm">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
