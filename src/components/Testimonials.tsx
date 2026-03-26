import { useState, useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Outstanding work from start to finish. Delivered on time and exceeded our expectations. The codebase is clean, the design is polished, and our users love it. Would hire again without hesitation.",
    name: 'Sok Dara',
    role: 'CEO',
    company: 'Tech Startup Inc.',
  },
  {
    id: '2',
    quote: "The best freelancer we've worked with. Clear communication, a keen eye for detail, and the ability to translate complex requirements into simple, elegant solutions. Highly recommend.",
    name: 'Meng Sun',
    role: 'Product Manager',
    company: 'Product Co',
  },
  {
    id: '3',
    quote: "Transformed our vision into a beautiful, functional product. Professional, responsive, and genuinely invested in our success. The entire team was impressed with the quality of work.",
    name: 'Pha Nut',
    role: 'Founder',
    company: 'Design Co',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, inView } = useInView()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-testimonial-card]')
    if (!card) return
    const cardWidth = (card as HTMLElement).offsetWidth + 32
    track.scrollTo({ left: activeIndex * cardWidth, behavior: 'smooth' })
  }, [activeIndex])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="testimonials"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section section-alt"
      >
        <div className="container-narrow">
          <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Testimonials</span>
          <h2 className="font-display section-title section-title-center mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
            What people say
          </h2>
          <p className="font-body section-intro mt-4 font-light">
            Feedback from clients and collaborators I've worked with on projects large and small.
          </p>

          <div
            className={`mt-14 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t) => (
                <blockquote
                  key={t.id}
                  data-testimonial-card
                  className="card flex w-full min-w-[min(100%,420px)] flex-shrink-0 snap-start flex-col p-8 sm:min-w-[380px] md:min-w-[400px]"
                >
                  <p className="font-body text-lg font-light leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
                    "{t.quote}"
                  </p>
                  <footer className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-700">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 font-display text-xl text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong className="font-body block font-semibold text-zinc-900 dark:text-white">
                        {t.name}
                      </strong>
                      <span className="font-body text-sm font-light text-zinc-500 dark:text-zinc-400">
                        {t.role}, {t.company}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? 'scale-125 bg-accent'
                      : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}