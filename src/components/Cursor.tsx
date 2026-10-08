import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: MouseEvent) => {
      const t = (e.target as Element | null)?.closest?.('[data-cursor], a, button, [role="button"]')
      if (!t) {
        setHover(false)
        setLabel('')
        return
      }
      setHover(true)
      setLabel(t.getAttribute('data-cursor') ?? '')
    }
    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move)
    document.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  const size = label ? 92 : hover ? 60 : 34

  return (
    <>
      {/* Dot: follows the pointer exactly */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ opacity: visible && !hover ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      >
        <div className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>

      {/* Ring: an outline that never fills, so it can't hide or invert what is under it.
          Over items with a label (like "View") it becomes a solid blue disc. */}
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry }}
        animate={{ opacity: visible ? 1 : 0 }}
        className={`pointer-events-none fixed left-0 top-0 z-[100] ${label ? '' : 'mix-blend-difference'}`}
      >
        <motion.div
          className={`flex items-center justify-center rounded-full border ${
            label ? 'border-electric bg-electric' : 'border-white'
          }`}
          initial={false}
          animate={{ width: size, height: size, x: -size / 2, y: -size / 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        >
          {label && (
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">{label}</span>
          )}
        </motion.div>
      </motion.div>
    </>
  )
}