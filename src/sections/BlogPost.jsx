
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Clock3, CalendarDays } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'
import { blogPosts } from '../data/blogPosts'

function BlogPost() {
  const { slug } = useParams()

  const post = blogPosts.find((article) => article.slug === slug)

  if (!post) {
    return (
      <>
        <div className="relative">
          <Navbar />
          <PageBanner title="Article Not Found" />
        </div>

        <section className="bg-white px-6 py-24 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900">
              We couldn't find that article.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The article may have been moved or the link may be incorrect.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  const relatedPosts = blogPosts
    .filter(
      (article) =>
        article.slug !== post.slug &&
        article.category === post.category
    )
    .slice(0, 2)

  const fallbackPosts = relatedPosts.length > 0
    ? relatedPosts
    : blogPosts.filter((article) => article.slug !== post.slug).slice(0, 2)

  return (
    <>
      {/* Navigation and Page Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="Blog Article" />
      </div>

      {/* Article Content */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">

          {/* Back Link */}
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-sky-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </ScrollReveal>

          {/* Article Header */}
          <ScrollReveal delay={100}>
            <header className="mt-10">
              <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-600">
                {post.category}
              </span>

              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {post.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-slate-200 pb-8 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-sky-500" />
                  {post.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-sky-500" />
                  {post.readTime}
                </span>
              </div>
            </header>
          </ScrollReveal>

          {/* Article Body */}
          <div className="mt-12 space-y-12">
            {post.content.map((section, index) => (
              <ScrollReveal key={section.heading} delay={index * 80}>
                <article>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Article Navigation */}
          <ScrollReveal>
            <div className="mt-16 border-t border-slate-200 pt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
              >
                Explore More Articles
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Keep Exploring
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Related Articles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {fallbackPosts.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 100}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    {article.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
