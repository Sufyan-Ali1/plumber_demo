import { Service } from '@/types'
import { getIcon } from './Icons'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md card-hover border border-gray-100">
      <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-500">
        {getIcon(service.icon, 'w-7 h-7')}
      </div>
      <h3 className="text-xl font-semibold text-primary-500 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}
