import Container from '../common/Container'
import starsImg from '../../assets/stars-img.svg'
import verifiedImg from '../../assets/verified-icon.svg'
import { testimonials } from '../../lib/testimonials'

function TestimonialsSection() {
  return (
    <section className="p-[55px_0_45px]">
      <Container>
        <h2 className="text-center max-w-[460px] mx-auto">What Travelers Say About Jet Passport</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-[12px] bg-[#F2F7FB]  md:p-[32px] p-[25px_20px] flex flex-col"
            >
              <img src={starsImg} alt="Rating stars" className="h-auto w-[116px]" />

              <p className="my-[16px] text-[#4A515D]">{`"${item.quote}"`}</p>

              <div className="flex items-center gap-[12px] mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-[48px] w-[48px] rounded-full object-cover"
                />
                <div>
                  <h5 className="text-[14px] md:text-[16px] text-[#0C0A14] font-medium flex items-center gap-[5px]">
                    {item.name}{' '}
                    <img src={verifiedImg} alt="Verified" className="w-[16px] h-[16px]" />
                  </h5>
                  <p className="text-[14px] text-[#4A515D] !underline">{item.username}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-[20px] md:mt-[33px]">
          <button className="btn">Show More</button>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
