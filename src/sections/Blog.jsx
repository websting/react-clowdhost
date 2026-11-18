
import { Link } from 'react-router'

import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'
import { blogPosts } from '../data/blogPosts'

import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  BookOpen,
  Search,
  Mail,
  Server,
  ShieldCheck,
  Globe,
  Zap,
} from 'lucide-react'

const articleIcons = {
  Server,
  ShieldCheck,
  Globe,
  Zap,
}

const articleAccents = {
  Server: 'from-blue-600 to-sky-400',
  ShieldCheck: 'from-indigo-600 to-blue-400',
  Globe: 'from-cyan-600 to-sky-400',
  Zap: 'from-violet-600 to-blue-400',
}

function Blog() {
  const featuredPost = blogPosts[0]
  const articles = blogPosts.slice(1)

  return (
    <>
      {/* Navigation and Page Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="Our Blog" />
      </div>

      {/* Featured Article */}
      <ScrollReveal as="section" className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                The ClowdHost Journal
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ideas That Move You Forward.
              </h2>
            </div>

            <BookOpen className="hidden h-10 w-10 text-sky-500 sm:block" />
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">
            {/* Featured Visual */}
            <div className="relative flex min-h-75 items-center justify-center overflow-hidden bg-linear-to-br from-blue-950 via-slate-900 to-slate-950 p-10 sm:min-h-105">
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/30 blur-[100px]" />
              <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-[100px]" />

              <div className="relative w-full max-w-sm">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-semibold tracking-wide text-slate-300">
                        THE DIGITAL WORLD
                      </span>
                    </div>

                    <Globe className="h-5 w-5 text-sky-400" />
                  </div>

                  <div className="py-9">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                      Build. Grow. Succeed.
                    </p>

                    <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                      Your Business
                      <span className="text-sky-400"> Online.</span>
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Everything starts with a strong online foundation.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs text-slate-400">
                      ClowdHost Insights
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-sky-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold text-sky-600">
                  Featured Article
                </span>

                <span className="text-sm text-slate-400">
                  {featuredPost.category}
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {featuredPost.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                {featuredPost.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {featuredPost.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
              >
                Read Featured Article
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Latest Articles */}
      <ScrollReveal as="section" className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Fresh From the Blog
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Latest Articles
              </h2>

              <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
                Helpful insights, practical tips and ideas to help
                you make more of your online presence.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Search className="h-4 w-4 text-sky-500" />
              Explore our latest insights
            </div>
          </div>

          {/* Article List */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {articles.map((article, index) => {
              const Icon = articleIcons[article.icon] || Globe
              const accent = articleAccents[article.icon] || articleAccents.Globe

              return (
                <ScrollReveal
                  key={article.slug}
                  as="article"
                  delay={index * 100}
                  className="group grid gap-6 py-8 transition-colors sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8"
                >
                  {/* Article Visual */}
                  <div
                    className={`flex h-24 w-full items-center justify-center rounded-2xl bg-linear-to-br ${accent} sm:h-24 sm:w-24`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Article Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-sky-600">
                        {article.category}
                      </span>

                      <span className="text-slate-400">
                        {article.date}
                      </span>

                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock3 className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600">
                      <Link to={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                      {article.description}
                    </p>
                  </div>

                  {/* Read Link */}
                  <Link
                    to={`/blog/${article.slug}`}
                    aria-label={`Read ${article.title}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            Sample article content for demonstration. Replace with your own
            blog posts and publication dates.
          </p>
        </div>
      </ScrollReveal>

      {/* Newsletter */}
      <ScrollReveal as="section" className="bg-white px-6 py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 px-8 py-14 sm:px-14 sm:py-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15">
                <Mail className="h-6 w-6 text-sky-400" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                Stay in the Loop
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Insights Worth Sharing.
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-slate-300">
                Get helpful hosting tips, website advice and the latest
                insights delivered straight to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <p className="relative z-10 mt-6 text-xs text-slate-400">
            Newsletter form demonstration. Connect an email marketing service
            to collect subscriptions.
          </p>
        </div>
      </ScrollReveal>
    </>
  )
}

export default Blog


