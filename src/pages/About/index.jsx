import cloudImg from '../../assets/cloud-img.png'
import aboutHeroBg from '../../assets/about-img-bg.png'
import aboutTrustedImg from '../../assets/about-trusted-img.png'
import Container from '../../components/common/Container'
import AboutServiceHighlightsSection from '../../components/sections/AboutServiceHighlightsSection'
import ApplicationSuspendedSection from '../../components/sections/ApplicationSuspendedSection'
import ContactPage from '../Contact'

function AboutPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-[100px] pb-[100px] md:pt-[160px] md:pb-[22vw]"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        <Container>
          <div className="mx-auto max-w-[900px] text-center text-white">
            <h1 className="mx-auto max-w-[620px] text-white">About Us</h1>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <img src={cloudImg} alt="" className="w-full" />
        </div>
      </section>

      <AboutServiceHighlightsSection />

      <ApplicationSuspendedSection
        title="Your Trusted Passport Expediting Service"
        description={`We are a private business registered with U.S. Passport Agencies under the name Travel Center Tours, explicitly authorized by U.S. Government to provide a specific Hand-Carry Expedited Passport Services. As approved, authorized and registered commercial courier, we are explicitly permitted to offer this specialized service on behalf of U.S. citizens who require Hand-Carry Expedited Passport processing through authorized channels.

At Jet Passports, we recognize the need for secure, fast and dependable passport solutions. As a leading passport courier in the United States, we specialize in expedited passport applications for individuals, families, and businesses. Whether you're preparing for a last-minute trip, managing an urgent business assignment abroad, or requiring a quick passport renewal, we're here to make the process secure, seamless and stress-free.`}
        ctaLabel="Start Your Application"
        ctaTo="/passport/new-passport"
        image={aboutTrustedImg}
        imageAlt="Trusted passport expediting service"
        withBackgroundGradient={false}
      />

      <ContactPage className="!pb-[50px]" />
    </>
  )
}

export default AboutPage
