import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { site } from '../content/site'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  const { hero, brand } = site

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Subtle electric-blue glow behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(23,105,255,0.22),transparent_55%)]"
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1240px] px-6 pt-32 md:grid-cols-12 md:items-stretch md:gap-8 md:px-10 md:pt-0">
        {/* Left: message */}
        <div className="md:col-span-7 md:py-32">
          <Reveal>
            <SectionLabel tone="light">{brand.eyebrow}</SectionLabel>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              {hero.lineOne}
              <span className="block text-electric">{hero.lineTwo}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.text}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="outline">
                {hero.secondary.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-14 border-t border-line-dark pt-6 text-xs font-bold uppercase tracking-[0.22em] text-white/50">
              Passion → Profit → Posterity
            </p>
          </Reveal>
        </div>

        {/* Right: portrait, same height as the text column */}
        <div className="mt-12 pb-12 md:col-span-5 md:mt-0 md:py-32">
          <div className="relative h-[480px] overflow-hidden rounded-xl ring-1 ring-white/10 sm:h-[560px] md:h-full">
            <img
              src={portrait}
              alt="Daniel Akila"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* Soft shade at the very bottom for depth */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}