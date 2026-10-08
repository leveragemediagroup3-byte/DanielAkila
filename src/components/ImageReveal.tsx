import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  position?: string
}

export default function ImageReveal({ src, alt, className = '', position = 'object-top' }: Props) {
  const reduce = useReducedMotion()
  const viewport = { once: true, margin: '-80px' }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-ink ${className}`}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={viewport}
      transition={{ duration: reduce ? 0 : 1.1, ease: 'easeInOut' }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${position}`}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: reduce ? 0 : 1.6, ease: 'easeOut' }}
      />
    </motion.div>
  )
}