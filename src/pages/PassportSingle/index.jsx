import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Container from '../../components/common/Container'
import FAQSection from '../../components/sections/FAQSection'
import ServicePackagesSection from '../../components/sections/ServicePackagesSection'
import PassportInfoChecklistSection from '../../components/sections/PassportInfoChecklistSection'
import HomepageHowItWorksSection from '../../components/sections/HomepageHowItWorksSection'
import PassportBigImageSection from '../../components/sections/PassportBigImageSection'
import cloudImg from '../../assets/cloud-img.png'
import passportHeroBg from '../../assets/hero-bg-passport.png'
import { passportServices } from '../Passport/data'

function PassportSinglePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { slug } = useParams()
  const resolvedSlug = useMemo(() => {
    if (slug) return slug
    const segments = location.pathname.split('/').filter(Boolean)
    return segments[segments.length - 1] ?? ''
  }, [slug, location.pathname])
  const item = useMemo(
    () => passportServices.find((entry) => entry.slug === resolvedSlug),
    [resolvedSlug]
  )
  const [selectedSlug, setSelectedSlug] = useState(
    resolvedSlug || passportServices[0]?.slug || ''
  )

  useEffect(() => {
    setSelectedSlug(resolvedSlug || passportServices[0]?.slug || '')
  }, [resolvedSlug])

  if (!item) {
    return <h1>Passport service not found</h1>
  }

  const requirementFaqs = item.requirements.map((requirement, index) => ({
    id: index + 1,
    question: requirement,
    answer: `Required for ${item.title} application processing.`,
  }))

  const packageCount =
    item.slug === 'passport-renewal' || item.slug === 'name-change' ? 4 : 3

  const conditionItems = item.requirements.map((req) =>
    req.endsWith('.') ? req : `${req}.`
  )

  const paymentInstructionItems = [
    "Write the applicant's date of birth in the memo section of your check or money order.",
    'Ensure the check or money order is clearly written. If using a money order, also include your name, address, and date of birth.',
    'Avoid illegible writing, abbreviations, corrections, starter checks, or postdated checks, as these will be rejected and may delay processing by four days.',
    'For personal checks, ensure your name and address are printed on the check.',
    'If applying for a passport card as well, add $30 to the government fee.',
    'Finally, make a copy of your completed check and place it loosely in your shipping envelope.',
  ]

  const passportTypeOptions = passportServices.map((service) => ({
    slug: service.slug,
    label: service.title,
  }))

  const handleGetStarted = () => {
    if (!selectedSlug) return
    navigate(`/passport/${selectedSlug}`)
  }

  const handleTypeChange = (nextSlug) => {
    setSelectedSlug(nextSlug)
    navigate(`/passport/${nextSlug}`)
  }

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-[100px] pb-[100px] md:pt-[160px] md:pb-[20.48vw]"
        style={{ backgroundImage: `url(${passportHeroBg})` }}
      >
        <Container>
          <div className="mx-auto max-w-[860px] text-center text-white">
            <h1 className="whitespace-pre-line text-white">{item.pageTitle || item.title}</h1>
            <p className="mx-auto mt-5 max-w-[717px] text-white/90">{item.text}</p>

            <p className="my-[15px] text-[12px] max-w-[250px] mx-auto md:max-w-full text-white font-medium">
              Apply for your new passport today and get one step closer to takeoff!
            </p>

            <div className="mx-auto flex max-w-[560px] gap-[10px] rounded-[999px] border border-[#fff] bg-white p-1 shadow-[0_40px_50px_0_rgba(6,9,21,0.25)]">
              <select
                value={selectedSlug}
                onChange={(event) => setSelectedSlug(event.target.value)}
                className="w-full rounded-[999px] px-4 py-2 text-[#0C0A14] outline-none"
              >
                {passportServices.map((service) => (
                  <option key={service.id} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleGetStarted}
                className="!bg-[#CFDFE8] hover:!bg-[#10101A] hover:!text-white !text-[#0C0A14] whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <img src={cloudImg} alt="cloud" className="w-full" />
        </div>
      </section>

      <ServicePackagesSection
        typeLabel="Select Passport Type"
        speedTitle="Speed Of Service"
        speedText="Are you 16 years or older and need a passport for the first time? Or your adult passport has expired for more than 5 years? You're on the right track!"
        typeOptions={passportTypeOptions}
        activeSlug={selectedSlug}
        onTypeChange={handleTypeChange}
        onPackageAction={handleGetStarted}
        packageCount={packageCount}
      />

      <PassportInfoChecklistSection
        title="You can apply for a new U.S. passport if you're 16 or older and meet at least one of the following conditions:"
        titleClassName="md:!text-[32px] !text-[26px]"
        buttonLabel="Start Your Application"
        buttonTo={`/passport/${item.slug}`}
        items={conditionItems}
        className="pt-[10px] md:pt-[20px]"
      />

      <HomepageHowItWorksSection className="pt-[0px] md:pt-[40px] lg:pt-[101px] pb-[50px] md:pb-[108px]"/>
      
      <Container>
        <div className="h-[1px] bg-[#D3D3E5] mb-[45px] md:mb-[0px]"></div>
      </Container>

      <FAQSection
        title={`${item.title} Requirements`}
        subtitle="Everything you need to prepare before submitting your passport application."
        faqs={requirementFaqs}
        className="y-[50px] md:!pb-[86px] !pb-[50px]"
      />

      <PassportBigImageSection />

      <PassportInfoChecklistSection
        title={`Government Passport Fees for ${item.title}`}
        description="A fee of $211.36 should be paid by personal check or money order, made out to the U.S. Department of State, and included in the sealed envelope. An additional $35 fee is paid separately to the acceptance agent."
        buttonLabel="Get Started"
        buttonTo={`/passport/${item.slug}`}
        rightColumnTitle="Important Payment Instructions:"
        items={paymentInstructionItems}
        className="pt-[45px] md:pt-[99px]"
      />

      
    </>
  )
}

export default PassportSinglePage
