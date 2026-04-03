import { useMemo } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Container from '../../components/common/Container'
import FAQSection from '../../components/sections/FAQSection'
import WhyChooseSection from '../../components/sections/WhyChooseSection'
import { passportFastServices } from '../Passport/data'
import cloudImg from '../../assets/cloud-img.png'
import fastBgImage from '../../assets/fast-bg-image.png'

function PassportFastSinglePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { slug } = useParams()
  const resolvedSlug = useMemo(() => {
    if (slug) return slug
    const segments = location.pathname.split('/').filter(Boolean)
    return segments[segments.length - 1] ?? ''
  }, [slug, location.pathname])
  const item = useMemo(
    () => passportFastServices.find((entry) => entry.slug === resolvedSlug),
    [resolvedSlug]
  )

  if (!item) {
    return <h1>Passport fast service not found</h1>
  }

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pb-[100px] pt-[100px] md:pb-[19vw] md:pt-[160px]"
        style={{ backgroundImage: `url(${fastBgImage})` }}
      >
        <Container>
          <div className="mx-auto max-w-[1041px] text-center">
            <h1 className="text-white">Everything You Need to Know About Passport</h1>
            <p className="mx-auto mt-[20px] max-w-[717px] text-white">
              Select Your Service and Passport. We offer same-day passports, as well as passports
              in 3-5 days, 5-7 days, 7-10 days, 10-14 days, and 3-4 weeks.
            </p>

            <div className="mx-auto mt-[22px] flex max-w-[750px] flex-wrap justify-center md:gap-2.5 gap-[7px]">
              {passportFastServices.map((service) => {
                const isActive = service.slug === item.slug
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => navigate(`/passport/${service.slug}`)}
                    className={
                      (isActive
                        ? '!bg-[#CFDFE8] !text-[#0C0A14] shadow-[0_20px_20px_0_rgba(0,0,0,0.25)]'
                        : '!bg-[#0D2E42] !text-white hover:!bg-[#CFDFE8] hover:!text-[#0C0A14]') +
                      ' md:text-[16px] text-[14px] !py-[14px]'
                    }
                  >
                    {service.title}
                  </button>
                )
              })}
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <img src={cloudImg} alt="cloud" className="w-full" />
        </div>
      </section>

      <FAQSection
        title=""
        subtitle=""
        faqs={item.accordionSections}
        className="!pt-[0px] pb-[60px] md:pb-[90px] md:mt-[-60px] mt-[0px] relative z-2"
        splitIntro={{
          title: item.title,
          description: item.text,
          buttonLabel: 'Start Your Application',
          buttonTo: `/passport/${item.slug.replace(/-fast$/, '')}`,
        }}
      />

      <Container className="">
        <div className="h-[1px] bg-[#D3D3E5] md:mb-[45px] mb-[0px]"></div>
      </Container>

      <WhyChooseSection className="!pb-[30px]"/>
    </>
  )
}

export default PassportFastSinglePage

