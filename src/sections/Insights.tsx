import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

export default function Insights() {
  const { insights } = site
  const [lead, ...rest] = insights.featured

  return (
    <Section id="insights" className="border-t border-line">
      <Reveal>
        <SectionLabel>{insights.label}</SectionLabel>
        <div className="mt-4 h-px w-12 bg-burgundy" />
        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end md:gap-16">
          <h2 className="font-display text-4xl leading-tight md:col-span-7 md:text-5xl">
            {insights.heading}
          </h2>
          <p className="leading-relaxed text-muted md:col-span-5">{insights.text}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {insights.categories.map((c) => (
            <span key={c} className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-muted">
              {c}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-12">
        {/* Featured insight */}
        <div className="md:col-span-7">
          <Reveal>
            <article className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-xl bg-ink p-8 text-white md:min-h-[460px] md:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(23,105,255,0.25),transparent_55%)]"
              />
              <div className="relative flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric">{lead.category}</p>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Coming soon
                </span>
              </div>
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Featured insight</p>
                <h3 className="mt-4 max-w-lg font-display text-3xl leading-tight md:text-4xl">{lead.title}</h3>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Supporting insights */}
        <div className="flex flex-col md:col-span-5">
          {rest.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.1}>
              <article className="border-t border-line py-8 md:py-10">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">{item.category}</p>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Coming soon</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug md:text-3xl">{item.title}</h3>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line pt-8">
            <Reveal delay={0.2}>
              <a
                href={insights.cta.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-electric"
              >
                {insights.cta.label}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}