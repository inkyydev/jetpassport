import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import plusCircle from '../../assets/plus-circle.svg'
import minusCircle from '../../assets/minus-circle.svg'

function chunkArray(items, chunkSize) {
  const chunks = []
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize))
  }
  return chunks
}

function FAQSection({
  title,
  subtitle,
  faqs,
  className = '',
  splitIntro = null,
  sectionId,
  narrowSingleColumn = false,
}) {
  const columns = useMemo(() => chunkArray(faqs, 6), [faqs])
  const [openIds, setOpenIds] = useState(new Set([faqs?.[0]?.id]))

  const toggleFaq = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const renderFaqBody = (faq) => {
    const hasList = faq.answerList?.length > 0
    const hasAnswer = faq.answer != null && faq.answer !== ''
    if (!hasList && !hasAnswer) return null
    return (
      <div className="md:mt-4 mt-3 w-full min-w-0 space-y-3 break-words">
        {hasAnswer ? (
          <p className="text-[14px] leading-[1.5] text-[#4A515D] break-words">{faq.answer}</p>
        ) : null}
        {hasList ? (
          <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[1.5] text-[#4A515D] break-words">
            {faq.answerList.map((line, idx) => (
              <li key={`${idx}-${line}`}>{line}</li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  }

  const faqColumn = (column) => (
    <div className="w-full min-w-0 rounded-[20px] bg-[#F2F7FB] p-[15px]">
      <div className="space-y-[10px]">
        {column.map((faq) => {
          const isOpen = openIds.has(faq.id)
          return (
            <article
              key={faq.id}
              className="w-full min-w-0 rounded-[12px] bg-white md:p-[28px] p-[20px]"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="!bg-transparent !text-[#0C0A14] !p-0 w-full max-w-full !rounded-none flex items-center md:gap-3 gap-2 text-left"
                aria-expanded={isOpen}
              >
                <img
                  src={isOpen ? minusCircle : plusCircle}
                  alt=""
                  className="h-[24px] w-[24px] min-w-[24px] max-w-[24px] shrink-0"
                />
                <span className="min-w-0 flex-1 break-words md:text-[16px] text-[14px] font-medium leading-[1.35]">
                  {faq.question}
                </span>
              </button>

              {isOpen ? (
                <div className="w-full min-w-0 max-w-full overflow-hidden">
                  {renderFaqBody(faq)}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </div>
  )

  return (
    <section id={sectionId} className={`py-[0px] md:py-[50px] ${className}`.trim()}>
      <Container>
        {splitIntro ? (
          <div className="mt-0 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="min-w-0">
              <h2 className="text-left">{splitIntro.title}</h2>
              <p className="mt-4 text-left">{splitIntro.description}</p>
              {splitIntro.buttonLabel && splitIntro.buttonTo ? (
                <Link to={splitIntro.buttonTo} className="btn mt-6 inline-block">
                  {splitIntro.buttonLabel}
                </Link>
              ) : null}
            </div>
            <div className="min-w-0">{faqColumn(faqs)}</div>
          </div>
        ) : (
          <>
            <h2 className="text-center">{title}</h2>
            <p className="mt-3 text-center">{subtitle}</p>

            {narrowSingleColumn ? (
              <div className="mt-8 flex w-full justify-center px-0">
                <div className="w-full min-w-0 max-w-[390px]">
                  {faqColumn(faqs)}
                </div>
              </div>
            ) : (
              <div
                className={`mt-8 grid w-full min-w-0 grid-cols-1 gap-4 ${
                  columns.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-3'
                }`}
              >
                {columns.map((column, colIdx) => (
                  <div key={colIdx} className="min-w-0">
                    {faqColumn(column)}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  )
}

export default FAQSection
