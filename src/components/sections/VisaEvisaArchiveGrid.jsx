import { Link } from 'react-router-dom'
import Container from '../common/Container'
import logoMark from '../../assets/logo.svg'

function VisaEvisaArchiveGrid({ items, basePath, labelSuffix, sectionId = 'visa-archive-grid', className = '' }) {
  return (
    <section id={sectionId} className={`bg-white pb-[50px] md:pb-[0px] mt-[20px] md:mt-[-50px] ${className}`.trim()}>
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const hasImage = Boolean(item.image)
            const titleText = `${item.country} ${labelSuffix}`
            return (
              <Link
                key={item.id}
                to={`${basePath}/${item.slug}`}
                className="group relative block min-h-[297px] overflow-hidden rounded-[24px] bg-[#E8EEF4]"
              >
                {hasImage ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.country}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div className="relative z-10 flex h-full min-h-[297px] items-end p-5 md:p-[26px]">
                      <h4 className="!m-0 !text-[22px] !leading-tight !text-white md:!text-[26px]">
                        {titleText}
                      </h4>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={logoMark}
                      alt=""
                      className="pointer-events-none absolute right-5 top-5 h-14 w-auto opacity-[0.12] md:right-[26px] md:top-[26px]"
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-full min-h-[297px] items-end p-5 md:p-[26px]">
                      <h4 className="!m-0 !text-[22px] !leading-tight !text-[#0C0A14] md:!text-[26px]">
                        {titleText}
                      </h4>
                    </div>
                  </>
                )}
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default VisaEvisaArchiveGrid
