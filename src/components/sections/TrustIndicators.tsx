import { TRUST_INDICATORS } from '@/lib/constants'
import { getIcon } from '@/components/ui/Icons'

export default function TrustIndicators() {
  return (
    <section id="trust" className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_INDICATORS.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 card-hover"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white mb-4">
                {getIcon(indicator.icon, 'w-8 h-8')}
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-2">
                {indicator.title}
              </h3>
              <p className="text-gray-600 text-sm">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
