import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

export default function Framework() {
  const { framework } = site

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

        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-8">
          {framework.stages.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 0.15}>
              <div className="relative border-t border-line-dark pt-8">
                {/* Node on the rule */}
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-electric" />

                {/* Arrow to the next stage (desktop only) */}
                {i < framework.stages.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="absolute -top-3 right-0 hidden bg-ink pl-1 text-electric md:block"
                  />
                )}

                <p className="text-xs font-bold tracking-[0.22em] text-white/50">
                  {stage.number}
                </p>
                <h3 className="mt-6 font-display text-5xl leading-none md:text-4xl lg:text-6xl">
                  {stage.title}
                </h3>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-electric">
                  {stage.keywords}
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-white/70">{stage.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}