'use client'

import { useState, useEffect } from 'react'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'
import { PhoneIcon, MenuIcon, XIcon } from '@/components/ui/Icons'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary-500' : 'text-white'
            }`}
          >
            {BUSINESS.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              className={`flex items-center gap-2 font-semibold transition-colors ${
                isScrolled ? 'text-primary-500' : 'text-white'
              }`}
            >
              <PhoneIcon className="w-5 h-5" />
              <span>{BUSINESS.phone}</span>
            </a>
            <Button
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              variant="primary"
              size="sm"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary-500' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-700 font-medium hover:text-accent-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-primary-500 font-semibold"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>{BUSINESS.phone}</span>
              </a>
              <Button
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                variant="primary"
                fullWidth
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
