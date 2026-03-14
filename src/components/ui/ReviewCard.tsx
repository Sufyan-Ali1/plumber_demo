import { Review } from '@/types'
import { StarIcon } from './Icons'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            filled={i < review.rating}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-primary-500">{review.name}</p>
          {review.location && (
            <p className="text-sm text-gray-500">{review.location}</p>
          )}
        </div>
      </div>
    </div>
  )
}
