import VisaEvisaSingleView from '../../components/common/VisaEvisaSingleView'
import evisaBgImage from '../../assets/evisa-bg-image.png'
import { evisaItems } from '../Evisas/data'

function EvisasSinglePage() {
  return (
    <VisaEvisaSingleView
      allItems={evisaItems}
      basePath="/evisas"
      labelSuffix="eVisa"
      backgroundImage={evisaBgImage}
      requirementsSectionId="evisa-requirements"
      buildHeroTitle={(entry) =>
        entry.singleHeroTitle ?? `Get Your ${entry.country} eVisa`
      }
    />
  )
}

export default EvisasSinglePage
