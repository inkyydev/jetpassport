import Container from '../common/Container'

function PageIntro({ title, description }) {
  return (
    <section>
      <Container>
        <div className="max-w-3xl space-y-4">
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </Container>
    </section>
  )
}

export default PageIntro
