import { Link } from 'react-router-dom'
import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'

function PassportInfoChecklistSection({
  title,
  description,
  buttonLabel = 'Get Started',
  buttonTo = '#',
  items = [],
  rightColumnTitle = '',
  titleClassName = '',
  className = '',
}) {
  return (
    <section className={`bg-white py-[50px] md:py-[70px] ${className}`.trim()}>
      <Container>
        <div className="grid grid-cols-1 md:gap-10 gap-[20px] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className={`max-w-[420px] mb-[15px] ${titleClassName}`.trim()}>{title}</h2>
            {description ? (
              <p className="mb-[15px] max-w-[470px] text-[#4A515D]">{description}</p>
            ) : null}
            <Link to={buttonTo} className="btn inline-flex">
              {buttonLabel}
            </Link>
          </div>

          <div>
            {rightColumnTitle ? (
              <p className="mb-4 text-[14px] font-medium text-[#31323B]">{rightColumnTitle}</p>
            ) : null}
            <div className="space-y-3">
            {items.map((text, idx) => (
              <article
                key={`${idx}-${text.slice(0, 20)}`}
                className="flex items-center gap-4 rounded-[16px] bg-[#F2F7FB] p-[22px]"
              >
                <img src={checkmarkIcon} alt="" className="h-[20px] w-[20px] shrink-0" />
                <p className="text-[#4A515D]">{text}</p>
              </article>
            ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PassportInfoChecklistSection

