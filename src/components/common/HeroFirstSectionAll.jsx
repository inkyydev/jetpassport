import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cloudImg from '../../assets/cloud-img.png'
import { passportServices } from '../../pages/Passport/data'
import { visaItems } from '../../pages/Visa/data'
import { evisaItems } from '../../pages/Evisas/data'
import Container from './Container'

const serviceTypeMap = {
  passport: {
    getItems: () => passportServices,
    getLabel: (item) => item.title,
    getPath: (slug) => `/passport/${slug}`,
  },
  visa: {
    getItems: () => visaItems,
    getLabel: (item) => item.country,
    getPath: (slug) => `/visa/${slug}`,
  },
  evisa: {
    getItems: () => evisaItems,
    getLabel: (item) => item.country,
    getPath: (slug) => `/evisas/${slug}`,
  },
}

function HeroFirstSectionAll({
  title,
  description,
  backgroundImage,
  paddingClassName = 'pt-[150px] pb-[180px] md:pt-[180px] md:pb-[220px]',
}) {
  const navigate = useNavigate()
  const [activeType, setActiveType] = useState('passport')

  const options = useMemo(() => serviceTypeMap[activeType].getItems(), [activeType])
  const [selectedSlug, setSelectedSlug] = useState(options[0]?.slug ?? '')

  const handleTypeChange = (type) => {
    setActiveType(type)
    const nextItems = serviceTypeMap[type].getItems()
    setSelectedSlug(nextItems[0]?.slug ?? '')
  }

  const handleGetStarted = () => {
    if (!selectedSlug) return
    navigate(serviceTypeMap[activeType].getPath(selectedSlug))
  }

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat ${paddingClassName}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center text-white">
          <h1 className="text-white">{title}</h1>
          <p className="mx-auto mt-5 max-w-[560px] text-white/90">{description}</p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleTypeChange('passport')}
              className={`${activeType === 'passport' ? '!bg-CFDFE8 !text-[#0D2E42] !shadow-[0_15px_15px_rgba(0,0,0,0.25)]' : '!bg-[#0D2E42] !text-white'} !px-[36px] !py-[10px]`}
            >
              Passport
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('visa')}
              className={`${activeType === 'visa' ? '!bg-CFDFE8 !text-[#0D2E42] !shadow-[0_15px_15px_rgba(0,0,0,0.25)]' : '!bg-[#0D2E42] !text-white'} !px-[36px] !py-[10px]`}
            >
              Visa
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('evisa')}
              className={`${activeType === 'evisa' ? '!bg-CFDFE8 !text-[#0D2E42] !shadow-[0_15px_15px_rgba(0,0,0,0.25)]' : '!bg-[#0D2E42] !text-white'} md:!px-[36px] !px-[20px] !py-[10px]`}
            >
              E Visa
            </button>
          </div>

          <p className="my-[15px] text-[12px] text-white">
            Select Your Service and passport or Visa Type that you Need.
          </p>

          <div className="mx-auto gap-[10px] flex max-w-[560px] rounded-[999px] border-1 border-[#fff] bg-white p-1 shadow-[0_40px_50px_rgba(0,0,0,0.25)]">
            <select
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
              className="w-full rounded-[999px] px-4 py-2 text-[#0C0A14] outline-none"
            >
              {options.map((item) => (
                <option key={item.id} value={item.slug}>
                  {serviceTypeMap[activeType].getLabel(item)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleGetStarted}
              className="!bg-[#CFDFE8] hover:!bg-[#10101A] hover:!text-white !text-[#0C0A14] whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <img src={cloudImg} alt="cloud" className="w-full" />
      </div>
    </section>
  )
}

export default HeroFirstSectionAll
