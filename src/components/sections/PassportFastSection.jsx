import { Link } from 'react-router-dom'
import passportFastImg from '../../assets/passport-fast-img.png'

function PassportFastSection({
  title = 'Get Your Passport Fast!',
  description = 'Contact Jet Passports today for fast and reliable passport services tailored to your needs.',
  buttonLabel = 'Start Your Application',
  buttonTo = '/passport/new-passport',
  className = '',
}) {
  return (
    <section className={`lg:pt-[50px] ${className}`.trim()}>
      <div className="mx-auto w-full max-w-[1104px] px-[20px] md:px-[30px] lg:px-[12px]">
        <div className="grid grid-cols-1 items-center md:gap-10 gap-5 lg:grid-cols-2">
          <div>
            <h2 className="max-w-[383px] md:text-[52px] text-[30px]">{title}</h2>
            <p className="md:m-[13px_0_31px] m-[10px_0_20px] max-w-[370px]">{description}</p>
            <Link to={buttonTo} className="btn">
              {buttonLabel}
            </Link>
          </div>

          <div>
            <img
              src={passportFastImg}
              alt="Passport fast"
              className="md:w-auto w-[250px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PassportFastSection
