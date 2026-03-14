import { ABOUT_CONTENT, BUSINESS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { CheckIcon } from '@/components/ui/Icons'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&q=80"
                alt="Professional plumbing team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">{BUSINESS.yearsExperience}+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              title={ABOUT_CONTENT.title}
              centered={false}
            />

            <div className="prose prose-lg text-gray-600 mb-8">
              {ABOUT_CONTENT.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values List */}
            <ul className="space-y-3 mb-8">
              {ABOUT_CONTENT.values.map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-accent-600" />
                  </div>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>

            <Button href="#contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
