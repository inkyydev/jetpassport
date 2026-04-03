import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { visaItems } from '../../pages/Visa/data'

function MostPopularVisasSection() {
  const popularVisas = visaItems.slice(0, 4)

  return (
    <section className="bg-[#F2F7FB] py-[50px] md:py-[75px] md:pb-[95px]">
      <Container>
        <h2 className="text-center">Most Popular Visas</h2>
        <p className="md:m-[22px_0_25px] m-[12px_0_25px] text-center">
          Simple Steps To Start Processing Your U.S. Passport
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularVisas.map((item) => (
            <Link
              key={item.id}
              to={`/visa/${item.slug}`}
              className="group relative block md:min-h-[375px] min-h-[290px] overflow-hidden rounded-[20px]"
            >
              <img
                src={item.image}
                alt={item.country}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full items-end p-5">
                <h4 className="!text-white">{item.country} Visa</h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MostPopularVisasSection
