import chinaImage from '../../assets/china-img.png'

export const visaItems = [
  {
    id: 1,
    slug: 'ghana',
    image: chinaImage,
    country: 'Ghana',
    hero_title: 'China Tourist Visa for Ghana Passport Holders',
    hero_description:
      'Full support for document review, embassy requirements, and appointment flow for travelers going to China.',
    requirements: [
      {
        section_title: 'China Tourist Visa (L)',
        content: {
          text: 'For travelers visiting China for tourism:',
          list: [
            'Completed China Visa Application Form',
            'Original Passport',
            'Proof of Residence or Address',
            'Previous China Visa (if applicable)',
            'Proof of U.S. Status',
          ],
        },
      },
      {
        section_title: 'China Business Visa (M)',
        content: {
          text: 'For business-related travel to China:',
          list: [
            'Invitation Letter from Chinese company',
            'Business cover letter from applicant employer',
            'Round-trip itinerary',
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
    hero_title: 'China Visa Services',
    hero_description:
      'Assistance for tourist, business, and family-visit applications with clear checklist guidance.',
    requirements: [
      {
        section_title: 'General Documents',
        content: {
          text: 'Base documents needed for most visa categories:',
          list: [
            'Valid passport with at least 6 months validity',
            'Recent passport photo',
            'Completed application form',
            'Travel itinerary',
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
    hero_title: 'Brazil Visa Processing Support',
    hero_description:
      'Get support for application forms, invitation letters, and consular appointment prep.',
    requirements: [
      {
        section_title: 'Tourist Visa',
        content: {
          text: 'Tourist travel requirements:',
          list: [
            'Application form',
            'Passport',
            'Flight booking',
            'Hotel reservation',
            'Proof of funds',
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
    hero_title: 'Nigeria Visa Application Help',
    hero_description:
      'Support for online form completion, invitation review, and embassy-ready submission.',
    requirements: [
      {
        section_title: 'Business Visa',
        content: {
          text: 'For business trip applications:',
          list: [
            'Passport',
            'Printed online application confirmation',
            'Invitation letter',
            'Employer letter',
            'Accommodation proof',
          ],
        },
      },
    ],
  },
]
