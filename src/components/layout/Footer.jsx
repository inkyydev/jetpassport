import { Link } from 'react-router-dom'
import Container from '../common/Container'
import logo from '../../assets/logo.svg'
import cloudFooter from '../../assets/cloud-footer.png'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D2E42] md:pt-[21.3vw] pt-[100px] md:pb-[66px] pb-[30px]">
      <img
        src={cloudFooter}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-0 w-full"
      />

      <Container className="relative z-10 text-white">
        <div className="grid grid-cols-1 gap-8 border-b border-[rgba(255,255,255,0.1)] md:pb-[62px] pb-[35px] md:grid-cols-[0.4fr_1.3fr_1.175fr] lg:grid-cols-[1.5fr_0.8fr_2fr_1.2fr]">
          <div className="md:col-span-3 lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="Jet Passports" className="h-auto w-[190px]" />
            </Link>
            <p className="mt-6 max-w-[280px]leading-[1.5] text-white/90">
              Passport services shouldn&apos;t be stressful. Let us help you get where you need to
              go with ease.
            </p>
          </div>

          <div className="border-[rgba(255,255,255,0.1)] lg:pl-[50px] md:pl-[0px] lg:border-l">
            <h4 className="text-[14px] text-white">Company</h4>
            <div className="mt-4 flex flex-col gap-3 text-[16px]">
              <Link to="/about-us" className="text-white/90 hover:text-white">
                About Us
              </Link>
              <Link to="/contact" className="text-white/90 hover:text-white">
                Contact Us
              </Link>
              <Link to="/faq" className="text-white/90 hover:text-white">
                FAQ
              </Link>
              <Link to="/blog" className="text-white/90 hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          <div className="border-[rgba(255,255,255,0.1)] md:border-l lg:pl-[50px] pl-[0px] md:pl-[30px]">
            <h4 className="text-[14px] text-white">Passport Services</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-[16px]">
              <Link to="/passport/new-passport" className="text-white/90 hover:text-white">
                New Passport
              </Link>
              <Link to="/passport/lost-passport" className="text-white/90 hover:text-white">
                Lost Passport
              </Link>
              <Link to="/passport/passport-renewal" className="text-white/90 hover:text-white">
                Passport Renewal
              </Link>
              <Link to="/passport/damaged-passport" className="text-white/90 hover:text-white">
                Damaged Passport
              </Link>
              <Link to="/passport/child-passport" className="text-white/90 hover:text-white">
                Child Passport
              </Link>
              <Link to="/passport/passport-card" className="text-white/90 hover:text-white">
                Passport Card
              </Link>
              <Link to="/passport/name-change" className="text-white/90 hover:text-white">
                Name Change
              </Link>
            </div>
          </div>

          <div className="border-[rgba(255,255,255,0.1)] md:border-l lg:pl-[50px] pl-[0px] md:pl-[30px]">
            <h4 className="text-[14px] text-white">Contact</h4>
            <div className="mt-4 flex flex-col gap-3 text-[16px] text-white/90">
              <p className="!text-white/90">1856 W Hillsboro Blvd. Deerfield Beach, FL 33442</p>
              <a href="mailto:support@jetpassports.com" className="text-white/90 hover:text-white">
                support@jetpassports.com
              </a>
              <a href="tel:2024749999" className="text-white/90 hover:text-white">
                202-474-9999
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[33px] flex flex-wrap items-center md:justify-between justify-center gap-4 ">
          <p className="!text-white/85 md:text-left text-center">
            © {new Date().getFullYear()} Jet Passports. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center md:gap-[33px] gap-[20px] order-[-1] md:order-2">
            <Link to="/" className="text-white/85 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/" className="text-white/85 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/" className="text-white/85 hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
