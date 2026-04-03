import VisaEvisaSingleView from '../../components/common/VisaEvisaSingleView'
import visaBgImage from '../../assets/visa-bg-image.png'
import { visaItems } from '../Visa/data'

function VisaSinglePage() {
  return (
    <VisaEvisaSingleView
      allItems={visaItems}
      basePath="/visa"
      labelSuffix="Visa"
      backgroundImage={visaBgImage}
      requirementsSectionId="visa-requirements"
      buildHeroTitle={(entry) =>
        entry.singleHeroTitle ?? `We Offer Visas for ${entry.country}`
      }
    />
  )
}

export default VisaSinglePage
