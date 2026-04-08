import { useMemo, useState } from 'react'
import Container from '../common/Container'
import xRedIcon from '../../assets/x-red-icon.svg'
import arrowIcon from '../../assets/arrow-icon.svg'
import correctImgIcon from '../../assets/correct-img-icon.svg'
import { photoExampleGroups } from '../../pages/PassportVisaPhotoServices/data'

function PhotoExamplesSection() {
  const [activeGroupId, setActiveGroupId] = useState(photoExampleGroups[0]?.id || '')
  const activeGroup = useMemo(
    () => photoExampleGroups.find((group) => group.id === activeGroupId) || photoExampleGroups[0],
    [activeGroupId]
  )
  const [activeExampleIndex, setActiveExampleIndex] = useState(0)
  const activeExample = activeGroup.examples[activeExampleIndex] || activeGroup.examples[0]
  const isCorrect = activeExample.status === 'correct'

  const handleGroupChange = (groupId) => {
    setActiveGroupId(groupId)
    setActiveExampleIndex(0)
  }

  return (
    <section className="lg:pb-[101px] md:pb-[70px] pb-[50px]">
      <Container className="!max-w-[1300px]">
        <div className="rounded-[20px] md:py-[67px] py-[35px] bg-[#CFDFE8] md:rounded-[40px] px-[20px] md:px-[40px] lg:p-[80px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <h2 className="font-medium text-[#0C0A14]">
                Photo Examples
              </h2>
              <ul className="mt-[8px]">
                {photoExampleGroups.map((group) => {
                  const isActive = group.id === activeGroup.id
                  return (
                    <li key={group.id}>
                      <button
                        type="button"
                        onClick={() => handleGroupChange(group.id)}
                        className={`flex rounded-[0px] w-full items-center justify-between border-b border-[#AFC7D8] py-[13px] px-[0] text-left lg:text-[20px] md:text-[18px] text-[16px] font-medium ${
                          isActive ? 'text-[#0C0A14]' : 'text-[#3F4652]'
                        }`}
                      >
                        <span>{group.label}</span>
                        <span className={`${isActive ? 'opacity-100' : 'opacity-0'}`} aria-hidden>
                          <img src={arrowIcon} alt="arrow" />
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <div className="relative">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={activeExample.image}
                    alt={activeExample.thumbnailAlt}
                    className=" w-full object-cover aspect-[1/1]"
                  />
                </div>

                <div className="absolute md:bottom-[20px] bottom-[10px] left-0 w-full md:p-[20px] p-[10px] flex items-center gap-[6px] overflow-x-auto !pb-0">
                  {activeGroup.examples.map((example, index) => {
                    const isActive = index === activeExampleIndex
                    return (
                      <button
                        key={example.id}
                        type="button"
                        onClick={() => setActiveExampleIndex(index)}
                        className={`flex-1 p-0 aspect-[1/1] shrink-0 overflow-hidden rounded-[8px] border-2 ${
                          isActive ? 'border-[#0D2E42]' : '!border-transparent'
                        }`}
                        aria-label={`Open example ${index + 1}`}
                      >
                        <img
                          src={example.image}
                          alt={example.thumbnailAlt}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-[10px] flex items-start md:gap-[20px] gap-[10px] rounded-[15px] bg-[#0D2E42] px-[20px] py-[16px] text-white">
                <img
                  src={isCorrect ? correctImgIcon : xRedIcon}
                  alt=""
                  aria-hidden
                  className="mt-[2px] h-[18px] w-[18px] shrink-0"
                />
                <p className="text-white text-[14px] max-w-[350px]">{activeExample.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PhotoExamplesSection
