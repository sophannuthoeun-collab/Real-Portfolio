import { useEffect, useState } from 'react'

export function useCounter(end: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let startTime: number
    const step = (now: number) => {
      if (!startTime) startTime = now
      const t = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(end * ease))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, trigger])

  return value
}
