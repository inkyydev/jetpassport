import Container from '../common/Container'

const defaultPackages = [
  { id: 1, title: 'Standard', duration: '11-15', fee: '$295' },
  { id: 2, title: 'Standard', duration: '11-15', fee: '$295' },
  { id: 3, title: 'Standard', duration: '11-15', fee: '$295' },
  { id: 4, title: 'Standard', duration: '11-15', fee: '$295' },
]

function ServicePackagesSection({
  typeLabel = 'Select Passport Type',
  speedTitle = 'Speed Of Service',
  speedText = 'Choose the best option based on your timeline.',
  typeOptions = [],
  activeSlug = '',
  onTypeChange,
  onPackageAction,
  packageCount = 3,
  showSpeedPackages = true,
}) {
  const packages = defaultPackages.slice(0, packageCount)

  return (
    <section className="pb-[40px] md:pb-[80px] lg:mt-[-60px] mt-[0px] relative z-2">
      <Container>
        <h2 className="text-center md:mb-[36px] mb-[25px]">{typeLabel}</h2>

        <div className="mt-6 flex w-full flex-wrap justify-center gap-[10px] md:gap-[28px]">
          {typeOptions.map((option) => {
            const isActive = option.slug === activeSlug
            return (
              <button
                key={option.slug}
                type="button"
                onClick={() => onTypeChange?.(option.slug)}
                className={`md:text-[16px] text-[14px] relative !rounded-[12px] flex w-[calc((100%-10px)/2)] items-end leading-[1.3] min-h-[100px] !px-[16px] !py-[14px] text-left md:min-h-[110px] md:w-[calc((100%-84px)/4)] lg:w-[calc((100%-168px)/7)] ${
                  isActive ? '!bg-[#04041A] !text-white' : '!bg-[#F2F7FB] !text-[#0C0A14]'
                }`}
              >
                {option.label}
                <span className="absolute top-[10px] right-[10px]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.2646"
                      cy="10.2636"
                      r="6.8427"
                      fill={isActive ? '#FFFFFF' : '#C2C6C9'}
                    />
                    <circle
                      cx="10.264"
                      cy="10.264"
                      r="9.76404"
                      stroke={isActive ? '#FFFFFF' : '#C2C6C9'}
                    />
                  </svg>
                </span>
              </button>
            )
          })}
        </div>

        {showSpeedPackages ? (
          <>
            <div className="mt-[42px] text-center">
              <h4 className="md:text-[26px] text-[20px]">{speedTitle}</h4>
              <p className="mx-auto mt-3 max-w-[640px]">{speedText}</p>
            </div>

            <div
              className={`md:mt-[42px] mt-[25px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${
                packages.length === 3 ? 'mx-auto max-w-[980px] xl:grid-cols-3' : 'xl:grid-cols-4'
              }`}
            >
              {packages.map((pkg) => (
                <article key={pkg.id} className="rounded-[15px] bg-[#F2F7FB] p-[38px_22px_22px] text-center">
                  <h4 className="md:text-[26px] text-[20px]">{pkg.title}</h4>
                  <h3 className="mt-[16px] mb-[8px] text-[32px]">{pkg.duration}</h3>
                  <p className="mt-2">Days Processing Time</p>

                  <button
                    type="button"
                    onClick={() => onPackageAction?.()}
                    className="!my-[16px] shadow-[0_20px_20px_0_rgba(0,0,0,0.25)] !w-full hover:!bg-[transparent] hover:!text-[#04041A]  border border-[#04041A] !bg-[#04041A] text-[16px] !text-white"
                  >
                    Start Order Now
                  </button>

                  <div className="flex items-center justify-between text-[14px]">
                    <span>Service Fee</span>
                    <strong className="text-[22px] leading-none text-[#0C0A14]">{pkg.fee}</strong>
                  </div>
                </article>
              ))}
            </div>
            <div className="h-[1px] bg-[#D3D3E5] md:mt-[83px] mt-[50px]"></div>
          </>
        ) : (
          <div className="h-[1px] bg-[#D3D3E5] md:mt-[50px] mt-[40px]" />
        )}
      </Container>
    </section>
  )
}

export default ServicePackagesSection

