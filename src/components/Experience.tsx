import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export type ExperienceKind = 'education' | 'work' | 'learning'

export interface ExperienceItem {
  id: string
  kind: ExperienceKind
  period: string
  title: string
  place: string
  location: string
  description: string
  highlights: string[]
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const experienceIntro = {
  title: 'Experience & learning journey',
  subtitle:
    'From high school curiosity to professional work, here is how my path in design and development has evolved over time.',
}

const experienceTimeline: ExperienceItem[] = [
  {
    id: 'high-school',
    kind: 'learning',
    period: '2014 – 2017',
    title: 'High school: first lines of code',
    place: 'High School',
    location: 'Banlung City',
    description:
      'Discovered programming through basic web pages and small C++ exercises. Joined the school tech club and started building simple projects for fun.',
    highlights: [
      'Built first static websites for classmates and clubs',
      'Learned fundamentals of HTML, CSS, and problem solving',
      'Participated in local programming and math competitions',
    ],
  },
  {
    id: 'university',
    kind: 'education',
    period: '2017 – 2021',
    title: 'Bachelor in Computer Science',
    place: 'State University',
    location: 'Phnom Penh City',
    description:
      'Studied software engineering, algorithms, and human–computer interaction while actively contributing to university projects and hackathons.',
    highlights: [
      'Specialized in web development and UX',
      'Led a small team to build a campus event app',
      'Completed thesis on design systems for multi-platform apps',
    ],
  },
  {
    id: 'internship',
    kind: 'work',
    period: 'Summer 2019',
    title: 'Frontend Engineering Intern',
    place: 'Creative Agency',
    location: 'Remote / On-site',
    description:
      'First industry experience shipping production features for real clients, collaborating with designers and backend engineers.',
    highlights: [
      'Implemented responsive marketing pages and components',
      'Introduced basic accessibility checks to the team workflow',
      'Learned how to work with Git, code review, and agile processes',
    ],
  },
  {
    id: 'first-role',
    kind: 'work',
    period: '2021 – 2023',
    title: 'Full‑stack Developer',
    place: 'Product Startup',
    location: 'Remote',
    description:
      'Owned features end-to-end across frontend, backend, and design. Helped the company grow from MVP to a stable SaaS product.',
    highlights: [
      'Designed and built the main dashboard and onboarding flows',
      'Migrated legacy pages to a modern React + TypeScript stack',
      'Worked closely with product and design to refine UX',
    ],
  },
  {
    id: 'current',
    kind: 'work',
    period: '2023 – Present',
    title: 'Senior Frontend / Product Engineer',
    place: 'Tech Company',
    location: 'Remote',
    description:
      'Balancing architecture, implementation, and product thinking. Mentoring teammates and shaping the design system and frontend practices.',
    highlights: [
      'Leading frontend architecture and component library',
      'Mentoring junior developers and running code reviews',
      'Collaborating with designers to evolve the design system',
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const kindLabel: Record<ExperienceKind, string> = {
  education: 'Education',
  work: 'Work',
  learning: 'Learning',
}

const kindColor: Record<ExperienceKind, string> = {
  education: 'from-sky-400 to-blue-500',
  work: 'from-emerald-400 to-emerald-500',
  learning: 'from-amber-400 to-orange-500',
}

export function Experience() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="experience"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Experience</span>
            <h2 className="font-display section-title mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none text-balance">
              {experienceIntro.title}
            </h2>
            <p className="font-body section-intro mt-4 font-light text-balance">
              {experienceIntro.subtitle}
            </p>
          </div>

          <div
            className={`mt-14 grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-zinc-300 to-transparent md:block dark:via-zinc-700" />
              <ol className="space-y-8">
                {experienceTimeline.map((item, index) => (
                  <li key={item.id} className="relative flex gap-4 md:pl-10" style={{ transitionDelay: `${index * 80}ms` }}>
                    {/* Node */}
                    <div className="relative mt-1 hidden md:block">
                      <div className={`h-9 w-9 rounded-2xl bg-gradient-to-br ${kindColor[item.kind]} shadow-glow shadow-accent/40`} />
                      <div className="absolute inset-0 rounded-2xl border border-white/60 dark:border-zinc-900/80" />
                    </div>

                    {/* Card */}
                    <div className="card card-hover w-full p-5 md:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                          <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${kindColor[item.kind]}`} />
                          {kindLabel[item.kind]}
                        </span>
                        <span className="font-body text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-display mt-3 text-xl leading-none text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        {item.place} · {item.location}
                      </p>
                      <p className="font-body mt-3 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1 h-1 w-3 shrink-0 rounded-full bg-accent" />
                            <span className="font-body font-light">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Legend */}
            <aside className="card p-6 md:sticky md:top-28">
              <h3 className="font-display text-2xl leading-none text-zinc-900 dark:text-white">
                A continuous roadmap
              </h3>
              <p className="font-body mt-2 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                This timeline groups my journey into three themes: early learning,
                formal education, and professional work. Together they show how I
                moved from curiosity to impact.
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  { gradient: 'from-amber-400 to-orange-500', label: 'Learning', desc: 'High‑school projects, experiments, and self‑driven learning that built foundational skills.' },
                  { gradient: 'from-sky-400 to-blue-500',     label: 'Education', desc: 'University studies and academic projects where I learned theory, collaboration, and research.' },
                  { gradient: 'from-emerald-400 to-emerald-500', label: 'Work', desc: 'Internships and roles where I shipped real products, mentored others, and owned features end‑to‑end.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <dt className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient}`} />
                    <dd>
                      <span className="font-body font-semibold text-zinc-900 dark:text-white">{item.label}</span>
                      <p className="font-body font-light text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}