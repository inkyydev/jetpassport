import HomepageHowItWorksSection from '../../components/sections/HomepageHowItWorksSection'
import SelectPassportService from '../../components/sections/SelectPassportService'
import FloridaRedHouseSection from '../../components/sections/FloridaRedHouseSection'
import MostPopularVisasSection from '../../components/sections/MostPopularVisasSection'
import WhyChooseSection from '../../components/sections/WhyChooseSection'
import ComparisonTable from '../../components/sections/ComparisonTable'
import TestimonialsSection from '../../components/sections/TestimonialsSection'
import PassportFastSection from '../../components/sections/PassportFastSection'
import HeroFirstSectionAll from '../../components/common/HeroFirstSectionAll'
import californiaHeroBg from '../../assets/california-bg.png'

function CaliforniaPage() {
  return (
    <>
      <HeroFirstSectionAll
        title="California Passport & Visa Expedite Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        backgroundImage={californiaHeroBg}
        paddingClassName="pt-[100px] !pb-[100px] md:pt-[159px] md:!pb-[19vw]"
      />
      <HomepageHowItWorksSection />
      <SelectPassportService />
      <FloridaRedHouseSection />
      <MostPopularVisasSection />
      <WhyChooseSection />
      <ComparisonTable />
      <TestimonialsSection />
      <PassportFastSection />
    </>
  )
}

export default CaliforniaPage
