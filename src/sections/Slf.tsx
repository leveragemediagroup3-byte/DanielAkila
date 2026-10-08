import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import SlfGallery from '../components/SlfGallery'
import SlfMark from '../components/SlfMark'
import { site } from '../content/site'

export default function Slf({ showMark = true }: { showMark?: boolean }) {
  const { slf } = site

  return (
    <Section id="slf" className="relative overflow-hidden bg-ink text-white">
      {/* Subtle blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(23,105,255,0.18),transparent_55%)]"
      />

      <div className="relative">
        {/* Introduction */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel tone="electric">{slf.label}</SectionLabel>
              {showMark && <SlfMark title={slf.title} />}
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-electric md:text-sm">
                {slf.subtitle}
              </p>
              <p className="mt-6 inline-block rounded-full border border-line-dark px-4 py-2 text-xs font-semibold tracking-wide text-white/70">
                {slf.since}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-4">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">{slf.heading}</h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-white/70">{slf.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {slf.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-line-dark px-4 py-2 text-sm text-white/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Editions */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <SectionLabel tone="light">{slf.editionsLabel}</SectionLabel>
          </Reveal>

          <div className="mt-6 border-b border-line-dark">
            {slf.editions.map((ed, i) => (
              <Reveal key={ed.year} delay={i * 0.08}>
                <div className="grid items-center gap-4 border-t border-line-dark py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <p className="font-display text-4xl text-electric md:col-span-2 md:text-5xl">
                    {ed.year}
                  </p>
                  <h3 className="font-display text-2xl leading-snug md:col-span-6 md:text-4xl">
                    {ed.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
                    {ed.parts.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/80"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <SectionLabel tone="electric">{slf.galleryLabel}</SectionLabel>
            <h3 className="mt-6 font-display text-3xl md:text-4xl">{slf.galleryHeading}</h3>
          </Reveal>
          <div className="mt-8">
            <SlfGallery years={slf.editions.map((e) => e.year)} />
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <Button href={slf.cta.href}>{slf.cta.label}</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}