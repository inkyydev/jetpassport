import cloudImg from '../../assets/cloud-img.png'
import heroBg from '../../assets/passport-visa-services.png'
import Container from '../../components/common/Container'
import ApplicationSuspendedSection from '../../components/sections/ApplicationSuspendedSection'
import accurateImg from '../../assets/accurate-img.png'
import UsPassportPhotosSection from '../../components/sections/UsPassportPhotosSection'
import PhotoExamplesSection from '../../components/sections/PhotoExamplesSection'
import InternationalPassportPhotosSection from '../../components/sections/InternationalPassportPhotosSection'
import EmbassyConsulateVisaPhotosSection from '../../components/sections/EmbassyConsulateVisaPhotosSection'
import ExpeditedDigitalPhotoOptionsSection from '../../components/sections/ExpeditedDigitalPhotoOptionsSection'
import WhyChoosePassportVisaPhotoSection from '../../components/sections/WhyChoosePassportVisaPhotoSection'
import PhotoServicesExpeditedSupportSection from '../../components/sections/PhotoServicesExpeditedSupportSection'
import PassportVisaPhotosCtaSection from '../../components/sections/PassportVisaPhotosCtaSection'

function PassportVisaPhotoServicesPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-[100px] pb-[100px] md:pt-[160px] md:pb-[22vw]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Container>
          <div className="mx-auto max-w-[544px] text-center text-white">
            <h1 className="text-white">Passport &amp; Visa Photo Services</h1>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <img src={cloudImg} alt="cloud" className="w-full" />
        </div>
      </section>

      <ApplicationSuspendedSection
        title="Accurate, Fast & Accepted Worldwide"
        description={`We provide professional passport and visa photo services that meet U.S. government, foreign government, embassy, and consulate requirements. Our photo services are designed to support standard and expedited passport and visa applications, ensuring accuracy, compliance, and fast turnaround.

Whether you need photos for a U.S. passport, foreign passport, or international visa, our experienced team ensures your photos meet the exact specifications required-helping you avoid delays, rejections, or resubmissions.`}
        image={accurateImg}
        imageAlt="Passport and visa photo service"
        showCta={false}
        withBackgroundGradient={false}
      />
      <UsPassportPhotosSection />
      <PhotoExamplesSection />
      <InternationalPassportPhotosSection />
      <EmbassyConsulateVisaPhotosSection />
      <ExpeditedDigitalPhotoOptionsSection />
      <WhyChoosePassportVisaPhotoSection />
      <PhotoServicesExpeditedSupportSection />
      <PassportVisaPhotosCtaSection />
    </>
  )
}

export default PassportVisaPhotoServicesPage
