import VisaEvisaArchiveHero from '../../components/sections/VisaEvisaArchiveHero'
import VisaEvisaArchiveGrid from '../../components/sections/VisaEvisaArchiveGrid'
import PassportFastSection from '../../components/sections/PassportFastSection'
import evisaBgImage from '../../assets/evisa-bg-image.png'
import { evisaItems } from './data'

function EvisasPage() {
  return (
    <>
      <VisaEvisaArchiveHero
        title="We Offer EVisas for Various Countries"
        description="Browse through each country to learn the various visa requirements and document types."
        backgroundImage={evisaBgImage}
        ctaTo="#evisa-archive-list"
      />
      <VisaEvisaArchiveGrid
        sectionId="evisa-archive-list"
        items={evisaItems}
        basePath="/evisas"
        labelSuffix="eVisa"
      />
      <PassportFastSection title="Other Countries Visa" />
    </>
  )
}

export default EvisasPage
