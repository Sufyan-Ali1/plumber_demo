'use client'

import { BUSINESS } from '@/lib/constants'
import { PhoneIcon } from './Icons'

export default function FloatingCall() {
  return (
    <a
      href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-accent-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-accent-600 transition-all active:scale-95"
      aria-label="Call now"
    >
      <PhoneIcon className="w-5 h-5" />
      <span className="font-semibold">Call Now</span>
    </a>
  )
}
