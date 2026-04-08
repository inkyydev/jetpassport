import { Link } from 'react-router-dom'
import Container from '../common/Container'
import chevronSelect from '../../assets/chevron-img-select.svg'
import arrowDiagonal from '../../assets/arrow-img.svg'
import { blogCategories, blogSortOptions } from '../../pages/Blog/data'
import BlogArchivePagination from './BlogArchivePagination'

const accent = 'text-[#ED473D]'

function BlogArchiveList({ posts }) {
  return (
    <section className="pb-[20px] md:pb-0">
      <Container>
        <div className="flex flex-col md:gap-[32px] gap-[20px] lg:flex-row lg:items-center lg:justify-between">
          <nav
            className="flex w-full flex-nowrap items-center gap-x-6 overflow-x-auto overflow-y-hidden border-b border-[#D3D3E5] pb-[14px] [-webkit-overflow-scrolling:touch] md:flex-wrap md:overflow-x-visible"
            aria-label="Blog categories"
          >
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`relative w-max shrink-0 p-0 bg-transparent text-[14px] md:text-[16px] transition-colors ${
                  cat.id === 'all'
                    ? 'text-[#ED473D] after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-full after:bg-[#ED473D]'
                    : 'text-[#31323B] hover:text-[#31323B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          <div className="relative min-w-[320px] shrink-0 lg:w-auto">
            <select
              className="w-full min-w-0 py-[10px] pl-[14px] font-medium text-[#0C0A14] outline-none focus-visible:ring-2 focus-visible:ring-[#D92D20]/25 cursor-pointer appearance-none rounded-[8px] border border-[#D5D7DA] bg-white"
              defaultValue={blogSortOptions[0].id}
              aria-label="Sort blog posts"
            >
              {blogSortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <img
              src={chevronSelect}
              alt=""
              className="pointer-events-none absolute right-[14px] top-1/2 h-[7px] w-[12px] -translate-y-1/2"
              width={12}
              height={7}
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {posts.map((post) => (
            <article key={post.id}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="overflow-hidden rounded-[12px]">
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[384/240] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className={`mt-[20px] text-[14px] font-medium ${accent}`}>{post.categoryLabel}</p>
                <div className="mt-[8px] flex items-start justify-between gap-3">
                  <h3 className="text-[18px] !leading-[1.3] md:text-[24px] font-medium leading-snug text-[#0C0A14]">
                    {post.title}
                  </h3>
                  <span className="mt-1 inline-flex shrink-0" aria-hidden>
                    <img src={arrowDiagonal} alt="" className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-[#535862]">
                  {post.excerpt}
                </p>
              </Link>

              <div className="mt-[20px] flex items-center gap-[8px]">
                <img
                  src={post.author.avatar}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />
                <div className="text-sm leading-tight">
                  <p className="font-medium text-[#0C0A14] text-[14px]">{post.author.name}</p>
                  <p className="text-[#31323B] text-[14px]">{post.formattedDate}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <BlogArchivePagination />
      </Container>
    </section>
  )
}

export default BlogArchiveList
