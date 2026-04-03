import Container from '../common/Container'
import numberOne from '../../assets/number-1.svg'
import numberTwo from '../../assets/number-2.svg'
import numberThree from '../../assets/number-3.svg'

const steps = [
  {
    id: 1,
    title: 'Place Your Order',
    description: 'Complete our easy online form in minutes and let us handle the rest.',
    numberAsset: numberOne,
  },
  {
    id: 2,
    title: 'Send Documents',
    description: 'Send your application, photo, and documents with our secure shipping labels.',
    numberAsset: numberTwo,
  },
  {
    id: 3,
    title: 'Receive Passport',
    description: 'Your new passport is issued quickly and sent to your door with tracking.',
    numberAsset: numberThree,
  },
]

function HomepageHowItWorksSection({ className = '' }) {
  return (
    <section
      className={`pb-[50px] md:pb-[69px] md:mt-[0px] lg:mt-[-80px] relative z-2 ${className}`.trim()}
    >
      <Container>
        <div className="text-center">
          <h2>How It Works</h2>
          <p className="mt-[6px]">Simple steps to start processing your passport quickly.</p>
        </div>

        <div className="mt-[20px] md:mt-10 text-center grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="  text-center">
              <img
                src={step.numberAsset}
                alt={`Step ${step.id}`}
                className="mx-auto w-[200px] md:w-auto"
              />
              <h3 className="relative mb-[10px] md:mb-[22px] mt-[-20px]">{step.title}</h3>
              <p className="mx-auto max-w-[325px]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HomepageHowItWorksSection
