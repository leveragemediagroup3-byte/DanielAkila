import { Fragment } from 'react'
import type { ElementType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type Props = {
  children: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
}

const wrap: Variants = { hidden: {}, visible: {} }

const item: Variants = {
  hidden: { y: '115%' },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function RevealText({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  stagger = 0.06,
}: Props) {
  const reduce = useReducedMotion()

  if (reduce) return <Tag className={className}>{children}</Tag>

  const words = children.split(' ')

  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {/* The wrapper is what the browser watches, so it must not be moved or clipped itself */}
          <motion.span
            aria-hidden
            variants={wrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom"
          >
            <motion.span className="inline-block" variants={item} custom={delay + i * stagger}>
              {word}
            </motion.span>
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  )
}