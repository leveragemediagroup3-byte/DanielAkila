import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Speaking from '../sections/Speaking'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

// What event organisers should include when they enquire
const checklist = [
  'Event name and date',
  'Audience size and type',
  'Topic or theme',
  'Location or delivery mode',
  'Speaking duration',
  'Budget range (optional)',
]

export default function SpeakingPage() {
  const page = site.pages.speaking
  usePageMeta('Speaking | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="Speaking" title={page.title} intro={page.intro} />
      <div className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="h-px bg-line-dark" />
        </div>
      </div>
      <Speaking />

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>Planning an event?</SectionLabel>
              <div className="mt-4 h-px w-12 bg-burgundy" />
              <h2 className="mt-8 font-display text-4xl leading-tight md:text-5xl">
                What to include in your enquiry.
              </h2>
              <div className="mt-8">
                <Button href="#book">{site.speaking.cta.label}</Button>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="border-b border-line">
              {checklist.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="flex items-baseline gap-5 border-t border-line py-5">
                    <span className="text-xs font-bold tracking-[0.2em] text-burgundy">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}