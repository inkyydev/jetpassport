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

function GuaranteeCell({ iconSrc, text, colorClass }) {
  return (
    <div className={`flex items-center justify-start md:gap-[15px] gap-[10px] ${colorClass}`}>
      <img src={iconSrc} alt="" className="h-[28px] w-[28px]" />
      <span>{text}</span>
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
            <div className=" grid grid-cols-[180px_230px_230px] md:grid-cols-[250px_250px_250px] lg:grid-cols-[430px_281px_281px] px-[19px]">
              <div className="pb-[19px] px-3"></div>
              <div className="pb-[19px] px-3">
                <img src={jetPassportsLogo} alt="logo" />
              </div>
              <div className="md:text-[22px] text-[18px] mt-[2px] md:mt-0 font-medium md:mb-[16px] pb-[19px] px-3">
                Post Office
              </div>
            </div>
            <div className="bg-[#F2F7FB] w-[max-content] px-[19px] rounded-[15px]">
              <table className=" w-full border-collapse">
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={row.label} className={idx === 0 ? '' : 'border-t border-[#D0D4EA]'}>
                      <td className=" pl-[13px] min-w-[180px] md:min-w-[250px] lg:min-w-[430px]  py-[19px] pr-3 text-left text-[#0C0A14] text-[14px] md:text-[16px]">
                        {row.label}
                      </td>
                      <td className="min-w-[230px] md:min-w-[250px] lg:min-w-[281px] md:py-[19px] py-[14px] px-3 w-1/2 text-[14px] md:text-[16px]">
                        <GuaranteeCell
                          iconSrc={checkIcon}
                          text={row.guarantee}
                          colorClass="text-[#10101A]"
                        />
                      </td>
                      <td className="min-w-[230px] md:min-w-[250px] lg:min-w-[281px] md:py-[19px] py-[14px] pl-3 w-1/2 text-[14px] md:text-[16px]">
                        <GuaranteeCell
                          iconSrc={xIcon}
                          text={row.notGuaranteed}
                          colorClass="text-[#10101A]"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
