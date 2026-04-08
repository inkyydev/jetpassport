import blogImage from '../../assets/blog-image.png'
import authorAmelie from '../../assets/testimonials-img.png'

/** Statički filteri (UI only) */
export const blogCategories = [
  { id: 'all', label: 'View all' },
  { id: 'design', label: 'Design' },
  { id: 'product', label: 'Product' },
  { id: 'software-engineering', label: 'Software Engineering' },
  { id: 'customer-success', label: 'Customer Success' },
]

export const blogSortOptions = [
  { id: 'recent', label: 'Most recent' },
  { id: 'oldest', label: 'Oldest first' },
  { id: 'title', label: 'Title A–Z' },
]

/**
 * Svi postovi; za archive hero uzima se najnoviji po publishedAt.
 * categoryId mora odgovarati id-u iz blogCategories (osim all).
 */
export const blogPosts = [
  {
    id: 1,
    slug: 'passport-vs-visa-difference',
    categoryId: 'design',
    categoryLabel: 'Design',
    title: "What's the difference between a passport and a visa?",
    excerpt:
      'Understand how a passport and visa differ, why each is important, and when you need them for international travel.',
    content:
      'A passport proves your citizenship and identity. A visa is permission from a country to enter, stay, or transit. Requirements depend on your nationality and destination.',
    image: blogImage,
    publishedAt: '2026-04-03',
    formattedDate: '3 April 2026',
    author: {
      name: 'Amélie Laurent',
      avatar: authorAmelie,
    },
  },
  {
    id: 2,
    slug: 'passport-or-visa-required',
    categoryId: 'design',
    categoryLabel: 'Design',
    title: 'Passport or visa required?',
    excerpt:
      'Before traveling, check if your destination requires a passport or visa to avoid delays or denied entry.',
    content:
      'Research entry rules early. Some countries allow visa-free travel with only a passport; others require an approved visa before departure.',
    image: blogImage,
    publishedAt: '2025-01-20',
    formattedDate: '20 Jan 2025',
    author: {
      name: 'Olivia Rhye',
      avatar: authorAmelie,
    },
  },
  {
    id: 3,
    slug: 'prepare-visa-documents',
    categoryId: 'product',
    categoryLabel: 'Product',
    title: 'How to prepare visa documents without delays',
    excerpt:
      'A practical checklist to help avoid common mistakes before submitting your application.',
    content:
      'Organize scans, match names across documents, and confirm embassy-specific checklists before your appointment.',
    image: blogImage,
    publishedAt: '2026-03-20',
    formattedDate: '20 Mar 2026',
    author: {
      name: 'Jet Passport Team',
      avatar: authorAmelie,
    },
  },
  {
    id: 4,
    slug: 'tourist-vs-business-visa',
    categoryId: 'software-engineering',
    categoryLabel: 'Software Engineering',
    title: 'Tourist vs business visa: key differences',
    excerpt: 'Understand what changes between personal and business travel visas.',
    content:
      'Business visas often need invitations and employer letters; tourist visas focus on itinerary and funds.',
    image: blogImage,
    publishedAt: '2026-03-26',
    formattedDate: '26 Mar 2026',
    author: {
      name: 'Jet Passport Team',
      avatar: authorAmelie,
    },
  },
  {
    id: 5,
    slug: 'passport-photo-requirements',
    categoryId: 'customer-success',
    categoryLabel: 'Customer Success',
    title: 'Passport photo requirements: complete guide',
    excerpt: 'Use this quick reference to get compliant photos from the first try.',
    content:
      'Neutral expression, plain background, and correct dimensions are the most common rules across countries.',
    image: blogImage,
    publishedAt: '2026-03-30',
    formattedDate: '30 Mar 2026',
    author: {
      name: 'Jet Passport Team',
      avatar: authorAmelie,
    },
  },
  {
    id: 6,
    slug: 'expedited-passport-timeline',
    categoryId: 'product',
    categoryLabel: 'Product',
    title: 'What to expect from an expedited passport timeline',
    excerpt: 'Same-day and rush options explained in plain language.',
    content:
      'Processing varies by service level and government workload. Plan buffer days before international travel.',
    image: blogImage,
    publishedAt: '2026-02-15',
    formattedDate: '15 Feb 2026',
    author: {
      name: 'Olivia Rhye',
      avatar: authorAmelie,
    },
  },
]

export function getBlogPostsByDateDesc() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null
}
