import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../common/Container'
import heroImage from '../../assets/hero-img.png'
import cloudImg from '../../assets/cloud-img.png'
import heroPassImg from '../../assets/homepage-hero-img.png'
import { visaItems } from '../../pages/Visa/data'

const statesAndTerritories = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Puerto Rico',
  'Guam',
  'U.S. Virgin Islands',
  'American Samoa',
  'Northern Mariana Islands',
  'District of Columbia',
]

export default function HeroFirstSection() {
  const navigate = useNavigate()
  const [citizenOf, setCitizenOf] = useState('USA')
  const [residingIn, setResidingIn] = useState('Florida')
  const [travelingTo, setTravelingTo] = useState('china')

  const handleVisaOptionsClick = () => {
    navigate(`/visa/${travelingTo}`, { state: { citizenOf, residingIn } })
  }

  return (
    <section
      className="pt-[100px] md:pt-[159px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Container>
        <div className="grid grid-cols-1 items-end gap-2 md:grid-cols-2">
          <div className="md:pb-[150px] lg:pb-[20.8vw] relative z-2 lg:mr-[-150px]">
            <h1 className="text-[#fff]">Get Your U.S. Passport Fast and Securely</h1>
            <p className="max-w-[488px] my-[21px] text-[#fff]">
              Jet Passports is a trusted online U.S. passport courier service. Our nationwide
              couriers and expert team make the process fast, secure, and hassle-free—no passport
              office visit required. Get your passport when you need it.
            </p>
            <div className="max-w-[606px]">
              <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr] ">
                <p className="text-[12px] text-[#fff]">Citizen Of:</p>
                <p className="text-[12px] text-[#fff]">Residing In:</p>
                <p className="text-[12px] text-[#fff]">Traveling To:</p>
                <div />
              </div>

              <div className="mt-2 bg-[#fff] shadow-[0_40px_50px_0_rgba(6,9,21,0.25)] p-[20px] lg:p-[5px] items-center rounded-[20px] lg:rounded-[100px] grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
                <div className="">
                  <label htmlFor="citizen-of" className="text-xs text-body/60 lg:hidden">
                    Citizen Of:
                  </label>
                  <select
                    id="citizen-of"
                    value={citizenOf}
                    onChange={(event) => setCitizenOf(event.target.value)}
                    className="w-full  lg:pl-[20px] bg-transparent text-sm text-heading outline-none lg:mt-0"
                  >
                    <option value="USA">USA</option>
                  </select>
                </div>

                <div className="">
                  <label htmlFor="residing-in" className="text-xs text-body/60 lg:hidden">
                    Residing In:
                  </label>
                  <select
                    id="residing-in"
                    value={residingIn}
                    onChange={(event) => setResidingIn(event.target.value)}
                    className="w-full py-[5px] lg:border-l border-black/10 lg:pl-[20px] bg-transparent text-heading outline-none lg:mt-0 h-full"
                  >
                    {statesAndTerritories.map((place) => (
                      <option key={place} value={place}>
                        {place}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="">
                  <label htmlFor="traveling-to" className="text-xs text-body/60 lg:hidden">
                    Traveling To:
                  </label>
                  <select
                    id="traveling-to"
                    value={travelingTo}
                    onChange={(event) => setTravelingTo(event.target.value)}
                    className="w-full lg:pl-[20px] py-[5px] lg:border-l border-black/10 bg-transparent text-heading outline-none lg:mt-0"
                  >
                    {visaItems.map((item) => (
                      <option key={item.id} value={item.slug}>
                        {item.country}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleVisaOptionsClick}
                  className="hover:bg-black hover:text-white"
                >
                  Get Visa Options
                </button>
              </div>
            </div>
          </div>
          <div className="xl:mr-[-18.2vw] xl:w-[700px]  lg:ml-[-50px] mb-[7.81vw] mt-[25px] md:mt-[0]">
            <img src={heroPassImg} alt="passport" />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img src={cloudImg} alt="cloud" className="w-full" />
      </div>
    </section>
  )
}
