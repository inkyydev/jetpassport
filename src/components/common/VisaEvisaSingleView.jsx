import { useMemo } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import VisaEvisaArchiveHero from '../sections/VisaEvisaArchiveHero'
import ServicePackagesSection from '../sections/ServicePackagesSection'
import FAQSection from '../sections/FAQSection'

const BROWSE_DESCRIPTION =
  'Browse through each country to learn the various visa requirements and document types.'

const SPEED_TEXT =
  "Are you 16 years or older and need a passport for the first time? Or your adult passport has expired for more than 5 years? You're on the right track!"

const REQUIREMENTS_SUBTITLE =
  'When applying to renew your passport, you need to submit the following documents and meet these requirements:'

function VisaEvisaSingleView({ allItems, basePath, labelSuffix, backgroundImage, buildHeroTitle, requirementsSectionId }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { slug } = useParams()
  const resolvedSlug = useMemo(() => {
    if (slug) return slug
    const segments = location.pathname.split('/').filter(Boolean)
    return segments[segments.length - 1] ?? ''
  }, [slug, location.pathname])

  const item = useMemo(
    () => allItems.find((entry) => entry.slug === resolvedSlug),
    [allItems, resolvedSlug]
  )

  if (!item) {
    return <h1>Page not found</h1>
  }

  const heroTitle = buildHeroTitle(item)

  const typeOptions = allItems.map((entry) => ({
    slug: entry.slug,
    label: `${entry.country} ${labelSuffix}`,
  }))

  const requirementFaqs = item.requirements.map((req, index) => ({
    id: index + 1,
    question: req.section_title,
    answer: req.content?.text ?? '',
    answerList: req.content?.list ?? [],
  }))

  const handleCountryChange = (nextSlug) => {
    navigate(`${basePath}/${nextSlug}`)
  }

  return (
    <>
      <VisaEvisaArchiveHero
        title={heroTitle}
        description={BROWSE_DESCRIPTION}
        backgroundImage={backgroundImage}
        ctaTo={`#${requirementsSectionId}`}
      />

      <ServicePackagesSection
        typeLabel="Select Your Country"
        speedTitle="Speed Of Service"
        speedText={SPEED_TEXT}
        typeOptions={typeOptions}
        activeSlug={item.slug}
        onTypeChange={handleCountryChange}
        onPackageAction={() => navigate('/contact')}
        packageCount={3}
      />

      <FAQSection
        sectionId={requirementsSectionId}
        title={`Requirements for ${item.country}`}
        subtitle={REQUIREMENTS_SUBTITLE}
        faqs={requirementFaqs}
        className="pb-[50px] md:pb-[40px] !pt-[0px]"
        narrowSingleColumn
      />
    </>
  )
}

export default VisaEvisaSingleView
