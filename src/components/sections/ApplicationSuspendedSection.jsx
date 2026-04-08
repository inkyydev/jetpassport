import { Link } from 'react-router-dom'
import Container from '../common/Container'
import applicationImg from '../../assets/application-img.png'

function ApplicationSuspendedSection({
  title = 'What if my application is suspended?',
  description = `We understand that a suspended application can be concerning, but rest assured,
we're here to help. Our team is promptly notified by the Department of State if
your passport application is suspended or denied for any reason. We will contact you
to discuss the reason for the suspension and take all necessary steps to resolve the
issue.

In most cases, we can address suspensions within 24 hours, often requiring little to
no additional documentation.`,
  image = applicationImg,
  imageAlt = 'Application',
  ctaLabel = 'Start Your Application',
  ctaTo = '/passport/new-passport',
  showCta = true,
  withBackgroundGradient = true,
}) {
  return (
    <section
      style={
        withBackgroundGradient
          ? {
              backgroundImage:
                'linear-gradient(to bottom, #F2F7FB 0%, #F2F7FB 50%, #ffffff 50%, #ffffff 100%)',
            }
          : undefined
      }
      className=""
    >
      <Container className="!max-w-[1300px]">
        <div className="rounded-[20px] md:rounded-[40px] bg-[#CFDFE8] p-[30px_20px] md:p-[45px_40px] lg:p-[64px_80px]">
          <div className="grid grid-cols-1 items-center md:gap-10 gap-[25px] md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2 pl-[0px] lg:pl-[20px]">
              <h2 className="text-[32px] max-w-[460px] leading-[1.2] font-medium text-heading md:text-[42px]">
                {title}
              </h2>

              <p className="mt-4 max-w-[481px] whitespace-pre-line text-[14px] leading-[1.7] text-[#4A515D]">
                {description}
              </p>

              {showCta ? (
                <div className="mt-[20px]">
                  <Link
                    to={ctaTo}
                    className="btn !bg-[#0D2E42] !text-white !border-[#0D2E42] hover:!bg-[#fff] hover:!text-[#0D2E42] hover:!border-[#0D2E42]"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ApplicationSuspendedSection
