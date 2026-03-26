import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export interface Service {
  id: string
  num: string
  title: string
  shortDesc: string
  longDesc: string
  deliverables: string[]
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    id: '1',
    num: '01',
    title: 'Web Development',
    shortDesc: 'Custom websites and web apps built with modern stacks.',
    longDesc: 'From marketing sites to full-stack web applications, I deliver fast, accessible, and scalable solutions. I use proven tech stacks and best practices so your product is maintainable and ready to grow.',
    deliverables: ['Responsive, accessible frontends', 'REST or GraphQL APIs', 'Database design & integration', 'Performance & SEO optimization', 'Deployment & hosting setup'],
  },
  {
    id: '2',
    num: '02',
    title: 'UI/UX Design',
    shortDesc: 'User research, wireframes, and high-fidelity designs.',
    longDesc: 'I take a user-centered approach: research, wireframes, and prototypes before high-fidelity design. The result is interfaces that are clear, consistent, and a joy to use.',
    deliverables: ['User research & personas', 'Wireframes & prototypes', 'Visual design & design systems', 'Usability testing', 'Handoff to development'],
  },
  {
    id: '3',
    num: '03',
    title: 'Consulting & Mentoring',
    shortDesc: 'Technical audits, architecture advice, and team mentoring.',
    longDesc: 'I help teams and products level up through technical audits, architecture reviews, and hands-on mentoring. Whether you need a one-off assessment or ongoing guidance, I can help.',
    deliverables: ['Code & architecture reviews', 'Tech stack recommendations', 'Performance & security audits', 'Team workshops & pair programming', 'Documentation & best practices'],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Services() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="services"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section"
      >
        <div className="container-narrow">
          <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Services</span>
          <h2 className="font-display section-title section-title-center mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
            What I offer
          </h2>
          <p className="font-body section-intro mt-4 font-light">
            From building products from scratch to improving existing ones, I offer end-to-end support so you can ship with confidence.
          </p>

          <div
            className={`mt-16 grid gap-8 transition-all duration-700 md:grid-cols-3 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {services.map((s, i) => (
              <div
                key={s.id}
                className="card card-hover flex flex-col p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-display text-6xl leading-none text-accent/20 dark:text-accent/30">
                  {s.num}
                </span>
                <h3 className="font-display mt-4 text-2xl leading-none text-zinc-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="font-body mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {s.shortDesc}
                </p>
                <p className="font-body mt-4 flex-1 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {s.longDesc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-zinc-200 pt-6 dark:border-zinc-700">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="font-body font-light">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}