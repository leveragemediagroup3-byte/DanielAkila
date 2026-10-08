import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { site } from '../content/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-ink/90 py-3 backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 text-white md:px-10">
        <a href="#top" aria-label="Daniel Akila home">
          <img src={logo} alt="Daniel Akila" className="h-9 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            className="rounded-lg bg-electric px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#0f55d6]"
          >
            {site.cta.label}
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 px-6 pb-8 pt-5 text-white md:hidden">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg">
              {item.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="rounded-lg bg-electric px-5 py-3.5 text-center font-semibold"
          >
            {site.cta.label}
          </a>
        </nav>
      )}
    </header>
  )
}