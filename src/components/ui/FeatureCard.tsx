import { getIcon } from './Icons'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  variant?: 'default' | 'compact'
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
          {getIcon(icon, 'w-6 h-6')}
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md card-hover text-center border border-gray-100">
      <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-500">
        {getIcon(icon, 'w-8 h-8')}
      </div>
      <h3 className="text-xl font-semibold text-primary-500 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
