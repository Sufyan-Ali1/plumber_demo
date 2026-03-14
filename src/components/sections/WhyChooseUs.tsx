import { ADVANTAGES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import FeatureCard from '@/components/ui/FeatureCard'

export default function WhyChooseUs() {
  return (
    <section className="bg-primary-500 section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We're committed to providing the best plumbing service in Sydney. Here's what sets us apart."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((advantage, index) => (
            <FeatureCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
