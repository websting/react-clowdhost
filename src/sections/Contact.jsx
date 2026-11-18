
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Headset,
  Send,
  Globe,
} from 'lucide-react'

function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@clowdhost.com',
      description: 'Send us an email anytime.',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (800) 555-0199',
      description: 'Speak with our support team.',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: 'Toronto, Ontario, Canada',
      description: 'Serving customers worldwide.',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Monday – Friday',
      description: '9:00 AM – 5:00 PM',
    },
  ]

  return (
    <>
      {/* Navigation and Page Banner */}
      <div className="relative">
        <Navbar />
        <PageBanner title="Contact Us" />
      </div>

      {/* Contact Introduction */}
      <ScrollReveal as="section" className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
            We're Here to Help
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Let's Start a
            <span className="text-sky-500"> Conversation.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Have a question about our hosting solutions or need
            assistance? We'd love to hear from you. Get in touch
            and let us help you move forward.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Information */}
      <ScrollReveal as="section" className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 100}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>

                  <h3 className="mt-6 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-sky-600">
                    {item.detail}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Form and Support Panel */}
      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

          {/* Contact Form */}
          <ScrollReveal>
            <div>
              <div className="mb-9">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                  Send Us a Message
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  We'd Love to Hear From You.
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Fill out the form below and tell us a little about
                  what you're looking for.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Smith"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400 sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>

                <p className="text-xs text-slate-400">
                  Contact form design preview. Connect a form service
                  to enable message submissions.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Support Panel */}
          <ScrollReveal delay={150}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-slate-950 p-8 sm:p-10">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15">
                  <Headset className="h-7 w-7 text-sky-400" />
                </div>

                <p className="mt-9 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                  Customer Support
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  We're Always Ready to Help.
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Whether you're launching your first website or
                  managing an established online business, we're
                  here to help make your hosting experience easier.
                </p>
              </div>

              <div className="relative z-10 mt-14 space-y-5 border-t border-white/10 pt-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <MessageSquare className="h-5 w-5 text-sky-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Friendly Assistance
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Support when you need it.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Globe className="h-5 w-5 text-sky-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Global Reach
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Hosting support wherever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <ScrollReveal as="section" className="bg-slate-50 px-6 py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 px-8 py-14 sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                Your Online Journey Starts Here
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Build Something Great?
              </h2>

              <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
                Discover the right hosting solution and take your
                online presence to the next level.
              </p>
            </div>

            <a
              href="/hosting"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400"
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

export default Contact

