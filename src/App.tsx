import Navbar from './components/Navbar'
import Section from './components/Section'
import SectionLabel from './components/SectionLabel'
import Button from './components/Button'
import Reveal from './components/Reveal'
import { site } from './content/site'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Section className="flex min-h-screen items-center bg-ink text-white">
          <Reveal>
            <SectionLabel tone="light">{site.brand.eyebrow}</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
              {site.hero.lineOne}{' '}
              <span className="text-electric">{site.hero.lineTwo}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/70">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={site.hero.primary.href}>{site.hero.primary.label}</Button>
              <Button href={site.hero.secondary.href} variant="outline">
                {site.hero.secondary.label}
              </Button>
            </div>
          </Reveal>
        </Section>

        <Section>
          <Reveal>
            <SectionLabel>{site.mission.label}</SectionLabel>
            <p className="mt-6 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              {site.mission.lineOne}
              <br />
              {site.mission.lineTwo}
            </p>
          </Reveal>
        </Section>
      </main>
    </>
  )
}