
function PageBanner({ title }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-slate-950 to-slate-900 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <div className="about-rise about-delay-1">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <a
              href="/"
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              Home
            </a>

            <span className="text-slate-600">/</span>

            <span className="text-sky-400">{title}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBanner

