import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'
import Button from '../components/Button'
import { site } from '../content/site'
import speakingImg from '../assets/speaking.jpg'

export default function Speaking() {
  const { speaking } = site

  return (
    <Section id="speaking" className="relative overflow-hidden bg-ink text-white">
      {/* Subtle blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(23,105,255,0.16),transparent_55%)]"
      />

      <div className="relative grid items-center gap-14 md:grid-cols-12 md:gap-16">
        {/* Left: photo */}
        <div className="md:col-span-5">
          <ImageReveal
            src={speakingImg}
            alt="Daniel Akila speaking"
            className="aspect-[4/5] w-full ring-1 ring-white/10"
            position="object-center"
          />
        </div>

        {/* Right: message and topics */}
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel tone="electric">{speaking.label}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              {speaking.heading}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {speaking.text}
            </p>
          </Reveal>

          <ul className="mt-10 border-b border-line-dark">
            {speaking.topics.map((topic, i) => (
              <Reveal key={topic} delay={i * 0.06}>
                <li className="group flex items-center justify-between gap-4 border-t border-line-dark py-4">
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium transition-colors group-hover:text-white md:text-lg">
                      {topic}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-electric opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href={speaking.cta.href}>{speaking.cta.label}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}