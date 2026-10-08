import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { site } from '../content/site'

export default function Danmac() {
  const { danmac } = site

  return (
    <Section id="danmac">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        {/* Left: heading, stays in view on desktop */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Reveal>
              <SectionLabel>{danmac.label}</SectionLabel>
              <div className="mt-4 h-px w-12 bg-burgundy" />
              <h2 className="mt-8 font-display text-4xl leading-tight md:text-5xl">
                {danmac.heading}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">{danmac.text}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                {danmac.fullName}
              </p>
              <div className="mt-8">
                <Button href={danmac.cta.href}>{danmac.cta.label}</Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: the three arms, then services */}
        <div className="md:col-span-7">
          <div className="border-b border-line">
            {danmac.arms.map((arm, i) => (
              <Reveal key={arm.title} delay={i * 0.08}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-8 md:grid-cols-[4rem_1fr] md:gap-x-8 md:py-10">
                  <span className="font-display text-xl text-burgundy md:text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug md:text-3xl">{arm.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-muted">{arm.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-12 text-xs font-bold uppercase tracking-[0.22em] text-muted">
              {danmac.servicesLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {danmac.services.map((s) => (
                <span key={s} className="rounded-full border border-line px-4 py-2 text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}