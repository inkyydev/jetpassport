import Container from '../common/Container'
import callIcon from '../../assets/call-icon.svg'
import walkIcon from '../../assets/walk-icon.svg'
import samedayIcon from '../../assets/sameday-icon.svg'

const cards = [
  { icon: callIcon, title: 'Call now for availability', alt: 'Phone' },
  { icon: walkIcon, title: 'Walk-ins welcome', alt: 'Walk-in' },
  { icon: samedayIcon, title: 'Same-day service available', alt: 'Same-day service' },
]

function PassportVisaPhotosCtaSection() {
  return (
    <section className="pt-[50px] pb-[30px] md:pt-[70px] md:pb-[20px] lg:pt-[86px] lg:pb-[20px]">
      <Container>
        <h2 className="mx-auto max-w-[860px] text-center text-[30px] md:text-[36px] lg:text-[52px]">
          Get Your Passport or Visa Photos Done Right – The First Time
        </h2>
        <p className="mx-auto max-w-[860px] text-center font-medium text-[16px] md:text-[18px] lg:text-[22px] mt-[20px] mb-[25px] md:mt-[22px] md:mb-[37px] text-[#0C0A14]">
          Visit our office for professional passport and visa photos, or contact us to learn more
          about our expedited passport and visa services.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {cards.map(({ icon, title, alt }) => (
            <div
              key={title}
              className="rounded-[20px] bg-[#F2F7FB] px-[20px] py-[25px] md:rounded-[28px] md:px-[22px] md:pb-[40px] md:pt-[27px]"
            >
              <img src={icon} alt={alt} className="h-[52px] w-[52px] shrink-0" />
              <h3 className="mt-[20px] text-[20px] font-medium text-[#0C0A14] md:mt-[30px] md:text-[26px] lg:mt-[48px]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PassportVisaPhotosCtaSection
