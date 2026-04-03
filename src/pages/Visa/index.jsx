import VisaEvisaArchiveHero from '../../components/sections/VisaEvisaArchiveHero'
import VisaEvisaArchiveGrid from '../../components/sections/VisaEvisaArchiveGrid'
import PassportFastSection from '../../components/sections/PassportFastSection'
import visaBgImage from '../../assets/visa-bg-image.png'
import { visaItems } from './data'

function VisaPage() {
  return (
    <>
      <VisaEvisaArchiveHero
        title="We Offer Visas for Various Countries"
        description="Browse through each country to learn the various visa requirements and document types."
        backgroundImage={visaBgImage}
        ctaTo="#visa-archive-list"
      />
      <VisaEvisaArchiveGrid
        sectionId="visa-archive-list"
        items={visaItems}
        basePath="/visa"
        labelSuffix="Visa"
      />
      <PassportFastSection title="Other Countries Visa" />
    </>
  )
}

export default VisaPage
