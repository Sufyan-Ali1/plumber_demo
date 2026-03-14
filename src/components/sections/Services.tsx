import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Plumbing Services"
          subtitle="From emergency repairs to complete installations, we handle all your plumbing needs with expertise and care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
