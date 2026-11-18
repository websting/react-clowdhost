
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X, ArrowRight } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Domain', path: '/domain' },
    { name: 'Hosting', path: '/hosting' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="absolute left-0 right-0 top-5 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 shadow-xl shadow-black/10 backdrop-blur-xl sm:px-7">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Clowd</span>
            <span className="text-sky-400">Host</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-sky-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-400 lg:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sky-500/10 text-sky-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-sky-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


