import { Link } from 'react-router-dom'
import Container from '../common/Container'
import redHouseImg from '../../assets/red-house.svg'

function FloridaRedHouseSection() {
  return (
    <section className="bg-[#0D2E42]">
      <Container>
        <div className="grid grid-cols-1 items-end md:gap-10 gap-0 md:grid-cols-2">
          <div className="text-white pb-[0px] lg:pb-[109px] md:pb-[80px] pt-[50px] md:pt-[80px] lg:pt-[109px]">
            <h2 className="text-white max-w-[524px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="md:m-[7px_0_22px] m-[12px_0_20px] max-w-[520px] text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/passport/new-passport" className="btn">
              Start Your Application
            </Link>
          </div>

          <div className="flex justify-center md:justify-end !mr-0 !ml-0 md:ml-[-123px] lg:mr-[-120px] ">
            <img src={redHouseImg} alt="Florida service visual" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FloridaRedHouseSection
