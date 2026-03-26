import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export interface Skill {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  alt: string
  tags: string[]
  experience?: string
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const skills: Skill[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'React, Vue, HTML/CSS, TypeScript, Tailwind',
    longDescription: 'I build responsive, accessible interfaces with modern frameworks and a strong focus on performance and UX. From static sites to complex SPAs.',
    image: 'https://codedamn.com/assets/images/learnpaths/og/frontend.png',
    alt: 'Frontend development — code and browser',
    tags: ['React', 'TypeScript', 'Vue', 'HTML/CSS', 'Tailwind', 'Next.js'],
    experience: '5+ years',
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Node.js, Python, FastAPI, PostgreSQL',
    longDescription: 'APIs, databases, and server logic. I design and implement backends that are secure, scalable, and well-documented.',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fexhdwvs8rnju2cniz8oe.png',
    alt: 'Backend development — server and database',
    tags: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'REST', 'GraphQL'],
    experience: '4+ years',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Figma, UI/UX, Prototyping, Design Systems',
    longDescription: 'User research, wireframes, and high-fidelity design. I create systems that scale and interfaces that users enjoy.',
    image: 'https://cdn.dribbble.com/userupload/18401476/file/original-3c7347728a90f9bcc68c48f1c8ea284d.jpg?format=webp&resize=400x300&vertical=center',
    alt: 'UI/UX design and prototyping',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
    experience: '4+ years',
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Git, Docker, CI/CD, Agile',
    longDescription: 'Version control, containerization, and CI/CD pipelines. I keep projects organized and deployments smooth.',
    image: 'https://miro.medium.com/1*_eJaw96xLBR-xEzlwbTOyw.png',
    alt: 'DevOps and development tools',
    tags: ['Git', 'Docker', 'CI/CD', 'Agile', 'Vercel', 'AWS'],
    experience: '4+ years',
  },
]

const skillTags = ['JavaScript', 'TypeScript', 'React', 'Python', 'FastAPI', 'Figma', 'CSS', 'Node.js', 'PostgreSQL', 'Tailwind']
// ─────────────────────────────────────────────────────────────────────────────

export function Skills() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="skills"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section"
      >
        <div className="container-narrow">
          <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Skills</span>
          <h2 className="font-display section-title section-title-center mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
            What I work with
          </h2>
          <p className="font-body section-intro mt-4 font-light">
            I combine frontend, backend, design, and tooling to ship full products. Each area is backed by real project experience and continuous learning.
          </p>

          <div
            className={`mt-16 grid gap-6 transition-all duration-700 md:grid-cols-2 lg:grid-cols-4 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {skills.map((skill, i) => (
              <article
                key={skill.id}
                className="card card-hover group flex flex-col overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
                    <span className="font-display text-xl leading-none text-white drop-shadow-lg">
                      {skill.title}
                    </span>
                    {skill.experience && (
                      <span className="font-body rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {skill.experience}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-body text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {skill.longDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="tag font-body text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`mt-14 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            {skillTags.map((tag) => (
              <span key={tag} className="tag font-body text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}