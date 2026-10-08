import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'
import { site } from '../content/site'
import aboutImg from '../assets/about.jpg'

export default function About() {
  const { about } = site

  return (
    <Section id="about" className="border-t border-line">
      <div className="grid items-center gap-14 md:grid-cols-12 md:gap-16">
        {/* Left: portrait */}
        <div className="md:col-span-5">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-burgundy/40 md:translate-x-4 md:translate-y-4"
            />
            <ImageReveal
              src={aboutImg}
              alt="Daniel Akila"
              className="aspect-[4/5] w-full"
              position="object-top"
            />
          </div>
        </div>

        {/* Right: story */}
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>{about.label}</SectionLabel>
            <div className="mt-4 h-px w-12 bg-burgundy" />
            <h2 className="mt-8 font-display text-4xl leading-tight md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.1 + i * 0.1}>
                <p
                  className={
                    i === 0
                      ? 'text-lg leading-relaxed text-ink md:text-xl'
                      : 'leading-relaxed text-muted'
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {about.highlights.map((h, i) => (
              <Reveal key={h} delay={0.1 + i * 0.08}>
                <li className="flex items-center gap-3 border-t border-line py-4 text-sm font-semibold">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                  {h}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href={about.link.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric"
            >
              {about.link.label}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* The Northern Vision: pull quote */}
      <div className="mt-24 grid gap-8 border-t border-line pt-16 md:mt-32 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <SectionLabel>{about.visionLabel}</SectionLabel>
            <div className="mt-4 h-px w-12 bg-burgundy" />
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <blockquote className="font-display text-3xl leading-tight md:text-5xl">
              <span className="text-burgundy">“</span>
              {about.visionQuote}
              <span className="text-burgundy">”</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">{about.visionText}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}