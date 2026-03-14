import { SERVICE_AREAS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { MapPinIcon } from '@/components/ui/Icons'

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Service Areas"
          subtitle="We proudly serve Sydney and surrounding suburbs. Fast response times across all locations."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-500 transition-colors card-hover"
            >
              <MapPinIcon className="w-5 h-5 text-accent-500" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don&apos;t see your area? <a href="#contact" className="text-accent-500 font-semibold hover:underline">Contact us</a> – we likely cover your suburb!
        </p>
      </div>
    </section>
  )
}
