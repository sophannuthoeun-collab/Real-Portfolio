import { useState } from 'react'
import { useInView } from '../hooks/useInView'

// ─── Types ───────────────────────────────────────────────────────────────────
export type ProjectCategory = 'web' | 'app' | 'design'

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  description: string
  longDescription: string
  image: string
  link: string
  year: string
  tech: string[]
  role?: string
  liveUrl?: string
  githubUrl?: string
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: '1',
    category: 'web',
    title: 'E-Commerce Platform',
    description: 'Full-stack store with cart, checkout, and admin dashboard.',
    longDescription: 'A complete e-commerce solution with product catalog, cart, checkout flow, payment integration, and an admin dashboard for inventory and orders. Built for scalability and conversion optimization.',
    image: 'https://cdn.dribbble.com/userupload/23744972/file/original-f09ad4491cf30c1628e68083ad7d12ad.jpg?resize=400x0',
    link: '#',
    year: '2024',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    role: 'Lead Developer',
    liveUrl: 'https://demo.example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce-platform',
  },
  {
    id: '2',
    category: 'app',
    title: 'Mobile Fitness App',
    description: 'Cross-platform app for workouts and progress tracking.',
    longDescription: 'A cross-platform mobile app that lets users plan workouts, track progress, and sync data across devices. Includes social features and integration with wearables.',
    image: 'https://cdn.dribbble.com/userupload/9775046/file/original-c41d6266c297e9e55aa3ce59b2cb7b82.png?resize=400x0',
    link: '#',
    year: '2024',
    tech: ['React Native', 'Firebase', 'TypeScript'],
    role: 'Full-stack Developer',
    liveUrl: 'https://demo.example.com/fitness-app',
    githubUrl: 'https://github.com/username/fitness-app',
  },
  {
    id: '3',
    category: 'design',
    title: 'Brand Identity',
    description: 'Logo, guidelines, and marketing assets for a startup.',
    longDescription: 'End-to-end brand identity for a tech startup: logo design, color system, typography, and a full set of marketing assets and social templates.',
    image: 'https://img.freepik.com/free-vector/corporate-branding-identity-design_91128-989.jpg',
    link: '#',
    year: '2023',
    tech: ['Figma', 'Illustrator'],
    role: 'Brand Designer',
    githubUrl: 'https://github.com/username/brand-assets',
  },
  {
    id: '4',
    category: 'web',
    title: 'Dashboard Analytics',
    description: 'Real-time charts and reporting for SaaS product.',
    longDescription: 'Analytics dashboard for a B2B SaaS product with real-time metrics, customizable reports, and export options. Designed for clarity and decision-making at a glance.',
    image: 'https://cdn.dribbble.com/userupload/17730953/file/original-05a2f18aae02857f16dc660924a28639.png?format=webp&resize=400x300&vertical=center',
    link: '#',
    year: '2023',
    tech: ['React', 'D3.js', 'FastAPI', 'PostgreSQL'],
    role: 'Frontend Lead',
    liveUrl: 'https://demo.example.com/dashboard',
    githubUrl: 'https://github.com/username/analytics-dashboard',
  },
  {
    id: '5',
    category: 'app',
    title: 'Finance Tracker',
    description: 'Budget and expense tracking with sync across devices.',
    longDescription: 'Personal finance app for budgeting and expense tracking with bank sync, categories, and goals. Available on web and mobile with real-time sync.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d3a01e160041031.63abd58ab7270.png',
    link: '#',
    year: '2023',
    tech: ['React', 'Python', 'Plaid API'],
    role: 'Solo Developer',
    liveUrl: 'https://demo.example.com/finance-tracker',
    githubUrl: 'https://github.com/username/finance-tracker',
  },
  {
    id: '6',
    category: 'design',
    title: 'Landing Page Kit',
    description: 'Modular components for high-conversion landing pages.',
    longDescription: 'A design system and component library for marketing landing pages. Includes hero variants, feature sections, testimonials, and CTAs—all optimized for conversion.',
    image: 'https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png',
    link: '#',
    year: '2023',
    tech: ['Figma', 'React', 'Storybook'],
    role: 'Design & Dev',
    liveUrl: 'https://demo.example.com/landing-kit',
    githubUrl: 'https://github.com/username/landing-page-kit',
  },
]

const filters: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all',    label: 'All' },
  { value: 'web',    label: 'Web' },
  { value: 'app',    label: 'App' },
  { value: 'design', label: 'Design' },
]
// ─────────────────────────────────────────────────────────────────────────────

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')
  const { ref: sectionRef, inView } = useInView()
  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="projects"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section section-alt"
      >
        <div className="container-narrow">
          <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Portfolio</span>
          <h2 className="font-display section-title section-title-center mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
            Selected work
          </h2>
          <p className="font-body section-intro mt-4 font-light">
            A selection of recent projects across web development, mobile apps, and design. Each one involved full ownership from concept to delivery.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`font-body rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeFilter === f.value
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={`mt-12 grid gap-8 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {filtered.map((project) => (
              <article key={project.id} className="card card-hover group flex flex-col overflow-hidden">
                <a href={project.link} className="flex flex-1 flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="font-body rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm dark:bg-zinc-900/95">
                        {project.category}
                      </span>
                      <span className="font-body rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-medium text-zinc-600 shadow-sm dark:bg-zinc-900/95 dark:text-zinc-400">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl leading-none text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="font-body mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {project.role}
                      </p>
                    )}
                    <p className="font-body mt-3 flex-1 text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.longDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tag font-body text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-2 border-t border-zinc-200/80 p-4 dark:border-zinc-700">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-800 hover:bg-zinc-800 hover:text-white dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}