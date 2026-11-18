
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'

import {
  Search,
  Globe,
  ShieldCheck,
  Zap,
  Headset,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function Domain() {
  const [domain, setDomain] = useState('')
  const [searched, setSearched] = useState(false)

  const extensions = [
    { name: '.com', description: 'Businesses and brands', price: '$14.99' },
    { name: '.ca', description: 'Canadian businesses', price: '$12.99' },
    { name: '.net', description: 'Technology and networks', price: '$16.99' },
    { name: '.org', description: 'Organizations and communities', price: '$13.99' },
  ]

  const features = [
    {
      icon: ShieldCheck,
      title: 'Domain Protection',
      description:
        'Help protect your domain and keep your ownership information secure.',
    },
    {
      icon: Zap,
      title: 'Easy Management',
      description:
        'Manage your domains and DNS settings from one convenient place.',
    },
    {
      icon: Headset,
      title: 'Expert Support',
      description:
        'Get assistance whenever you need help managing your domain.',
    },
  ]

  function handleSearch(e) {
    e.preventDefault()
    if (!domain.trim()) return
    setSearched(true)
  }

  function selectExtension(extension) {
    setDomain(`yourbrand${extension}`)
    setSearched(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation and Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="Domain" />
      </div>

      {/* Domain Introduction and Search */}
      <ScrollReveal
        as="section"
        className="bg-white px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
            Find Your Perfect Domain
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your Online Identity
            <span className="text-sky-500"> Starts Here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every great website starts with a great domain.
            Find the perfect name for your business, brand
            or next big idea.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 sm:flex-row sm:rounded-full sm:pl-6"
          >
            <div className="flex flex-1 items-center gap-3 px-2">
              <Search className="h-5 w-5 shrink-0 text-sky-500" />

              <input
                type="text"
                value={domain}
                onChange={(e) => {
                  setDomain(e.target.value)
                  setSearched(false)
                }}
                placeholder="Enter your desired domain name"
                aria-label="Domain name"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={!domain.trim()}
              className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-full"
            >
              Search Domain
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {searched && (
            <div
              role="status"
              className="mx-auto mt-5 max-w-3xl rounded-xl border border-sky-100 bg-sky-50 p-5 text-left"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-500" />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Search preview ready
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    You entered "{domain}". This is a template
                    demonstration. Connect a domain registrar
                    API to check real-time availability and pricing.
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="mt-5 text-xs text-slate-400">
            Find a domain that represents your brand and makes
            your website easy to discover.
          </p>
        </div>
      </ScrollReveal>

      {/* Popular Domain Extensions */}
      <ScrollReveal
        as="section"
        delay={100}
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              Choose Your Extension
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Popular Domain Extensions
            </h2>

            <p className="mt-4 text-slate-600">
              Find an extension that fits your website and brand.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-5 text-sm font-semibold">Extension</th>
                  <th className="px-6 py-5 text-sm font-semibold">Best For</th>
                  <th className="px-6 py-5 text-sm font-semibold">Starting Price</th>
                  <th className="px-6 py-5 text-right text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {extensions.map((extension, index) => (
                  <tr
                    key={extension.name}
                    className={`border-b border-slate-100 transition-colors hover:bg-sky-50/60 ${
                      index === extensions.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                          <Globe className="h-5 w-5 text-sky-500" />
                        </div>
                        <span className="text-lg font-bold text-slate-900">
                          {extension.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {extension.description}
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-bold text-slate-900">
                        {extension.price}
                      </span>
                      <span className="ml-1 text-sm text-slate-500">/year</span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() => selectExtension(extension.name)}
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-100"
                      >
                        Search
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile and Tablet Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {extensions.map((extension) => (
              <div
                key={extension.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                    <Globe className="h-6 w-6 text-sky-500" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {extension.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {extension.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs text-slate-400">Starting price</p>
                    <p className="mt-1 font-bold text-slate-900">
                      {extension.price}
                      <span className="ml-1 text-sm font-normal text-slate-500">
                        /year
                      </span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => selectExtension(extension.name)}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-100"
                  >
                    Search
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Example template pricing only. Actual registrar prices
            and renewal rates will depend on the provider.
          </p>
        </div>
      </ScrollReveal>

      {/* Domain Management Features */}
      <ScrollReveal
        as="section"
        delay={100}
        className="bg-white px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              Domain Management Made Simple
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything Your Domain Needs
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              More than just a domain name. Get the tools and
              support to manage your online identity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                    <Icon className="h-7 w-7 text-sky-500" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Domain CTA */}
      <ScrollReveal
        as="section"
        delay={100}
        className="bg-slate-50 px-6 py-16"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 px-8 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                Make It Yours
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Your Perfect Domain Is Waiting.
              </h2>

              <p className="mt-3 text-slate-300">
                Start building your online identity today.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                document.querySelector('input[aria-label="Domain name"]')?.focus()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
            >
              Find Your Domain
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}

export default Domain



