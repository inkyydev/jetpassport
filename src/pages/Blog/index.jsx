import BlogArchiveHero from '../../components/sections/BlogArchiveHero'
import BlogArchiveList from '../../components/sections/BlogArchiveList'
import { getBlogPostsByDateDesc } from './data'

function BlogPage() {
  const sorted = getBlogPostsByDateDesc()
  const [featured, ...rest] = sorted

  return (
    <>
      <BlogArchiveHero featuredPost={featured} />
      <BlogArchiveList posts={rest} />
    </>
  )
}

export default BlogPage
