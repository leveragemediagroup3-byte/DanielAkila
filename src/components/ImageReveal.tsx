import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  position?: string
}

export default function ImageReveal({ src, alt, className = '', position = 'object-top' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const reduce = useReducedMotion()
  const show = inView || !!reduce

  return (
    // The wrapper is never clipped, so the browser can always tell when it is on screen
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 overflow-hidden bg-ink"
        initial={false}
        animate={{ clipPath: show ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
        transition={{ duration: reduce ? 0 : 1.1, ease: 'easeInOut' }}
      >
        <motion.img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${position}`}
          initial={false}
          animate={{ scale: show ? 1 : 1.12 }}
          transition={{ duration: reduce ? 0 : 1.6, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
  )
}