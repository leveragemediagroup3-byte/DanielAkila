import { ArrowUpRight } from 'lucide-react'
import Button from './Button'
import { site } from '../content/site'
import logo from '../assets/logo.png'

export default function Footer() {
  const { nav, contact, footer, brand, engagement } = site
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line-dark bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Closing call to action */}
        <div className="flex flex-col gap-8 border-b border-line-dark py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">{engagement.heading}</h2>
          <div>
            <Button href="#book">Book Daniel</Button>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="/" aria-label="Daniel Akila home">
              <img src={logo} alt="Daniel Akila" className="h-11 w-auto" />
            </a>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{footer.statement}</p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/60">{brand.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>{contact.address}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/70 hover:text-white"
                >
                  {s.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line-dark py-6 text-xs text-white/50">
          © {year} {footer.copyright}
        </div>
      </div>
    </footer>
  )
}