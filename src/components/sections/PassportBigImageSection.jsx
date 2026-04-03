import bigImg from '../../assets/big-img.png'

function PassportBigImageSection() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1440px]">
        <img src={bigImg} alt="Passport" className="w-full" />
      </div>
    </section>
  )
}

export default PassportBigImageSection

