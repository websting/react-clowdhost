
import Navbar from '../components/Navbar'

function Home() {
  const benefits = [
    'Lightning Fast',
    'Secure & Reliable',
    '24/7 Support',
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[position:35%_center] sm:bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-slate-950/20" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pt-36 pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="w-full max-w-3xl">

            {/* Eyebrow */}
            <p className="hero-rise hero-delay-1 mb-6 text-xs font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-sm">
              Powerful Cloud Hosting
            </p>

            {/* Heading */}
            <h1 className="hero-rise hero-delay-2 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
  Fast, Secure
  <span className="text-sky-400"> Web Hosting </span>
  That Won't Break the Bank.
</h1>

            {/* Description */}
            <p className="hero-rise hero-delay-3 mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Deploy your website, grow your brand, and reach more customers online.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="hero-rise hero-delay-4 mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="/hosting"
                className="rounded-xl bg-sky-500 px-7 py-4 text-center font-semibold text-white transition-all hover:-translate-y-1 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                Explore Hosting →
              </a>

              <a
                href="/domain"
                className="rounded-xl border border-white/30 px-7 py-4 text-center font-semibold text-white transition-all hover:border-sky-400 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                Find Your Domain
              </a>

            </div>

            {/* Hosting Benefits */}
            <div className="hero-rise hero-delay-5 mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/15 pt-7">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

                  <span>{benefit}</span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

