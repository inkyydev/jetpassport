import Container from '../common/Container'
import cloudBgPhotoServices from '../../assets/cloud-bg-photo-services.png'

function PhotoServicesExpeditedSupportSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0D2E42] py-[50px] bg-[position:right_84px] bg-no-repeat bg-[length:auto_100%] md:py-[70px] md:bg-[position:right_top] lg:py-[115px]"
      style={{
        backgroundImage: `url(${cloudBgPhotoServices})`,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-[25px] lg:grid-cols-2">
          <div>
            <h2 className="max-w-[520px] text-white text-[30px] md:text-[36px] lg:text-[52px]">
              Photo Services + Expedited Passport &amp; Visa Support
            </h2>
          </div>

          <div className="rounded-[20px] bg-white px-[20px] py-[30px] md:p-[40px] lg:rounded-[25px] lg:px-[50px] lg:py-[45px]">
            <p>
              Our photo services integrate seamlessly with our expedited passport and visa services,
              allowing you to complete your application efficiently in one place. We also offer
              document review and application assistance when needed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PhotoServicesExpeditedSupportSection
