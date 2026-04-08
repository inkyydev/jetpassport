import VisaEvisaArchiveHero from '../../components/sections/VisaEvisaArchiveHero'
import FAQSection from '../../components/sections/FAQSection'
import visaBgImage from '../../assets/visa-bg-image.png'
import { homeFaqs } from '../../lib/faqs'

function FAQPage() {
  return (
    <>
      <VisaEvisaArchiveHero
        title="Frequently Asked Questions"
        description="Find answers to your most pressing questions about our passport services and processes."
        ctaLabel="Start Your Application"
        ctaTo="/passport/new-passport"
        backgroundImage={visaBgImage}
        showSearch
        searchPlaceholder="Search FAQs"
      />

      <FAQSection
        className="!pt-[0px] !pb-[50px] md:mt-[-60px] mt-[0px] relative z-2"
        faqs={homeFaqs}
      />
    </>
  )
}

export default FAQPage
