import Container from '../common/Container'
import fastServicesIcon from '../../assets/fast-services-icon.svg'
import expertIcon from '../../assets/expert-icon.svg'
import secureIcon from '../../assets/secure-icon.svg'
import customerIcon from '../../assets/customer-icon.svg'

const cards = [
  {
    icon: fastServicesIcon,
    title: 'Fast Services',
    description:
      'We prioritize your needs with expedited passport renewals, ensuring you receive your new passport quickly and efficiently.',
  },
  {
    icon: expertIcon,
    title: 'Expert Guidance',
    description:
      'Our experienced team is here to guide you through the passport renewal process, ensuring all your questions are answered.',
  },
  {
    icon: secureIcon,
    title: 'Secure & Reliable',
    description:
      'Your personal information is safe with us. We ensure secure processing of all your passport applications.',
  },
  {
    icon: customerIcon,
    title: 'Customer Satisfaction',
    description:
      'We strive to exceed your expectations with our top-notch services and commitment to your satisfaction.',
  },
]

function AboutServiceHighlightsSection() {
  return (
    <section className="pt-0 pb-[50px] md:pb-[67px]">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[15px] bg-[#F2F7FB] px-[20px] py-[26px] md:p-[26px]"
            >
              <img src={card.icon} alt="" aria-hidden className="h-[52px] w-[52px]" />
              <h3 className="mb-[10px] mt-[25px] text-[22px] font-medium text-[#0C0A14] md:mb-[14px] md:mt-[30px] md:text-[26px] lg:mt-[45px] lg:text-[30px]">
                {card.title}
              </h3>
              <p className="max-w-[383px]">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutServiceHighlightsSection
