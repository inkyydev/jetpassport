import Container from '../common/Container'
import checkmarkIcon from '../../assets/checkmark-icon.svg'
import expeditedImg from '../../assets/expedited-img.png'
import digitalImg from '../../assets/digital-img.png'

function BulletItem({ children }) {
  return (
    <li className="flex items-center md:gap-[15px] gap-[10px]">
      <img src={checkmarkIcon} alt="" aria-hidden className="h-[16px] w-[16px] shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function ExpeditedDigitalPhotoOptionsSection() {
  return (
    <section className="py-[50px] md:py-[73px]">
      <Container className="!max-w-[1071px]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1 overflow-hidden rounded-[20px]">
            <img
              src={expeditedImg}
              alt="Expedited photo services"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[#0C0A14]">
              Expedited &amp; Same-Day Photo Services
            </h2>
            <p className="mt-[19px] text-[16px] font-medium text-[#0C0A14] md:text-[18px]">
              Fast Photo Processing for Urgent Travel
            </p>
            <p className="mt-2  text-[#31323B]">
              For urgent travel needs, we offer expedited and same-day photo services to support:
            </p>
            <ul className="my-[20px] space-y-3 md:my-[29px]">
              <BulletItem>Same-day and emergency passport applications</BulletItem>
              <BulletItem>Expedited passport renewals</BulletItem>
              <BulletItem>Urgent visa submissions</BulletItem>
              <BulletItem>Embassy or consulate appointments</BulletItem>
            </ul>
            <p>
              Most photos are completed within minutes, allowing you to proceed immediately with
              your passport or visa application.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:mt-10 md:grid-cols-2 md:gap-12">
          <div className="order-1 md:order-1">
            <h2 className="font-medium leading-[1.15] text-[#0C0A14]">
              Digital &amp; Printed Photo Options
            </h2>
            <p className="mt-[19px] text-[16px] font-medium leading-[1.4] text-[#0C0A14] md:text-[18px]">
              We offer flexible photo delivery options based on your application requirements:
            </p>
            <ul className="my-[20px] space-y-3 md:my-[29px]">
              <BulletItem>High-quality printed photos</BulletItem>
              <BulletItem>Digital photo files for online applications</BulletItem>
              <BulletItem>Photos formatted for embassy or government portals</BulletItem>
            </ul>
            <p>
              Digital files are optimized to meet upload specifications for passport and visa
              systems.
            </p>
          </div>

          <div className="order-2 md:order-2 overflow-hidden rounded-[20px]">
            <img
              src={digitalImg}
              alt="Digital and printed photo options"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExpeditedDigitalPhotoOptionsSection
