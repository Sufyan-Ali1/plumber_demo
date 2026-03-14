import { Business, Service, Review, NavLink, TrustBadge, Advantage } from '@/types'

// ============================================
// BUSINESS INFORMATION
// Edit these values to customize for your client
// ============================================

export const BUSINESS: Business = {
  name: 'Sydney Pro Plumbing',
  phone: '1300 123 456',
  email: 'info@sydneyproplumbing.com.au',
  address: '123 Main Street, Sydney NSW 2000',
  hours: '24/7 Emergency Service',
  tagline: 'Your Trusted Local Plumber',
  yearsExperience: 15,
  happyCustomers: '500+',
}

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

// ============================================
// TRUST BADGES (Hero Section)
// ============================================

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: 'shield',
    title: 'Licensed & Insured',
    description: 'Fully licensed professionals',
  },
  {
    icon: 'clock',
    title: '24/7 Service',
    description: 'Always available',
  },
  {
    icon: 'check',
    title: 'Guaranteed Work',
    description: 'Quality assured',
  },
]

// ============================================
// TRUST INDICATORS SECTION
// ============================================

export const TRUST_INDICATORS: TrustBadge[] = [
  {
    icon: 'shield',
    title: 'Licensed & Insured',
    description: 'Fully certified plumbing professionals with comprehensive insurance coverage',
  },
  {
    icon: 'calendar',
    title: '15+ Years Experience',
    description: 'Over a decade of trusted plumbing service in Sydney',
  },
  {
    icon: 'clock',
    title: '24/7 Emergency Service',
    description: 'Round-the-clock availability for urgent plumbing issues',
  },
  {
    icon: 'users',
    title: '500+ Happy Customers',
    description: 'Hundreds of satisfied homeowners and businesses',
  },
]

// ============================================
// SERVICES
// ============================================

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: 'Fast response for burst pipes, major leaks, and urgent plumbing emergencies. Available 24/7.',
    icon: 'alert',
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning and unblocking services using the latest equipment.',
    icon: 'drain',
  },
  {
    id: 'leak',
    title: 'Leak Detection & Repair',
    description: 'Advanced leak detection technology to find and fix hidden leaks quickly.',
    icon: 'droplet',
  },
  {
    id: 'heater',
    title: 'Water Heater Repair',
    description: 'Expert repair and installation of all types of hot water systems.',
    icon: 'flame',
  },
  {
    id: 'pipe',
    title: 'Pipe Installation',
    description: 'Quality pipe installation, replacement, and relining services.',
    icon: 'pipe',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Plumbing',
    description: 'Complete bathroom plumbing services including renovations and repairs.',
    icon: 'bath',
  },
]

// ============================================
// WHY CHOOSE US
// ============================================

export const ADVANTAGES: Advantage[] = [
  {
    icon: 'zap',
    title: 'Fast Response Time',
    description: 'We arrive within 60 minutes for emergency calls in our service areas.',
  },
  {
    icon: 'dollar',
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. Know the cost before we start.',
  },
  {
    icon: 'award',
    title: 'Certified Plumbers',
    description: 'All our plumbers are fully licensed, trained, and background checked.',
  },
  {
    icon: 'thumbsup',
    title: 'Satisfaction Guarantee',
    description: "Not happy with our work? We'll make it right or your money back.",
  },
]

// ============================================
// CUSTOMER REVIEWS
// ============================================

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'Excellent service! They fixed our burst pipe within an hour of calling. Very professional and clean work.',
    location: 'Parramatta',
  },
  {
    id: '2',
    name: 'James L.',
    rating: 5,
    text: 'Best plumber in Sydney. Fair pricing, on time, and did a fantastic job installing our new hot water system.',
    location: 'Blacktown',
  },
  {
    id: '3',
    name: 'Michelle K.',
    rating: 5,
    text: 'Called them for an emergency at 11pm and they were here in 45 minutes. Saved our home from flooding!',
    location: 'Sydney CBD',
  },
  {
    id: '4',
    name: 'David W.',
    rating: 5,
    text: 'Professional, punctual, and reasonably priced. Highly recommend for any plumbing needs.',
    location: 'Liverpool',
  },
  {
    id: '5',
    name: 'Lisa T.',
    rating: 5,
    text: 'They renovated our entire bathroom plumbing. Quality work and great communication throughout.',
    location: 'Penrith',
  },
  {
    id: '6',
    name: 'Robert H.',
    rating: 5,
    text: 'Fixed a leak that two other plumbers couldn\'t find. True experts at what they do.',
    location: 'Bankstown',
  },
]

// ============================================
// SERVICE AREAS
// ============================================

export const SERVICE_AREAS: string[] = [
  'Sydney',
  'Parramatta',
  'Blacktown',
  'Liverpool',
  'Penrith',
  'Bankstown',
]

// ============================================
// ABOUT SECTION CONTENT
// ============================================

export const ABOUT_CONTENT = {
  title: 'About Sydney Pro Plumbing',
  description: `With over 15 years of experience serving Sydney and surrounding areas, Sydney Pro Plumbing has built a reputation for reliable, high-quality plumbing services.

Our team of licensed plumbers is committed to providing fast, efficient solutions for all your plumbing needs. From emergency repairs to complete bathroom renovations, we handle every job with professionalism and care.

We believe in transparent pricing, honest communication, and workmanship that stands the test of time. That's why hundreds of Sydney homeowners and businesses trust us with their plumbing.`,
  values: [
    'Quality workmanship guaranteed',
    'Transparent and fair pricing',
    'Licensed and insured professionals',
    'Customer satisfaction is our priority',
  ],
}

// ============================================
// CONTACT SECTION
// ============================================

export const CONTACT_INFO = {
  title: 'Get In Touch',
  subtitle: 'Need a plumber? Contact us for a free quote or emergency service.',
  mapPlaceholder: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10282596836!2d150.65178945000002!3d-33.847404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s',
}
