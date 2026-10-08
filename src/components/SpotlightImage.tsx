import { useMemo, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  position?: string
  hint?: string
}

export default function SpotlightImage({ src, alt, className = '', position = 'object-top', hint }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const fine = useMemo(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches, [])
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const sx = useSpring(mx, { stiffness: 180, damping: 28, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 180, damping: 28, mass: 0.6 })
  const radius = useSpring(1, { stiffness: 140, damping: 22 })
  const safeRadius = useTransform(radius, (v) => Math.max(1, v))

  const mask = useMotionTemplate`radial-gradient(circle ${safeRadius}px at ${sx}px ${sy}px, black 0%, black 40%, transparent 100%)`

  const point = (clientX: number, clientY: number) => {
    const r = ref.current!.getBoundingClientRect()
    return { x: clientX - r.left, y: clientY - r.top }
  }

  return (
    <div
      ref={ref}
      className={`relative isolate overflow-hidden bg-ink ${className}`}
      onPointerEnter={(e) => {
        if (!fine) return
        const p = point(e.clientX, e.clientY)
        mx.set(p.x)
        my.set(p.y)
        sx.jump(p.x)
        sy.jump(p.y)
        setHovering(true)
        radius.set(240)
      }}
      onPointerMove={(e) => {
        const p = point(e.clientX, e.clientY)
        mx.set(p.x)
        my.set(p.y)
      }}
      onPointerLeave={() => {
        setHovering(false)
        radius.set(1)
      }}
    >
      {/* Layer 1: blue-toned monochrome (colour on touch screens) */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${position} ${
          fine ? 'contrast-125 grayscale' : ''
        }`}
      />
      {fine && (
        <>
          <div aria-hidden className="absolute inset-0 bg-electric opacity-80 mix-blend-color" />
          <div aria-hidden className="absolute inset-0 bg-ink/35" />

          {/* Layer 2: full colour, revealed under the cursor */}
          <motion.img
            aria-hidden
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${position}`}
            style={{ WebkitMaskImage: mask, maskImage: mask }}
          />
        </>
      )}

      {hint && fine && (
        <span
          className={`pointer-events-none absolute bottom-6 left-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-opacity duration-500 ${
            hovering ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {hint}
        </span>
      )}
    </div>
  )
}