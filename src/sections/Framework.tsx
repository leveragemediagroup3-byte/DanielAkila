import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Flame, Landmark, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

const icons: LucideIcon[] = [Flame, TrendingUp, Landmark]

const INTRO = 2.4 // seconds for the line to draw itself the first time
const LOOP = 3 // seconds for the light to travel the line (higher = slower)

export default function Framework() {
  const { framework } = site
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const reduce = useReducedMotion()
  const last = framework.stages.length - 1

  return (
    <Section id="framework" className="relative overflow-hidden bg-ink text-white">
      {/* Very subtle blue glow at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(23,105,255,0.16),transparent_60%)]"
      />

      <div className="relative">
        <Reveal>
          <SectionLabel tone="electric">{framework.label}</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {framework.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {framework.intro}
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-8">
          {/* Desktop: the flowing line that connects the three stages */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-7 hidden md:block">
            <div className="h-px w-full bg-line-dark" />

            <motion.div
              className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-electric via-electric/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : INTRO, ease: 'easeInOut' }}
            />

            {/* Light that keeps travelling along the line */}
            {!reduce && inView && (
              <motion.span
                className="absolute top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-electric shadow-[0_0_18px_4px_rgba(23,105,255,0.7)]"
                initial={{ left: '0%', opacity: 0 }}
                animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                transition={{
                  left: { duration: LOOP, delay: INTRO, repeat: Infinity, ease: 'linear' },
                  opacity: {
                    duration: LOOP,
                    delay: INTRO,
                    repeat: Infinity,
                    ease: 'linear',
                    times: [0, 0.08, 0.92, 1],
                  },
                }}
              />
            )}
          </div>

          {framework.stages.map((stage, i) => {
            const Icon = icons[i]
            // Roughly when the line reaches this stage's icon
            const reach = reduce ? 0 : i * 0.343 * INTRO

            return (
              <div key={stage.title} className="relative pl-20 md:pl-0">
                {/* Mobile: vertical line down to the next stage */}
                {i < last && (
                  <motion.span
                    aria-hidden
                    className="absolute -bottom-14 left-[27px] top-14 w-px origin-top bg-gradient-to-b from-electric to-electric/20 md:hidden"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: inView ? 1 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : i * 0.9, ease: 'easeInOut' }}
                  />
                )}

                {/* Icon node */}
                <div className="absolute left-0 top-0 z-10 md:static">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-electric/40 bg-ink">
                    <span className="absolute inset-0 rounded-full bg-electric/10" />

                    {/* Soft ring that pulses when the light passes */}
                    {!reduce && inView && (
                      <motion.span
                        className="absolute inset-0 rounded-full border border-electric"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: [0.55, 0, 0], scale: [1, 1.9, 1.9] }}
                        transition={{
                          duration: LOOP,
                          times: [0, 0.3, 1],
                          delay: INTRO + i * 0.343 * LOOP,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    )}

                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: reduce ? 0 : 0.6, delay: reach, ease: 'easeOut' }}
                    >
                      <Icon size={24} strokeWidth={1.75} className="text-electric" />
                    </motion.div>
                  </div>
                </div>

                {/* Arrow to the next stage (desktop only) */}
                {i < last && (
                  <motion.span
                    aria-hidden
                    className="absolute right-0 top-[17px] hidden bg-ink pl-1 md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.6, delay: reach + 0.9 }}
                  >
                    <ArrowRight size={22} className="text-electric" />
                  </motion.span>
                )}

                {/* Stage text */}
                <motion.div
                  className="pt-1 md:mt-8 md:pt-0"
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                  transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.3 + reach, ease: 'easeOut' }}
                >
                  <p className="text-xs font-bold tracking-[0.22em] text-white/50">{stage.number}</p>
                  <h3 className="mt-4 font-display text-5xl leading-none md:text-4xl lg:text-6xl">
                    {stage.title}
                  </h3>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-electric">
                    {stage.keywords}
                  </p>
                  <p className="mt-5 max-w-sm leading-relaxed text-white/70">{stage.text}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}