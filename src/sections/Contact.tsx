import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { openBooking } from '../lib/booking'
import { site } from '../content/site'

export default function Contact() {
  const { engagement, contact } = site

  return (
    <Section id="contact" className="border-t border-line">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        {/* Left: message and contact details */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Reveal>
              <SectionLabel>{engagement.label}</SectionLabel>
              <div className="mt-4 h-px w-12 bg-burgundy" />
              <h2 className="mt-8 font-display text-4xl leading-tight md:text-6xl">{engagement.heading}</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">{engagement.text}</p>
              <div className="mt-8">
                <Button href="#book">Book Daniel</Button>
              </div>

              <dl className="mt-12 space-y-6 border-t border-line pt-8 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${contact.email}`} className="font-semibold hover:text-electric">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-semibold hover:text-electric">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Office</dt>
                  <dd className="mt-1 font-semibold">{contact.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Follow</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                    {contact.social.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold hover:text-electric"
                      >
                        {s.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Right: engagement types */}
        <div className="md:col-span-7">
          <div className="border-b border-line">
            {engagement.options.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <button
                  onClick={() => openBooking(o.title)}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 border-t border-line py-8 text-left md:grid-cols-[4rem_1fr_auto] md:gap-x-8 md:py-10"
                >
                  <span className="font-display text-xl text-burgundy md:text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-display text-2xl leading-snug transition-colors group-hover:text-electric md:text-3xl">
                      {o.title}
                    </span>
                    <span className="mt-3 block max-w-md leading-relaxed text-muted">{o.text}</span>
                  </span>
                  <ArrowRight
                    size={22}
                    className="mt-2 text-electric opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}