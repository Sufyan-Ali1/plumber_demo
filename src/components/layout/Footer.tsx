import { BUSINESS, NAV_LINKS, SERVICE_AREAS } from '@/lib/constants'
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/ui/Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-500 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{BUSINESS.name}</h3>
            <p className="text-gray-300 mb-4">
              {BUSINESS.tagline}. Providing quality plumbing services to Sydney
              and surrounding areas for over {BUSINESS.yearsExperience} years.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-gray-300">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-accent-400 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-accent-400 transition-colors"
                >
                  <MailIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
