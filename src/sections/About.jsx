
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'

import {
  Zap,
  ShieldCheck,
  Rocket,
  Handshake,
  Headset,
  Layers,
  ArrowRight,
} from 'lucide-react'

function About() {
  const highlights = [
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed',
    },
    {
      icon: ShieldCheck,
      title: 'High Security',
      description: 'Your data stays protected',
    },
    {
      icon: Layers,
      title: 'Scalable Hosting',
      description: 'Grow at your own pace',
    },
  ]

  const values = [
    {
      icon: Handshake,
      title: 'Reliability',
      description:
        'A stable and dependable hosting experience you can count on.',
    },
    {
      icon: ShieldCheck,
      title: 'Security',
      description:
        'Modern protection designed to help keep websites and data safe.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description:
        'Fast, optimized hosting for a smooth online experience.',
    },
    {
      icon: Headset,
      title: 'Customer Focus',
      description:
        'Friendly support and solutions designed around your needs.',
    },
  ]

  return (
    <>
      {/* Navigation and Page Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="About" />
      </div>

      {/* About Introduction */}
      <ScrollReveal
        as="section"
        className="bg-white px-6 py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-3xl bg-sky-100" />

            <img
              src="/images/about-server.jpg"
              alt="Modern data center server infrastructure"
              className="relative z-10 h-75 w-full rounded-2xl object-cover shadow-xl sm:h-105"
            />

            <div className="absolute -left-4 -top-4 z-20 h-20 w-20 rounded-2xl border-4 border-white bg-sky-500/10" />
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-sky-500" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                About ClowdHost
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              Reliable Hosting for a Stronger Online Presence
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We believe every great online presence starts
              with reliable hosting. ClowdHost provides
              powerful, secure and scalable hosting solutions
              designed to help businesses, creators and
              developers grow online.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our goal is to make web hosting simple,
              accessible and dependable, giving our customers
              the confidence to focus on what matters most:
              growing their online presence.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                      <Icon className="h-5 w-5 text-sky-500" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Our Values */}
      <ScrollReveal
        as="section"
        delay={100}
        className="bg-slate-50 px-6 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              What Drives Us
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Values
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              The principles behind every solution we create
              and every experience we deliver.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-500">
                    <Icon className="h-7 w-7 text-sky-500 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal
        as="section"
        delay={100}
        className="bg-white px-6 py-20"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 px-8 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                Your Online Journey Starts Here
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Get Started?
              </h2>

              <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
                Discover a hosting solution that fits your needs
                and take your online presence further.
              </p>
            </div>

            <a
              href="/hosting"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Explore Hosting
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}

export default About



