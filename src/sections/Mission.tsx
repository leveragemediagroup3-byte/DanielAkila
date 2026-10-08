import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Compass, RefreshCw, Search } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import { site } from '../content/site'
import leadershipImg from '../assets/leadership-quote.png'

const icons = [RefreshCw, Search, Compass]
const START_CYCLE_MS = 3600 // when the spotlight starts moving between questions
const STEP_MS = 2600 // how long each question stays in the spotlight

export default function Mission() {
  const { mission } = site
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduce = useReducedMotion()
  const [active, setActive] = useState(-1)
  const count = mission.questions.length

  // Spotlight loop: one question at a time, forever
  useEffect(() => {
    if (!inView || reduce) return
    let timer: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      setActive(0)
      timer = setInterval(() => setActive((a) => (a + 1) % count), STEP_MS)
    }, START_CYCLE_MS)
    return () => {
      clearTimeout(start)
      clearInterval(timer)
    }
  }, [inView, reduce, count])

  const d = (n: number) => (reduce ? 0 : n) // delay helper
  const t = (n: number) => (reduce ? 0 : n) // duration helper

  return (
    <Section>
      <div ref={ref} className="grid items-center gap-14 md:grid-cols-12 md:gap-12">
        {/* Left: the questions */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: t(0.6) }}
          >
            <SectionLabel>{mission.label}</SectionLabel>
          </motion.div>
          <motion.div
            className="mt-4 h-px w-12 origin-left bg-burgundy"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: t(0.8), delay: d(0.2) }}
          />

          <motion.p
            className="mt-10 text-base text-muted md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
            transition={{ duration: t(0.7), delay: d(0.3) }}
          >
            {mission.intro}
          </motion.p>

          <div className="mt-8 space-y-5 md:space-y-6">
            {mission.questions.map((q, i) => {
              const Icon = icons[i]
              const dimmed = !reduce && active !== -1 && active !== i

              return (
                <div key={q} className="flex items-center gap-4 md:gap-5">
                  <motion.span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 md:h-12 md:w-12 ${
                      dimmed ? 'border-line text-ink/30' : 'border-electric/40 text-electric'
                    }`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.6 }}
                    transition={{ duration: t(0.6), delay: d(0.6 + i * 0.5) }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </motion.span>

                  <div className="relative">
                    <div className="overflow-hidden pb-2">
                      <motion.p
                        className={`font-display text-2xl leading-tight transition-colors duration-500 sm:text-3xl md:text-4xl ${
                          dimmed ? 'text-ink/30' : 'text-ink'
                        }`}
                        initial={{ y: '110%' }}
                        animate={{ y: inView ? '0%' : '110%' }}
                        transition={{ duration: t(0.9), delay: d(0.6 + i * 0.5), ease: 'easeOut' }}
                      >
                        {q}
                      </motion.p>
                    </div>

                    {/* Thin line that fills while this question is in the spotlight */}
                    {active === i && !reduce && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-electric"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* The answer */}
          <div className="mt-10 md:mt-12">
            <motion.div
              className="h-px w-full origin-left bg-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ duration: t(1), delay: d(2.1) }}
            />
            <motion.p
              className="mt-8 font-display text-3xl leading-tight md:text-5xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 22 }}
              transition={{ duration: t(0.8), delay: d(2.4) }}
            >
              {mission.closingLead}{' '}
              <span className="relative inline-block text-electric">
                {mission.closingHighlight}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-electric"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: inView ? 1 : 0 }}
                  transition={{ duration: t(0.8), delay: d(3.0) }}
                />
              </span>
            </motion.p>
          </div>
        </div>

        {/* Right: Daniel's portrait */}
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-md md:max-w-none">
            {/* Offset burgundy outline behind the frame */}
            <motion.div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-burgundy/40 md:translate-x-4 md:translate-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: t(1), delay: d(1.2) }}
            />

            {/* Frame reveals upward */}
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
              transition={{ duration: t(1.2), ease: 'easeInOut' }}
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(23,105,255,0.28),transparent_60%)]"
              />
              <motion.img
                src={leadershipImg}
                alt="Daniel Akila"
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={{ scale: 1.15 }}
                animate={{ scale: inView ? 1 : 1.15 }}
                transition={{ duration: t(1.8), ease: 'easeOut' }}
              />
            </motion.div>
          </div>

          <motion.p
            className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: t(0.8), delay: d(1.6) }}
          >
            Daniel Akila · Founder and CEO, DANMAC Consulting
          </motion.p>
        </div>
      </div>
    </Section>
  )
}