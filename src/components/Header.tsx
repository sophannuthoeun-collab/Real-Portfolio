import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

// ─── Data ────────────────────────────────────────────────────────────────────
const siteName = 'Hoeun Sophanut'

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#experience',   label: 'Experience' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#services',     label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact',      label: 'Contact' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme }        = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const onScroll = () => {
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= y) { setActiveSection(sections[i]); return }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <header
        id="header"
        className={`font-body fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-4'}`}
      >
        <div className="container-narrow flex h-14 items-center justify-between md:h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="relative z-10 flex items-center gap-2 font-display text-2xl leading-none text-zinc-900 dark:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-lg text-white shadow-lg shadow-accent/30">
              P
            </span>
            <span className="hidden sm:inline tracking-wide">{siteName}</span>
          </a>

          {/* Desktop nav */}
          <nav
            className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block ${scrolled ? 'top-1/2' : ''}`}
            aria-label="Main"
          >
            <ul
              className={`flex items-center gap-1 rounded-2xl border bg-white/80 px-2 py-1.5 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/80 dark:shadow-black/20 ${
                scrolled ? 'border-zinc-200/80 ring-1 ring-zinc-200/50 dark:ring-zinc-700/50' : 'border-white/20'
              }`}
            >
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1)
                const isActive = activeSection === id
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleNavClick}
                      className={`font-body relative rounded-xl px-4 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? 'text-accent dark:text-accent-light'
                          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-xl bg-accent/10 dark:bg-accent/20" aria-hidden />
                      )}
                      <span className="relative">{label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Right controls */}
          <div className="relative z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-600 shadow-sm backdrop-blur-sm transition hover:border-zinc-300 hover:bg-white hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <span className="text-lg">{theme === 'dark' ? '☽' : '☀'}</span>
            </button>
            <a href="#contact" className="btn-primary font-body hidden font-medium tracking-wide shadow-lg shadow-accent/25 md:inline-flex">
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/60 shadow-sm backdrop-blur-sm md:hidden dark:border-zinc-700 dark:bg-zinc-800/60"
            >
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 z-40 flex h-full w-full max-w-sm flex-col border-l border-zinc-200 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-1 p-6 pt-24">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className={`font-body rounded-xl px-4 py-3.5 text-base font-medium tracking-wide transition ${
                  isActive
                    ? 'bg-accent/15 text-accent dark:bg-accent/20'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn-primary font-body mt-6 w-full justify-center py-3.5 font-medium tracking-wide"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}