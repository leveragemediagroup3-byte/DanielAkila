import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

export default function Expertise() {
  const { expertise } = site

  return (
    <Section id="expertise" className="border-t border-line">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Left: heading, stays in view while the list scrolls */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Reveal>
              <SectionLabel>{expertise.label}</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                {expertise.heading}
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">{expertise.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* Right: numbered editorial rows */}
        <div className="border-b border-line md:col-span-8">
          {expertise.items.map((item, i) => (
            <Reveal key={item.title}>
              <div className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 border-t border-line py-7 md:grid-cols-[4rem_1fr_1.1fr] md:gap-x-8 md:py-9">
                <span className="font-display text-xl text-burgundy md:text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl leading-snug transition-colors group-hover:text-electric md:text-3xl">
                  {item.title}
                </h3>
                <p className="col-start-2 leading-relaxed text-muted md:col-start-3 md:pt-1.5">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}