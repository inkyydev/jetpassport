import { Link } from 'react-router-dom'
import Container from '../common/Container'
import arrowDiagonal from '../../assets/arrow-img.svg'

const accent = 'text-[#D92D20]'

function BlogArchiveHero({ featuredPost }) {
  if (!featuredPost) return null

  return (
    <section className="bg-white pb-[45px] pt-[45px] md:pb-14 md:pt-[60px] md:pb-[64px]">
      <Container>
        <p className={`text-sm font-medium ${accent}`}>Our blog</p>
        <h1 className="mt-[12px] max-w-[720px] lg:text-[48px] md:text-[36px] text-[32px]">Recent blog posts</h1>
        <p className="md:mt-[24px] mt-[16px] max-w-[560px] text-[#535862] md:text-[16px] text-[15px]">
          The latest industry news, interviews, technologies, and resources.
        </p>

        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group relative flex items-end md:mt-[60px] mt-[30px] block min-h-[360px] overflow-hidden rounded-[16px] md:min-h-[420px] lg:min-h-[550px]"
        >
          <img
            src={featuredPost.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="relative w-full z-10 flex h-full flex-col justify-end p-[20px] md:p-[32px]">
            <div className="flex items-start justify-between gap-[20px]">
              <div className="max-w-[880px]">
                <h2 className="!text-white !text-[20px] md:!text-[24px]">
                  {featuredPost.title}
                </h2>
                <p className="mt-[8px] text-white">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-[24px] flex gap-[30px] md:gap-[40px] flex-wrap">
                  <div>
                    <p className="text-[14px] font-medium text-white">Written by</p>
                    <div className="mt-[8px] flex items-center gap-[8px]">
                      <img
                        src={featuredPost.author.avatar}
                        alt=""
                        className="h-[40px] w-[40px] rounded-full object-cover"
                      />
                      <span className="font-medium text-white">{featuredPost.author.name}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-white">Published on</p>
                    <p className="mt-[16px] font-medium text-white">{featuredPost.formattedDate}</p>
                  </div>
                </div>
              </div>

              <span className="mt-[20px] md:mt-[10px] hidden md:block">
                <img src={arrowDiagonal} alt="" className="h-3.5 w-3.5 opacity-90" />
              </span>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  )
}

export default BlogArchiveHero
