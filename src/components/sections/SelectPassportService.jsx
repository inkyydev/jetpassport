import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { passportServices } from '../../pages/Passport/data'
import arrowImg from '../../assets/arrow-img.svg'

function ServiceCard({ item, large = false }) {
  return (
    <Link
      to={`/passport/${item.slug}`}
      className={`group relative flex overflow-hidden rounded-[20px] md:rounded-[24px] ${
        large ? 'min-h-[230px] md:min-h-[280px]' : 'min-h-[220px] md:min-h-[260px]'
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative mt-auto z-10 flex h-full flex-col justify-end p-[20px] md:p-[24px] text-white">
        {large ? (
          <h3 className="text-white">{item.title}</h3>
        ) : (
          <h4 className="text-white">{item.title}</h4>
        )}

        <p className={`mt-3 ${large ? 'max-w-[427px]' : 'max-w-[316px]'}  text-[14px] text-white`}>
          {item.text}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium !text-white">
          Start Your Application
          <img src={arrowImg} alt="arrow" />
        </span>
      </div>
    </Link>
  )
}

function SelectPassportService() {
  const [featuredService, ...otherServices] = passportServices

  return (
    <section className="bg-[#F2F7FB] pt-[45px] md:pt-[59px] pb-[60px] md:pb-[70px] lg:pb-[128px]">
      <Container>
        <h2 className="">Select Passport Service</h2>
        <p className="mt-4">
          At Jet Passports, we prioritize your time with our fast processing services.
        </p>

        {featuredService ? (
          <div className="mt-8">
            <ServiceCard item={featuredService} large />
          </div>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SelectPassportService
