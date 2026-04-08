import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'

const leftItems = [
  'New U.S. Passport Applications',
  'Passport Renewals',
  'Child/Minor Passports',
  'Lost, Stolen, or Damaged Passports',
  'Expedited & Same-Day Passport Services',
]

const rightItems = [
  'Correct size (2 x 2 inches)',
  'Neutral facial expression',
  'Proper head positioning',
  'Plain white background',
  'No shadows or glare',
  'Compliance with eyewear and accessory rules',
]

function ListCardItem({ text }) {
  return (
    <li className="flex items-center md:gap-[16px] gap-[10px] md:rounded-[20px] rounded-[10px] bg-[#F8F9FD] md:px-[36px] px-[20px] md:py-[23px] py-[20px] md:text-[16px] text-[14px] text-[#31323B]">
      <img src={checkmarkIcon} alt="" aria-hidden className="h-[20px] w-[20px] shrink-0" />
      <span>{text}</span>
    </li>
  )
}

function UsPassportPhotosSection() {
  return (
    <section className="pb-[40px] pt-[40px] md:pb-[74px] md:pt-[75px]">
      <Container>
        <h2 className="text-center text-[#0C0A14]">
          U.S. Passport Photos
        </h2>

        <div className="md:mt-[40px] mt-[25px] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7">
          <div>
            <p className="mb-[18px] max-w-[377px] md:text-[18px] text-[16px] font-medium leading-[1.35] text-[#31323B]">
              We provide compliant photos for all U.S. passport needs, including:
            </p>
            <ul className="space-y-3">
              {leftItems.map((item) => (
                <ListCardItem key={item} text={item} />
              ))}
            </ul>
            <p className="md:mt-[30px] max-w-[500px] mt-[20px] text-[#535862]">
              Each photo is reviewed for compliance before submission, reducing the risk of
              application rejection.
            </p>
          </div>

          <div>
            <p className="mb-[18px] max-w-[377px] md:text-[18px] text-[16px] font-medium leading-[1.35] text-[#31323B]">
              All U.S. passport photos strictly follow U.S. Department of State guidelines,
              including:
            </p>
            <ul className="space-y-3">
              {rightItems.map((item) => (
                <ListCardItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default UsPassportPhotosSection

