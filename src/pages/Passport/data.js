import passportCardImage from '../../assets/passport-card.png'
import damagedPassportImage from '../../assets/demaged-passport.png'
import lostPassportImage from '../../assets/lost-passport.png'
import nameChangeImage from '../../assets/name-change.png'
import childPassportImage from '../../assets/child-passport.png'
import newPassportImage from '../../assets/new-passport.png'
import passportRenewalImage from '../../assets/passport-renewal.png'

export const passportServices = [
  {
    id: 1,
    title: 'New Passport',
    pageTitle: 'Get New Passport\nIn As Little As 3 Days',
    slug: 'new-passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Completed DS-11 form',
      'Proof of U.S. citizenship',
      'Government-issued photo ID',
      'Passport photo',
    ],
    image: newPassportImage,
  },
  {
    id: 2,
    title: 'Passport Renewal',
    pageTitle: 'Renew Your Passport\nIn As Little As 3 Days',
    slug: 'passport-renewal',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Completed DS-82 form',
      'Most recent passport',
      'Updated passport photo',
      'Name change proof (if applicable)',
    ],
    image: passportRenewalImage,
  },
  {
    id: 3,
    title: 'Child Passport',
    pageTitle: 'Get Child Passport\nIn As Little As 3 Days',
    slug: 'child-passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Completed DS-11 form for minor',
      'Child proof of citizenship',
      'Parent/guardian IDs',
      'Parental consent documentation',
    ],
    image: childPassportImage,
  },
  {
    id: 4,
    title: 'Passport Name Change',
    pageTitle: 'Update Passport Name\nIn As Little As 3 Days',
    slug: 'name-change',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Current passport',
      'Name change legal document',
      'Applicable DS form',
      'New passport photo if needed',
    ],
    image: nameChangeImage,
  },
  {
    id: 5,
    title: 'Lost/Stolen Passport',
    pageTitle: 'Replace Lost Passport\nIn As Little As 3 Days',
    slug: 'lost-passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Completed DS-11 form',
      'Completed DS-64 statement',
      'Proof of identity',
      'Passport photo',
    ],
    image: lostPassportImage,
  },
  {
    id: 6,
    title: 'Damaged Passport',
    pageTitle: 'Replace Damaged Passport\nIn As Little As 3 Days',
    slug: 'damaged-passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Damaged passport',
      'Completed DS-11 form',
      'Damage explanation statement',
      'Passport photo',
    ],
    image: damagedPassportImage,
  },
  {
    id: 7,
    title: 'Passport Card',
    pageTitle: 'Get Passport Card\nIn As Little As 3 Days',
    slug: 'passport-card',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
    requirements: [
      'Completed passport card application form',
      'Proof of citizenship',
      'Valid ID',
      'Passport photo',
    ],
    image: passportCardImage,
  },
]

function buildPassportFastAccordion(service) {
  const isNewPassport = service.slug === 'new-passport'
  return [
    {
      id: 1,
      question: isNewPassport
        ? 'Requirements for First US Passport Application'
        : `Requirements for ${service.title} Application`,
      answerList: isNewPassport
        ? [
            'You must be applying for the first time.',
            'Your previous passport was issued more than 15 years ago.',
            'Your previous passport was issued when you were under the age of 16.',
          ]
        : [...service.requirements],
    },
    {
      id: 2,
      question: 'How to Apply',
      answer:
        'Complete the appropriate DS form, gather supporting documents, and submit your application through an acceptance facility or expedited service as directed.',
    },
    {
      id: 3,
      question: 'Government & Service Fees',
      answer:
        'Government fees are paid to the U.S. Department of State. Service fees vary by processing speed. Your specialist will confirm totals before submission.',
    },
    {
      id: 4,
      question: isNewPassport
        ? 'Additional Requirements for New US Passports'
        : `Additional Requirements for ${service.title}`,
      answer:
        'Depending on your situation, you may need extra documentation such as proof of citizenship, photo ID, or legal name change records. We will verify your exact list during intake.',
    },
  ]
}

export const passportFastServices = passportServices.map((service) => ({
  title: service.title,
  text:
    service.slug === 'new-passport'
      ? "Whether your passport expired years ago or you've never had a passport, everyone will need to apply for a new US passport. For new US passport services in Chicago, choose Chicago Passport & Visa Services."
      : service.text,
  requirements: service.requirements,
  slug: `${service.slug}-fast`,
  accordionSections: buildPassportFastAccordion(service),
}))
