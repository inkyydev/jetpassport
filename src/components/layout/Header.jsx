import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import headerBlogBg from '../../assets/header-img.png'
import chevDropdownIcon from '../../assets/chev-dropdown-icon.svg'
import Container from '../common/Container'
import { passportServices } from '../../pages/Passport/data'
import phoneIcon from '../../assets/phone-img.svg'

const baseNavItems = [
  { to: '/', label: 'Home' },
  { to: '/florida', label: 'Passport Services' },
  { to: '/visa', label: 'Visa Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about-us', label: 'About Us' },
  { to: '/passport-visa-photo-services', label: 'In-house Passport Photo' },
  { to: '/contact', label: 'Contact Us' },
]

function Header() {
  const { pathname } = useLocation()
  const isBlogSection =
    pathname === '/blog' || pathname.startsWith('/blog/') || pathname === '/contact'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState('')
  const [openMobileDropdown, setOpenMobileDropdown] = useState('')

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown('')
    setOpenDesktopDropdown('')
  }

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown((prev) => (prev === key ? '' : key))
  }

  return (
    <header
      className={
        isBlogSection
          ? 'relative z-50 w-full border-b border-[rgba(255,255,255,0.25)] bg-cover bg-center bg-no-repeat py-[12px] md:py-[20px]'
          : 'absolute left-0 top-0 z-50 w-full border-b border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] py-[12px] backdrop-blur-[5px] md:py-[20px]'
      }
      style={isBlogSection ? { backgroundImage: `url(${headerBlogBg})` } : undefined}
    >
      <div className="flex items-center justify-between max-w-[1300px] mx-auto px-[20px] md:px-[30px] lg:px-[12px]">
        <Link to="/" className="shrink-0" onClick={closeAllMenus}>
          <img src={logo} alt="Jet Passport" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-[15px] min-[1150px]:text-[12px] xl:text-[14px] min-[1150px]:flex">
          {baseNavItems.map((item) =>
            item.label === 'Passport Services' ? (
              <div
                key={item.to}
                className="relative py-2"
                onMouseEnter={() => setOpenDesktopDropdown('passport')}
                onMouseLeave={() => setOpenDesktopDropdown('')}
              >
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 text-[#fff] hover:text-[rgba(255,255,255,0.8)]"
                >
                  {item.label}
                  <img
                    src={chevDropdownIcon}
                    alt=""
                    aria-hidden
                    className="h-[5px] w-[8px] translate-y-[1px]"
                  />
                </Link>
                {openDesktopDropdown === 'passport' ? (
                  <div className="absolute left-0 top-full z-20 mt-0 w-56 rounded-[10px] bg-white p-2 shadow-lg">
                    {passportServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/passport/${service.slug}`}
                        className="block rounded px-2 py-1 text-sm text-[#0C0A14] hover:bg-zinc-100"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className="py-2 text-[#fff] hover:text-[rgba(255,255,255,0.8)]"
              >
                {item.label}
              </NavLink>
            )
          )}

          <div className="flex items-center gap-[10px]">
            <a
              href="tel:202-474-9999"
              className="inline-flex hover:bg-[#ffffff] items-center gap-[10px] bg-[#CFDFE8] rounded-[144px] px-[20px] py-[12px] font-medium text-[#10101A]"
            >
              <img src={phoneIcon} alt="Phone" />
              202-474-9999
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-[10px] hover:bg-[#ffffff]"
            >
              Track your Order
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex relative z-50 items-center justify-center min-[1150px]:hidden !m-0 !min-h-0 !min-w-0 !rounded-none !border-0 !bg-transparent !p-0  !text-inherit shadow-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="block relative w-[30px] h-[24px]">
            <span
              className={`absolute left-0 top-[3px] h-[1px] w-[30px] transition-all duration-300
                ${isMobileMenuOpen ? 'rotate-45 top-[11px] bg-[#000]' : 'bg-[#fff] rotate-0 top-0'}
              `}
            ></span>
            <span
              className={`absolute left-0 top-[11px] h-[1px] w-[30px] bg-white transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}
            ></span>
            <span
              className={`absolute left-0 bottom-[4px] h-[1px] w-[30px]  transition-all duration-300
                ${isMobileMenuOpen ? '-rotate-45 top-[11px] bg-[#000]' : 'rotate-0 bottom-0 bg-white'}
              `}
            ></span>
          </span>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 w-full h-[100vh] top-[0] pt-[50px] z-40 overflow-y-auto bg-white min-[1150px]:hidden">
          <Container className="py-8">
            <nav className="flex flex-col gap-5 text-lg">
              {baseNavItems.map((item) =>
                item.label === 'Passport Services' ? (
                  <div key={item.to}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown('passport')}
                      className="!m-0 !flex !w-full !items-center !justify-between !rounded-none !bg-transparent !p-0 !text-left !text-inherit !font-normal"
                    >
                      <span>{item.label}</span>
                      <img
                        src={chevDropdownIcon}
                        alt=""
                        aria-hidden
                        className={`h-[5px] w-[8px] invert transition-transform ${
                          openMobileDropdown === 'passport' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileDropdown === 'passport' ? (
                      <div className="mt-3 flex flex-col gap-2 pl-2">
                        {passportServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/passport/${service.slug}`}
                            onClick={closeAllMenus}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <NavLink key={item.to} to={item.to} onClick={closeAllMenus}>
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export default Header
