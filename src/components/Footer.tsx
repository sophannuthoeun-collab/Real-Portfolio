import { useState, useEffect } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────
const siteName = 'Hoeun Sophanut'

const footerLinks = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <footer className="font-body border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-6 md:text-left">
              <p className="font-body text-sm font-light text-zinc-600 dark:text-zinc-400">
                © {new Date().getFullYear()}{' '}
                <span className="font-display text-base tracking-wide text-zinc-800 dark:text-zinc-200">
                  {siteName}
                </span>
                . All rights reserved.
              </p>
              <nav className="flex gap-6" aria-label="Footer">
                {footerLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="font-body text-sm font-medium text-zinc-600 transition hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <a
              href="#hero"
              aria-label="Back to top"
              className={`font-display inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 text-lg text-zinc-600 transition hover:border-accent hover:bg-accent-soft hover:text-accent dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-accent dark:hover:bg-accent/20 ${
                showBackTop ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}