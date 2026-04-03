import { Link } from 'react-router-dom'
import Container from '../common/Container'
import smallLogo from '../../assets/small-logo.svg'
import trustedBg from '../../assets/trusted-bg.png'

function HomepageTrustedSection() {
  return (
    <section
      className="bg-contain bg-center md:bg-[position:70px_60px] bg-no-repeat py-[50px] md:py-[53px] bg-[#0D2E42]"
      style={{
        backgroundImage: `url(${trustedBg})`,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] items-center">
          <div className="text-white">
            <img src={smallLogo} alt="Trusted" />
            <h2 className="mt-[18px] mb-[22px] max-w-[460px] text-white">
              Your Trusted, Professional, and Secure Hand-Carry Expediting Passport Service
            </h2>
            <Link to="/passport/new-passport" className="btn">
              Start Your Application
            </Link>
          </div>

          <div className="rounded-[25px] bg-white p-[25px_20px] md:p-[30px] lg:p-[52px]">
            <p className=" leading-[1.4] text-[#4A515D]">
              We are a private business registered with U.S. Passport Agencies under the name Travel
              Center Tours, explicitly authorized by the U.S. Government to provide a specific
              Hand-Carry Expedited Passport Services. As an approved, authorized and registered
              commercial courier, we are explicitly permitted to offer this specialized service on
              behalf of U.S. citizens who require Hand-Carry Expedited Passport processing through
              authorized channels.
            </p>
            <p className="mt-4 md:mt-8 leading-[1.4] text-[#4A515D]">
              At Jet Passports, we recognize the need for secure, fast and dependable passport
              solutions. As a leading passport courier in the United States, we specialize in
              expedited passport applications for individuals, families, and businesses. Whether
              you’re applying for a last-minute trip, managing an urgent business assignment abroad,
              or requiring a quick passport renewal, we’re here to make the process secure, seamless
              and stress-free.
            </p>
            <p className="mt-4 md:mt-8 leading-[1.4] text-[#4A515D]">
              Your safety and security is our top priority.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomepageTrustedSection
