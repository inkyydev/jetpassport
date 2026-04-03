import chinaImage from '../../assets/china-img.png'

export const evisaItems = [
  {
    id: 1,
    slug: 'ghana',
    image: chinaImage,
    country: 'Ghana',
    hero_title: 'Ghana eVisa Online Application',
    hero_description:
      'Digital-first process for eligible travelers with guided document upload and submission.',
    requirements: [
      {
        section_title: 'Eligibility & Documents',
        content: {
          text: 'Before you apply online:',
          list: [
            'Valid passport copy',
            'Passport-size digital photo',
            'Travel itinerary',
            'Hotel confirmation',
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: 'china',
    image: chinaImage,
    country: 'China',
    hero_title: 'China eVisa Assistance',
    hero_description:
      'Guided online workflow for China eVisa intake and document quality checks.',
    requirements: [
      {
        section_title: 'Application Requirements',
        content: {
          text: 'Required for China eVisa request:',
          list: [
            'Scanned passport bio page',
            'Application form details',
            'Travel purpose statement',
            'Supporting invitation or itinerary',
          ],
        },
      },
    ],
  },
  {
    id: 3,
    slug: 'brazil',
    image: chinaImage,
    country: 'Brazil',
    hero_title: 'Brazil eVisa Processing',
    hero_description:
      'Fast document checks and online processing support for Brazil eVisa applications.',
    requirements: [
      {
        section_title: 'Before Submission',
        content: {
          text: 'Collect these items:',
          list: [
            'Passport scan',
            'Digital photo',
            'Flight confirmation',
            'Accommodation details',
          ],
        },
      },
    ],
  },
  {
    id: 4,
    slug: 'nigeria',
    image: chinaImage,
    country: 'Nigeria',
    hero_title: 'Nigeria eVisa Support',
    hero_description:
      'Apply online with confidence through structured document preparation.',
    requirements: [
      {
        section_title: 'Online eVisa Checklist',
        content: {
          text: 'Standard checklist for Nigeria eVisa:',
          list: [
            'Passport with validity',
            'Digital passport photo',
            'Proof of accommodation',
            'Return flight details',
          ],
        },
      },
    ],
  },
]
