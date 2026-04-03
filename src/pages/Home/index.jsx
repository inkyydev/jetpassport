import HomepageFirstSection from '../../components/sections/HomepageFirstSection'
import HomepageHowItWorksSection from '../../components/sections/HomepageHowItWorksSection'
import SelectPassportService from '../../components/sections/SelectPassportService'
import HomepageTrustedSection from '../../components/sections/HomepageTrustedSection'
import ComparisonTable from '../../components/sections/ComparisonTable'
import ApplicationSuspendedSection from '../../components/sections/ApplicationSuspendedSection'
import TestimonialsSection from '../../components/sections/TestimonialsSection'
import FAQSection from '../../components/sections/FAQSection'
import PassportFastSection from '../../components/sections/PassportFastSection'
import { homeFaqs } from '../../lib/faqs'

function HomePage() {
  return (
    <>
      <HomepageFirstSection />
      <HomepageHowItWorksSection />
      <SelectPassportService />
      <HomepageTrustedSection />
      <ComparisonTable />
      <ApplicationSuspendedSection />
      <TestimonialsSection />
      <FAQSection
        title="Frequently asked questions"
        subtitle="Everything you need to know about the product and billing."
        faqs={homeFaqs}
      />
      <PassportFastSection />
    </>
  )
}

export default HomePage
