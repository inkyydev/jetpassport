import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../components/common/Container'
import { getBlogPostBySlug } from '../Blog/data'

import copyIcon from '../../assets/copy-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import xIcon from '../../assets/linkedin-icon.svg'
import linkedinIcon from '../../assets/x-icon.svg'

function BlogSinglePage() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug || '')
  const [copyState, setCopyState] = useState('idle')

  useEffect(() => {
    if (copyState !== 'copied') return undefined
    const timer = setTimeout(() => setCopyState('idle'), 1800)
    return () => clearTimeout(timer)
  }, [copyState])

  const handleCopyLink = async () => {
    const url = window.location.href
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
      } else {
        const tempInput = document.createElement('input')
        tempInput.value = url
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand('copy')
        document.body.removeChild(tempInput)
      }
      setCopyState('copied')
    } catch {
      setCopyState('error')
      setTimeout(() => setCopyState('idle'), 1800)
    }
  }

  if (!post) {
    return (
      <section className="py-24">
        <Container>
          <h1 className="text-[36px]">Blog post not found</h1>
          <p className="mt-4 text-[#535862]">The blog post you requested does not exist.</p>
          <Link to="/blog" className="mt-6 inline-flex text-[#ED473D]">
            Back to blog
          </Link>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-white pb-[30px] pt-[45px] md:pb-[60px] md:pt-[60px]">
      <Container>
        <section className="mx-auto max-w-[1160px]">
          <p className="text-center text-[14px] font-medium text-[#ED473D]">
            Published {post.formattedDate}
          </p>
          <h1 className="mx-auto lg:text-[48px] md:text-[36px] text-[32px] mt-[12px] max-w-[760px] text-center !leading-[1.1]">
            {post.title}
          </h1>
          <p className="mx-auto md:mt-[24px] mt-[16px] max-w-[760px] text-center text-[16px] !leading-[1.6] text-[#31323B] md:text-[18px] lg:text-[20px]">
            {post.excerpt}
          </p>

          <div className="md:mt-[45px] mt-[25px] overflow-hidden md:rounded-[40px] rounded-[20px]">
            <img src={post.image} alt={post.title} className="w-full object-cover" />
          </div>
        </section>

        <section className="mx-auto md:mt-[96px] mt-[30px] max-w-[720px] text-[18px] leading-[1.8] text-[#31323B]">
          <p>{post.content}</p>
        </section>

        <section className="mx-auto max-w-[720px]  md:mt-[48px] mt-[30px] border-t border-[#D3D3E5] pt-[24px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-[16px]">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-[56px] w-[56px] rounded-full object-cover"
              />
              <div>
                <p className="text-[16px] font-medium text-[#0C0A14] md:text-[18px]">
                  {post.author.name}
                </p>
                <p className="text-[#31323B]">
                  Product Designer, Untitled
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#D5D7DA] bg-white px-[15px] py-[9px] text-[14px] font-medium text-[#31323B]"
              >
                <span aria-hidden className="text-[18px] leading-none">
                  <img src={copyIcon} alt="Copy" />
                </span>
                {copyState === 'copied'
                  ? 'Copied'
                  : copyState === 'error'
                    ? 'Try again'
                    : 'Copy link'}
              </button>
              <button
                type="button"
                className="inline-flex p-0 h-[41px] w-[41px] items-center justify-center rounded-[8px] border border-[#D5D7DA] bg-white text-[24px] font-medium text-[#98A2B3]"
                aria-label="Share on X"
              >
                <img src={xIcon} alt="X" />
              </button>
              <button
                type="button"
                className="inline-flex p-0 h-[41px] w-[41px] items-center justify-center rounded-[8px] border border-[#D5D7DA] bg-white text-[24px] font-bold text-[#98A2B3]"
                aria-label="Share on Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </button>
              <button
                type="button"
                className="inline-flex p-0 h-[41px] w-[41px] items-center justify-center rounded-[8px] border border-[#D5D7DA] bg-white text-[20px] font-semibold text-[#98A2B3]"
                aria-label="Share on LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default BlogSinglePage
