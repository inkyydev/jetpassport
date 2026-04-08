import { Link } from 'react-router-dom'
import Container from '../common/Container'
import checkIcon from '../../assets/checkmark-green.svg'
import xIcon from '../../assets/x-red.svg'
import jetPassportsLogo from '../../assets/logo.svg'
import shapeImg from '../../assets/shape-img.svg'

const rows = [
  {
    label: 'Processing Times',
    guarantee: 'Guarantee',
    notGuaranteed: 'Not Guaranteed',
  },
  {
    label: 'Next Business Day',
    guarantee: '24 Hours',
    notGuaranteed: 'Not Offered',
  },
  {
    label: 'Urgent',
    guarantee: '2 - 3 Business Days',
    notGuaranteed: 'Not Offered',
  },
  {
    label: 'Express',
    guarantee: '3 - 5 Business Days',
    notGuaranteed: 'Not Offered',
  },
  {
    label: 'Rush',
    guarantee: '5 - 7 Business Days',
    notGuaranteed: '10 - 15 Business Days',
  },
  {
    label: 'Standard',
    guarantee: '8 - 12 Business Days',
    notGuaranteed: '30 Business Days',
  },
  {
    label: 'Case Manager',
    guarantee: 'Caring Specialists',
    notGuaranteed: 'Not Offered',
  },
  {
    label: 'Convenience',
    guarantee: 'Simplicity',
    notGuaranteed: 'Hassle, Long Lines',
  },
  {
    label: 'Phone Support',
    guarantee: 'Speak To A Real Person',
    notGuaranteed: 'Updates Via Mail',
  },
  {
    label: 'White Glove Handling',
    guarantee: 'VIP Premium',
    notGuaranteed: 'Not Offered',
  },
]

const comparisonGridCols =
  'grid grid-cols-[180px_230px_230px] md:grid-cols-[250px_250px_250px] lg:grid-cols-[430px_281px_281px]'

function GuaranteeCell({ iconSrc, text, colorClass }) {
  return (
    <div
      className={`flex min-w-0 items-center justify-start gap-[10px] md:gap-[15px] ${colorClass}`}
    >
      <img src={iconSrc} alt="" className="h-[28px] w-[28px] shrink-0" />
      <span className="min-w-0 break-words">{text}</span>
    </div>
  )
}

function ComparisonTable() {
  return (
    <section className="bg-[#F2F7FB] py-14 md:py-20">
      <Container>
        <h2 className="text-[36px] max-w-[778px] leading-[1.2] font-medium text-heading md:text-[46px]">
          Get Faster Turnaround and Better Service Than the Post Office
        </h2>
        <p className="mt-4 max-w-[520px] text-[13px] text-[#4A515D] md:text-[14px]">
          Same-day and next-day services available.
          <br />
          Open 7 days a week, including holidays.
        </p>

        <div className="mt-6 rounded-[24px] lg:rounded-tr-none bg-white lg:px-[80px] pb-[45px] pt-[30px] lg:pt-none md:px-[40px] px-[20px] relative">
          <div className="absolute bottom-[100%] right-0 hidden lg:block ">
            <img src={shapeImg} alt="shape" />
          </div>
          <div className="overflow-x-auto">
            <div className="w-max max-w-none">
              <div className={`${comparisonGridCols} px-[19px]`}>
                <div className="pb-[19px] px-3"></div>
                <div className="pb-[19px] px-3">
                  <img
                    src={jetPassportsLogo}
                    alt="Jet Passports"
                    className="h-auto max-w-[206px]"
                    width={206}
                    height={34}
                  />
                </div>
                <div className="mt-[2px] pb-[19px] px-3 text-[18px] font-medium md:mb-[16px] md:mt-0 md:text-[22px]">
                  Post Office
                </div>
              </div>

              <div className="rounded-[15px] bg-[#F2F7FB] px-[19px]">
                {rows.map((row, idx) => (
                  <div
                    key={row.label}
                    className={`${comparisonGridCols} min-w-0 ${
                      idx === 0 ? '' : 'border-t border-[#D0D4EA]'
                    }`}
                  >
                    <div className="min-w-0 py-[19px] pl-[13px] pr-3 text-left text-[14px] text-[#0C0A14] md:text-[16px]">
                      {row.label}
                    </div>
                    <div className="min-w-0 px-3 py-[14px] md:py-[19px] text-[14px] md:text-[16px]">
                      <GuaranteeCell
                        iconSrc={checkIcon}
                        text={row.guarantee}
                        colorClass="text-[#10101A]"
                      />
                    </div>
                    <div className="min-w-0 py-[14px] pl-3 pr-0 md:py-[19px] text-[14px] md:text-[16px]">
                      <GuaranteeCell
                        iconSrc={xIcon}
                        text={row.notGuaranteed}
                        colorClass="text-[#10101A]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[16px] flex justify-end">
            <Link to="/passport/new-passport" className="btn">
              Start Your Application
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ComparisonTable
