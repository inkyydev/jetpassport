import { Link } from 'react-router-dom'
import Container from '../common/Container'
import cloudImg from '../../assets/cloud-img.png'
import searchIcon from '../../assets/search-icon.svg'

function VisaEvisaArchiveHero({
  title,
  description,
  backgroundImage,
  ctaLabel = 'Get Started Today',
  ctaTo = '/contact',
  showSearch = false,
  searchPlaceholder = 'Search FAQs',
}) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-[100px] pb-[100px] md:pt-[160px] md:pb-[20.48vw]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <div className="mx-auto max-w-[900px] text-center text-white">
          <h1 className="text-white max-w-[620px] mx-auto">{title}</h1>
          <p className="mx-auto mt-5 max-w-[520px] text-white">{description}</p>
          <Link to={ctaTo} className="btn mt-8 inline-block shadow-[0_20px_20px_0_rgba(0,0,0,0.25)]">
            {ctaLabel}
          </Link>

          {showSearch ? (
            <div className="mx-auto mt-6 w-full max-w-[502px] rounded-[100px] bg-white p-[9px]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-full bg-transparent px-3 text-[#99A2AD] outline-none"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="!m-0 inline-flex !h-[36px] !w-[36px] !min-h-[36px] !min-w-[36px] items-center justify-center !rounded-full !border !border-[#CFDFE8] !bg-[#CFDFE8] !p-0 hover:!bg-transparent"
                >
                  <img src={searchIcon} alt="" aria-hidden className="h-[13px] w-[13px]" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <img src={cloudImg} alt="" className="w-full" />
      </div>
    </section>
  )
}

export default VisaEvisaArchiveHero
