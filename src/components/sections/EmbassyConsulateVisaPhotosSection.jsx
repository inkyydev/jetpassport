import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'

const leftItems = [
  'Tourist Visas',
  'Business Visas',
  'Work & Employment Visas',
  'Student Visas',
  'Transit & Long-Stay Visas',
]

const rightItems = [
  'Country-specific photo dimensions',
  'Background color requirements',
  'Facial positioning and proportions',
  'Head coverings (as permitted by regulations)',
  'Printed and digital submission formats',
]

function VisaListItem({ text }) {
  return (
    <li className="flex items-center md:gap-[16px] gap-[10px] md:rounded-[20px] rounded-[10px] bg-[#F2F7FB] md:px-[36px] px-[20px] md:py-[23px] py-[20px] md:text-[16px] text-[14px] text-[#31323B]">
      <img src={checkmarkIcon} alt="" aria-hidden className="h-[20px] w-[20px] shrink-0" />
      <span>{text}</span>
    </li>
  )
}

function EmbassyConsulateVisaPhotosSection() {
  return (
    <section className="bg-[#CFDFE8] py-[50px] md:py-[70px]">
      <Container>
        <h2 className="mx-auto max-w-[523px] text-center">
          Embassy &amp; Consulate
          <br />
          Visa Photos - Worldwide
        </h2>

        <div className="mt-[25px] md:mt-[40px] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7">
          <div>
            <p className="mb-[18px] max-w-[377px]">
              We provide visa photo services for all countries, including photos for:
            </p>
            <ul className="space-y-3">
              {leftItems.map((item) => (
                <VisaListItem key={item} text={item} />
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-[18px] max-w-[377px]">
              Visa photo requirements differ significantly by country. Our experts ensure compliance
              with:
            </p>
            <ul className="space-y-3">
              {rightItems.map((item) => (
                <VisaListItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EmbassyConsulateVisaPhotosSection

