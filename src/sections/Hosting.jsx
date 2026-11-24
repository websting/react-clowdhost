
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'

import {
  Server,
  ShieldCheck,
  Zap,
  Headset,
  ArrowRight,
  Check,
  Gauge,
  LockKeyhole,
  RefreshCw,
} from 'lucide-react'

function Hosting() {
  const [billing, setBilling] = useState('yearly')

  const plans = [
    {
      name: 'Starter',
      description: 'Everything you need to launch your first website.',
      monthly: 5.99,
      yearly: 3.99,
      storage: '20 GB SSD',
      websites: '1 Website',
      bandwidth: 'Unmetered',
      email: '5 Email Accounts',
    },
    {
      name: 'Business',
      description: 'More power for growing businesses and websites.',
      monthly: 11.99,
      yearly: 8.99,
      storage: '50 GB SSD',
      websites: 'Unlimited Websites',
      bandwidth: 'Unmetered',
      email: 'Unlimited Email',
      popular: true,
    },
    {
      name: 'Professional',
      description: 'Advanced resources for demanding websites.',
      monthly: 19.99,
      yearly: 14.99,
      storage: '100 GB NVMe',
      websites: 'Unlimited Websites',
      bandwidth: 'Unmetered',
      email: 'Unlimited Email',
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description:
        'Optimized infrastructure and modern storage technology help your website load quickly.',
    },
    {
      icon: ShieldCheck,
      title: 'Advanced Security',
      description:
        'Security-focused hosting features help protect your website and important data.',
    },
    {
      icon: RefreshCw,
      title: 'Reliable Backups',
      description:
        'Regular backup options help keep your website data protected and recoverable.',
    },
    {
      icon: Headset,
      title: '24/7 Support',
      description:
        'Get help when you need it with friendly and knowledgeable support.',
    },
  ]

  return (
    <>
      {/* Navigation and Page Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="Web Hosting" />
      </div>

      {/* Hosting Introduction */}
      <ScrollReveal delay={0}>
        <section className="relative overflow-hidden bg-slate-100 px-6 py-24 sm:py-28">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                <span className="h-0.5 w-10 bg-sky-500" />
                Powerful Hosting Solutions
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Hosting Built for
                <span className="text-sky-600"> What's Next.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Give your website the speed, security and reliability
                it deserves. Choose a hosting solution designed to
                grow alongside your business.
              </p>
              {/* Call-to-Action Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#hosting-plans"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
                >
                  Explore Plans
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="/domain"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition-colors hover:border-sky-400 hover:bg-white"
                >
                  Find a Domain
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-sky-600" />
                  Free SSL
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-sky-600" />
                  Easy Setup
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-sky-600" />
                  Expert Support
                </div>
              </div>
            </div>

            {/* Hosting Visual */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-sky-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-10">
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <p className="text-sm text-slate-500">Hosting Infrastructure</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      Performance Overview
                    </h3>
                  </div>
                  <div className="rounded-xl bg-sky-50 p-3">
                    <Server className="h-7 w-7 text-sky-600" />
                  </div>
                </div>

                <div className="mt-8 space-y-7">
                  <div>
                    <div className="mb-3 flex justify-between text-sm">
                      <span className="text-slate-600">Server Performance</span>
                      <span className="font-semibold text-sky-600">Optimized</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[90%] rounded-full bg-linear-to-r from-blue-500 to-sky-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex justify-between text-sm">
                      <span className="text-slate-600">Security Protection</span>
                      <span className="font-semibold text-sky-600">Enabled</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[95%] rounded-full bg-linear-to-r from-blue-500 to-sky-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex justify-between text-sm">
                      <span className="text-slate-600">Resource Availability</span>
                      <span className="font-semibold text-sky-600">Scalable</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[85%] rounded-full bg-linear-to-r from-blue-500 to-sky-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-9 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <Gauge className="h-5 w-5 text-sky-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      Fast Loading
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Optimized delivery
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <LockKeyhole className="h-5 w-5 text-sky-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      Secure Hosting
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Protection built in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Hosting Plans */}
      <ScrollReveal delay={100}>
        <section
          id="hosting-plans"
          className="bg-slate-50 px-6 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Simple and Transparent Pricing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Find the Perfect Hosting Plan
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Whether you're starting small or growing your business,
                there's a plan to match your needs.
              </p>

              {/* Billing Switch */}
              <div className="mt-9 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    billing === 'monthly'
                      ? 'bg-slate-900 text-white shadow'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    billing === 'yearly'
                      ? 'bg-sky-500 text-white shadow'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs">Save more</span>
                </button>
              </div>
            </div>

            {/* Plan Comparison Table */}
            <div className="mt-14">
              {/* Desktop Table */}
              <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 md:block">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-950 text-white">
                      <th className="w-[22%] px-6 py-7 text-sm font-semibold">
                        Hosting Plan
                      </th>

                      {plans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`px-6 py-7 ${
                            plan.popular ? 'bg-blue-950' : ''
                          }`}
                        >
                          {plan.popular && (
                            <span className="mb-2 inline-block rounded-full bg-sky-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                              Most Popular
                            </span>
                          )}

                          <p className="text-lg font-bold">{plan.name}</p>
                          <p className="mt-1 text-xs font-normal leading-relaxed text-slate-400">
                            {plan.description}
                          </p>

                          <p className="mt-5 text-3xl font-bold">
                            ${billing === 'yearly' ? plan.yearly : plan.monthly}
                            <span className="text-sm font-normal text-slate-400">/mo</span>
                          </p>

                          <p className="mt-1 text-xs font-normal text-slate-400">
                            {billing === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                          </p>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      { label: 'Websites', key: 'websites' },
                      { label: 'Storage', key: 'storage' },
                      { label: 'Bandwidth', key: 'bandwidth' },
                      { label: 'Email Accounts', key: 'email' },
                    ].map((feature, index) => (
                      <tr
                        key={feature.key}
                        className={`border-b border-slate-100 ${
                          index % 2 === 1 ? 'bg-slate-50/70' : ''
                        }`}
                      >
                        <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                          {feature.label}
                        </td>

                        {plans.map((plan) => (
                          <td key={plan.name} className="px-6 py-5 text-sm text-slate-600">
                            {plan[feature.key]}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {['Free SSL Certificate', 'Website Backups', '24/7 Support'].map(
                      (feature, index) => (
                        <tr
                          key={feature}
                          className={`border-b border-slate-100 ${
                            index % 2 === 1 ? 'bg-slate-50/70' : ''
                          }`}
                        >
                          <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                            {feature}
                          </td>

                          {plans.map((plan) => (
                            <td key={plan.name} className="px-6 py-5">
                              <Check className="h-5 w-5 text-sky-500" />
                            </td>
                          ))}
                        </tr>
                      )
                    )}

                    <tr>
                      <td className="px-6 py-7" />

                      {plans.map((plan) => (
                        <td key={plan.name} className="px-6 py-7">
                          <a
                            href="/contact"
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                              plan.popular
                                ? 'bg-sky-500 text-white hover:bg-sky-400'
                                : 'border border-slate-200 text-slate-800 hover:border-sky-400 hover:text-sky-600'
                            }`}
                          >
                            Choose Plan
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Plan Layout */}
              <div className="grid gap-6 md:hidden">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-lg ${
                      plan.popular
                        ? 'border-sky-400 ring-1 ring-sky-400'
                        : 'border-slate-200'
                    }`}
                  >
                    {plan.popular && (
                      <span className="mb-4 inline-block rounded-full bg-sky-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        Most Popular
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {plan.description}
                    </p>

                    <div className="mt-5 border-b border-slate-100 pb-5">
                      <p className="text-3xl font-bold text-slate-900">
                        ${billing === 'yearly' ? plan.yearly : plan.monthly}
                        <span className="text-sm font-normal text-slate-500">/mo</span>
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {billing === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                      </p>
                    </div>

                    <div className="mt-5 space-y-4">
                      {[
                        { label: 'Websites', value: plan.websites },
                        { label: 'Storage', value: plan.storage },
                        { label: 'Bandwidth', value: plan.bandwidth },
                        { label: 'Email Accounts', value: plan.email },
                      ].map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-slate-500">{feature.label}</span>
                          <span className="text-right font-semibold text-slate-800">
                            {feature.value}
                          </span>
                        </div>
                      ))}

                      {[
                        'Free SSL Certificate',
                        'Website Backups',
                        '24/7 Support',
                      ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-sky-500" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all ${
                        plan.popular
                          ? 'bg-sky-500 text-white hover:bg-sky-400'
                          : 'border border-slate-200 text-slate-800 hover:border-sky-400 hover:text-sky-600'
                      }`}
                    >
                      Choose Plan
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              Illustrative template pricing and features. Customize these
              details to match the hosting provider and package.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Hosting Features */}
      <ScrollReveal delay={100}>
        <section className="bg-white px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Built for Performance
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything You Need to Stay Ahead.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Powerful hosting features that help keep your website
                fast, protected and ready for what's next.
              </p>
            </div>

            <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <div key={feature.title} className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                      <Icon className="h-7 w-7 text-sky-500" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Hosting CTA */}
      <ScrollReveal delay={100}>
        <section className="bg-slate-50 px-6 py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 px-8 py-14 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                  Take Your Website Further
                </p>

                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to Launch Your Website?
                </h2>

                <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
                  Choose your hosting plan and take the next step
                  toward building your online presence.
                </p>
              </div>

              <a
                href="#hosting-plans"
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
              >
                View Hosting Plans
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

export default Hosting

