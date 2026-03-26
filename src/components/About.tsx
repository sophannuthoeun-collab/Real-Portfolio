import { useInView } from '../hooks/useInView'

// ─── Data ────────────────────────────────────────────────────────────────────
const aboutHeadline  = 'I turn ideas into digital reality'
const aboutHighlight = 'digital reality'
const aboutParagraphs = [
  "I'm a passionate creator with a focus on clean code, thoughtful design, and user-centered experiences. With over five years in the industry, I've helped startups and enterprises build products that users love and businesses rely on.",
  "From concept and wireframes to implementation and launch, I bring projects to life with attention to detail, clear communication, and a drive for excellence. I believe great digital products come from the intersection of design, technology, and empathy.",
  "When I'm not coding or designing, you'll find me exploring new tools, contributing to open source, writing about frontend and UX, or sharing knowledge with the community at meetups and conferences.",
]
const aboutHighlights = [
  { text: 'Based in Phnom Penh City',          icon: '📍' },
  { text: 'Available for freelance & contracts', icon: '✓' },
  { text: 'Open to full-time remote roles',      icon: '✓' },
  { text: 'Response within 24 hours',            icon: '✓' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function About() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="about"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section section-alt"
      >
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image */}
            <div className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-zinc-200/50 dark:ring-zinc-700/50">
                  <img
                    src="Photo.jpg"
                    alt="Portrait"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-accent/20 dark:bg-accent/30" aria-hidden />
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-150 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="section-label font-body tracking-widest uppercase text-xs font-medium">About Me</span>
              <h2 className="font-display section-title mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
                {aboutHeadline.split(aboutHighlight)[0]}
                <em className="not-italic text-accent">{aboutHighlight}</em>
              </h2>

              <div className="mt-8 space-y-5">
                {aboutParagraphs.map((p, i) => (
                  <p key={i} className="font-body text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li
                    key={item.text}
                    className="font-body flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-zinc-700 shadow-card dark:bg-zinc-900/80 dark:text-zinc-300 dark:shadow-card-dark"
                  >
                    <span className="text-accent" aria-hidden>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary font-body mt-10 font-medium tracking-wide">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}