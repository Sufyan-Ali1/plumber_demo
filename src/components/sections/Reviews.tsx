import { REVIEWS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import ReviewCard from '@/components/ui/ReviewCard'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Here's what Sydney homeowners say about our plumbing services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
