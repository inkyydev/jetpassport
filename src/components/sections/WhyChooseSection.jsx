import { Link } from 'react-router-dom'
import Container from '../common/Container'
import whyChooseIcon from '../../assets/why-choose-icon.svg'

const cards = [
  {
    id: 1,
    title: 'New Passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
  },
  {
    id: 2,
    title: 'New Passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
  },
  {
    id: 3,
    title: 'New Passport',
    text: 'For first-time applicants that are aged 16 and older and adults whose previous passports expired over five years ago.',
  },
]

function WhyChooseSection({ className = '' }) {
  return (
    <section
      className={`bg-white py-[50px] md:py-[80px] lg:py-[89px] lg:pb-[115px] ${className}`.trim()}
    >
      <Container>
        <div className="grid grid-cols-1 md:gap-8 gap-4 lg:grid-cols-2 lg:items-start">
          <h2 className="max-w-[380px]">Why Choose Jet Passport?</h2>
          <div>
            <p className="max-w-[520px]">
              Our passport specialists assist you through the process from beginning to end,
              delivering your travel documents securely and quickly.
            </p>
            <Link to="/passport/new-passport" className="btn mt-4 inline-flex">
              Start Your Application
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[20px] bg-[#F2F7FB] p-[25px_20px_30px] md:rounded-[27px] md:p-[27px_22px_39px]"
            >
              <img src={whyChooseIcon} alt="" />
              <h3 className="m-[25px_0_15px] md:m-[35px_0_20px]">{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseSection
