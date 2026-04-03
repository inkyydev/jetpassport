import { Link } from 'react-router-dom'
import Container from '../common/Container'
import cloudImg from '../../assets/cloud-img.png'

function VisaEvisaArchiveHero({
  title,
  description,
  backgroundImage,
  ctaLabel = 'Get Started Today',
  ctaTo = '/contact',
}) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-[100px] pb-[100px] md:pt-[160px] md:pb-[20.48vw]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <div className="mx-auto max-w-[900px] text-center text-white">
          <h1 className="text-white max-w-[620px] mx-auto">{title}</h1>
          <p className="mx-auto mt-5 max-w-[520px] text-white">{description}</p>
          <Link to={ctaTo} className="btn mt-8 inline-block shadow-[0_20px_20px_0_rgba(0,0,0,0.25)]">
            {ctaLabel}
          </Link>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <img src={cloudImg} alt="" className="w-full" />
      </div>
    </section>
  )
}

export default VisaEvisaArchiveHero
