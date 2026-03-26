import { useEffect } from 'react'

export type AlertType = 'success' | 'error'

interface SubmitAlertProps {
  type: AlertType
  title: string
  message: string
  onClose: () => void
}

export function SubmitAlert({ type, title, message, onClose }: SubmitAlertProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div
        className="font-body fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-title"
        aria-describedby="alert-desc"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />

        {/* Card */}
        <div className="relative w-full max-w-md rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              isSuccess
                ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
                : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'
            }`}
          >
            {isSuccess ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <h2 id="alert-title" className="font-display mt-6 text-center text-2xl leading-none text-zinc-900 dark:text-white">
            {title}
          </h2>
          <p id="alert-desc" className="font-body mt-2 text-center font-light text-zinc-600 dark:text-zinc-400">
            {message}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary font-body mt-8 w-full py-3.5 font-medium tracking-wide"
          >
            OK
          </button>
        </div>
      </div>
    </>
  )
}