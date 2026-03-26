import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

// ─── Data ────────────────────────────────────────────────────────────────────
const siteName = 'Hoeun Sophanut'
const heroTagline = 'Creative Developer & Designer'
const heroSubtitle =
  'I craft digital experiences that combine clean code, thoughtful design, and user-centered thinking. From concept to launch, I help brands and products stand out online.'
const heroStats = [
  { count: 50, label: 'Projects Delivered', sublabel: 'Web, app & design' },
  { count: 5,  label: 'Years Experience',   sublabel: 'Full-stack & design' },
  { count: 30, label: 'Happy Clients',       sublabel: 'Across industries' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Hero() {
  const { ref: sectionRef, inView } = useInView()
  const stat1 = useCounter(heroStats[0].count, 2000, inView)
  const stat2 = useCounter(heroStats[1].count, 2000, inView)
  const stat3 = useCounter(heroStats[2].count, 2000, inView)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const statValues = [stat1, stat2, stat3]

  return (
    <>
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="hero"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body relative flex min-h-screen flex-col justify-center pt-24 pb-24"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-mesh-light dark:bg-mesh-dark" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,107,74,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,107,74,0.12),transparent_50%)]" />

        <div className="container-narrow relative z-10">
          <p className="section-label mb-2 font-body tracking-widest uppercase text-xs font-medium">Hello, I'm</p>
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-wide text-zinc-900 dark:text-white">
            {siteName}
          </h1>
          <p className="font-body mt-4 max-w-xl text-lg font-medium text-accent md:text-xl">
            {heroTagline}
          </p>
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg font-light">
            {heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary font-body font-medium tracking-wide">
              View Work
            </a>
            <a href="#contact" className="btn-secondary font-body font-medium tracking-wide">
              Get in Touch
            </a>
            <a href="/resume.pdf" download className="btn-ghost font-body font-medium tracking-wide">
              Download CV
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-200/80 pt-12 dark:border-zinc-800 md:gap-12">
            {heroStats.map((s, i) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-4xl leading-none text-zinc-900 dark:text-white md:text-5xl">
                  {mounted ? statValues[i] : '0'}
                </span>
                <span className="font-body mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {s.label}
                </span>
                <span className="font-body mt-0.5 text-xs font-light text-zinc-500 dark:text-zinc-400">
                  {s.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="font-body absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent opacity-60" />
        </div>
      </section>
    </>
  )
}