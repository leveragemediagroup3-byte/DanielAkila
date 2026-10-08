import { useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = { children: ReactNode; strength?: number }

export default function Magnetic({ children, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches

  if (!fine) return <>{children}</>

  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={move}
      onPointerLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}