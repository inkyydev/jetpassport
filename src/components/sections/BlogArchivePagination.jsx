import arrowLeft from '../../assets/previous-img.svg'
import arrowRight from '../../assets/next-img.svg'

/** Statička paginacija (UI only), prema blog archive dizajnu. */
const pageItems = [
  { type: 'page', n: 1, active: true },
  { type: 'page', n: 2 },
  { type: 'page', n: 3 },
  { type: 'ellipsis' },
  { type: 'page', n: 8 },
  { type: 'page', n: 9 },
  { type: 'page', n: 10 },
]

function BlogArchivePagination() {
  return (
    <nav className="md:mt-14 mt-[30px] border-t border-[#D3D3E5] pt-8" aria-label="Pagination">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-3">
        <div className="flex w-full items-center justify-between md:contents">
          <button
            type="button"
            className="inline-flex hover:opacity-80 transition-opacity bg-transparent p-0 items-center gap-[6px] text-[14px] font-medium text-[#535862] md:justify-self-start"
          >
            <span aria-hidden>
              <img
                src={arrowLeft}
                alt="Previous"
              />
            </span>
            Previous
          </button>
          <button
            type="button"
            className="inline-flex hover:opacity-80 transition-opacity bg-transparent p-0 items-center gap-[6px] text-[14px] font-medium text-[#535862] md:hidden"
          >
            Next
            <span aria-hidden>
              <img
                src={arrowRight}
                alt="Next"
              />
            </span>
          </button>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 md:px-2">
          {pageItems.map((item, i) =>
            item.type === 'ellipsis' ? (
              <li key={`e-${i}`} className="px-2 text-[14px] font-medium text-[#31323B]" aria-hidden>
                ...
              </li>
            ) : (
              <li key={item.n}>
                <button
                  type="button"
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[14px] font-medium transition-colors ${
                    item.active
                      ? 'bg-[#F2F7FB] text-[#31323B]'
                      : 'text-[#31323B] bg-[transparent] hover:bg-[#F2F7FB]'
                  }`}
                  aria-label={`Page ${item.n}`}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.n}
                </button>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className="hidden hover:opacity-80 transition-opacity bg-transparent p-0 items-center gap-[6px] text-[14px] font-medium text-[#535862] md:flex md:justify-self-end"
        >
          Next
          <span aria-hidden>
              <img
                src={arrowRight}
                alt="Next"
              />
            </span>
        </button>
      </div>
    </nav>
  )
}

export default BlogArchivePagination
