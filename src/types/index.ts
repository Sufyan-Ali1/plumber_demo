export interface Business {
  name: string
  phone: string
  email: string
  address: string
  hours: string
  tagline: string
  yearsExperience: number
  happyCustomers: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Review {
  id: string
  name: string
  rating: number
  text: string
  location?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface TrustBadge {
  icon: string
  title: string
  description: string
}

export interface Advantage {
  icon: string
  title: string
  description: string
}
