import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'
import whyChooseShape from '../../assets/why-choose-our-icon.svg'

const points = [
  'Photos compliant with U.S. and international requirements',
  'Visa photos for all countries worldwide',
  'Passport photos for USA and other countries',
  'Experienced passport & visa specialists',
  'Fast turnaround and expedited options',
  'Reduced risk of photo rejection',
  'Convenient in-office service',
]

function WhyChoosePassportVisaPhotoSection() {
  return (
    <section className="bg-[#CFDFE8] py-[50px] md:py-[68px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-[25px] md:grid-cols-2 lg:gap-10">
          <div className="order-2 rounded-[20px] bg-white px-[20px] py-[30px] md:px-[40px] md:py-[50px] lg:order-1 lg:px-[56px] lg:py-[51px] relative z-2">
            <ul className="space-y-3">
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
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src={whyChooseShape}
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-1/2 md:top-1/2 top-[150px] ml-[-30px] h-auto w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-35 md:ml-[-30px] md:w-[320px] lg:ml-[-70px] lg:w-[359px]"
            />
            <h2 className="relative z-10 max-w-[360px] text-[#0C0A14]">
              Why Choose Our Passport &amp; Visa Photo Services?
            </h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChoosePassportVisaPhotoSection
