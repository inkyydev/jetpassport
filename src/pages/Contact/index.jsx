import { useState } from 'react'
import Container from '../../components/common/Container'
import { buildContactPayload, contactInitialValues } from './data'

function ContactPage({ className = '' }) {
  const [formValues, setFormValues] = useState(contactInitialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = buildContactPayload(formValues)
    console.log('contact_payload', payload)
  }

  return (
    <section className={`bg-white pb-20 pt-10 md:pb-24 md:pt-14 ${className}`.trim()}>
      <Container>
        <div className="mx-auto max-w-[480px]">
          <p className="text-center text-[14px] font-medium text-[#ED473D]">Contact us</p>
          <h1 className="mx-auto mt-3 text-center lg:text-[48px] text-[32px] !leading-[1.2] md:text-[36px]">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 text-center text-[16px] !leading-[1.6] text-[#31323B] md:text-[18px] lg:text-[20px]">
            We&apos;d love to hear from you. Please fill out this form.
          </p>

          <form className="md:mt-[39px] mt-[20px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-[6px] block text-[14px] font-medium text-[#0C0A14]"
                >
                  First name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="h-[44px] w-full rounded-[8px] border-0 bg-[#F2F7FB] px-[14px] text-[14px] text-[#31323B] placeholder:text-[#31323B] outline-none focus-visible:ring-2 focus-visible:ring-[#D92D20]/25 md:text-[16px]"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-[6px] block text-[14px] font-medium text-[#0C0A14]"
                >
                  Last name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="h-[44px] w-full rounded-[8px] border-0 bg-[#F2F7FB] px-[14px] text-[14px] text-[#31323B] placeholder:text-[#31323B] outline-none focus-visible:ring-2 focus-visible:ring-[#D92D20]/25 md:text-[16px]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="mb-[6px] block text-[14px] font-medium text-[#0C0A14]">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formValues.email}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border-0 bg-[#F2F7FB] px-[14px] text-[14px] text-[#31323B] placeholder:text-[#31323B] outline-none focus-visible:ring-2 focus-visible:ring-[#D92D20]/25 md:text-[16px]"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-[6px] block text-[14px] font-medium text-[#0C0A14]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave us a message..."
                value={formValues.message}
                onChange={handleChange}
                className="h-[160px] w-full resize-none rounded-[8px] border-0 bg-[#F2F7FB] px-[14px] pt-[12px] text-[14px] text-[#31323B] placeholder:text-[#31323B] outline-none focus-visible:ring-2 focus-visible:ring-[#D92D20]/25 md:text-[16px]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 hover:bg-[transparent] h-[50px] w-full rounded-[999px] border border-[#CFE4F0] bg-[#CFE4F0] hover:border-[#10101A] text-[16px] font-medium text-[#0C0A14] shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactPage
