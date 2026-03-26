import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SubmitAlert } from './SubmitAlert'

// ─── Data ────────────────────────────────────────────────────────────────────
const contactEmail       = 'peter@gamil.com'
const contactPhone       = '+855 (097) 567-890'
const contactLocation    = 'Phnom Penh City, Cambodia'
const contactResponseNote = "I typically respond within 24 hours. For urgent inquiries, mention 'Urgent' in the subject."
const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', aria: 'LinkedIn' },
  { label: 'GitHub',   href: 'https://github.com',   aria: 'GitHub' },
  { label: 'Twitter',  href: 'https://twitter.com',  aria: 'Twitter' },
  { label: 'Telgram', href: 'https://dribbble.com', aria: 'Telegram' },
]
// ─────────────────────────────────────────────────────────────────────────────

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; title: string; message: string } | null>(null)
  const { ref: sectionRef, inView } = useInView()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name  = (form.elements.namedItem('name')    as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email')   as HTMLInputElement).value.trim()
    const msg   = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !msg) {
      setStatus('error')
      setAlert({ type: 'error', title: 'Missing information', message: 'Please fill in name, email, and message.' })
      return
    }

    setStatus('sending')
    setAlert(null)
    setTimeout(() => {
      setStatus('success')
      form.reset()
      setAlert({ type: 'success', title: 'Message sent!', message: "Thanks for reaching out. I'll get back to you within 24 hours." })
    }, 800)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="font-body section section-alt"
      >
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            {/* Info */}
            <div className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="section-label font-body tracking-widest uppercase text-xs font-medium">Contact</span>
              <h2 className="font-display section-title mt-2 text-[clamp(2rem,5vw,3.25rem)] leading-none">
                Let's build something together
              </h2>
              <p className="font-body mt-6 text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                Have a project in mind or want to chat? Drop a message and I'll get back within 24 hours.
              </p>
              <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/5 p-4 dark:border-accent/30 dark:bg-accent/10">
                <p className="font-body text-sm font-light text-zinc-700 dark:text-zinc-300">
                  {contactResponseNote}
                </p>
              </div>

              <ul className="mt-10 space-y-6">
                {[
                  { icon: '✉', label: 'Email', value: contactEmail, href: `mailto:${contactEmail}`, isLink: true },
                  { icon: '📞', label: 'Phone', value: contactPhone, href: `tel:${contactPhone.replace(/\s/g, '')}`, isLink: true },
                  { icon: '📍', label: 'Location', value: contactLocation, href: null, isLink: false },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent dark:bg-accent/20">
                      {item.icon}
                    </span>
                    <div>
                      <span className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <a
                          href={item.href!}
                          className="font-body mt-1 block text-lg font-medium text-zinc-900 transition hover:text-accent dark:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body mt-1 text-lg font-medium text-zinc-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Connect
                </span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.aria}
                      className="font-body rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`transition-all duration-700 delay-150 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <form
                onSubmit={handleSubmit}
                className="card flex flex-col p-8 shadow-card-hover dark:shadow-card-hover-dark"
              >
                <h3 className="font-display text-2xl leading-none text-zinc-900 dark:text-white">
                  Send a message
                </h3>
                <p className="font-body mt-1 text-sm font-light text-zinc-500 dark:text-zinc-400">
                  Fill in the form below and I'll reply as soon as I can.
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name',          required: true },
                    { id: 'email',   label: 'Email',   type: 'email', placeholder: 'you@example.com',    required: true },
                    { id: 'subject', label: 'Subject', type: 'text',  placeholder: 'Project or inquiry', required: false },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="font-body mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white">
                        {field.label} {field.required && <span className="text-accent">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="input font-body"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="font-body mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="input font-body min-h-[140px] resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary font-body mt-6 w-full py-3.5 font-medium tracking-wide disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {alert && (
          <SubmitAlert
            type={alert.type}
            title={alert.title}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </section>
    </>
  )
}