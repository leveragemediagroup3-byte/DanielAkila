import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

export default function Mission() {
  const { mission } = site

  return (
    <Section>
      <Reveal>
        <SectionLabel>{mission.label}</SectionLabel>
        <div className="mt-4 h-px w-12 bg-burgundy" />
        <p className="mt-10 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
          {mission.lineOne}
          <br />
          <span className="text-muted">{mission.lineTwo}</span>
        </p>
      </Reveal>
    </Section>
  )
}