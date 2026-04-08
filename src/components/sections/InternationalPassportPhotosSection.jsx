import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'
import internationalShape from '../../assets/international-img.svg'

const points = [
  'Different photo sizes and formats',
  'Background color variations',
  'Head size and facial dimension rules',
  'Country-specific dress and appearance guidelines',
]

function InternationalPassportPhotosSection() {
  return (
    <section className="bg-[#0D2E42] py-[50px] md:py-[68px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10">
          <div className="order-2 rounded-[20px] bg-white px-[20px] py-[30px] md:px-[40px] md:py-[50px] lg:order-1 lg:px-[56px] lg:py-[51px]">
            <p>
              In addition to U.S. passports, we provide passport photos for other countries, meeting
              international standards and country-specific requirements.
            </p>
            <p className="mt-[10px]">Our team is familiar with:</p>

            <ul className="mt-[20px] space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-[15px]">
                  <img
                    src={checkmarkIcon}
                    alt=""
                    aria-hidden
                    className="mt-[2px] h-[16px] w-[16px] shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="md:mt-[28px] mt-[15px]">
              International passport photo requirements vary by country - our specialists ensure
              accuracy for each destination.
            </p>
          </div>

          <div className="relative z-2 order-1 lg:order-2">
            <img
              src={internationalShape}
              alt=""
              aria-hidden
              className="pointer-events-none lg:ml-[-70px] md:ml-[-30px] ml-[-30px] opacity-[0.15] absolute left-1/2 md:top-1/2 top-[150px] h-auto w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-35 md:w-[320px] lg:w-[417px]"
            />
            <h2 className="relative z-10 max-w-[360px] text-white">
              International Passport Photos (Other Countries)
            </h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InternationalPassportPhotosSection
