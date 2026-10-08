import { ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import RevealText from '../components/RevealText'
import SpotlightImage from '../components/SpotlightImage'
import { site } from '../content/site'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  const { hero, brand } = site
  // "Passion to Profit to Posterity." becomes three stacked lines
  const stack = hero.lineTwo.split(/ (?=to )/)

  return (
    <section className="relative flex flex-col overflow-hidden bg-ink text-white md:block md:min-h-screen">
      {/* Portrait: flush to the right edge on desktop, below the text on mobile */}
      <div className="order-2 h-[78vh] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[46%]">
        <SpotlightImage
          src={portrait}
          alt="Daniel Akila"
          className="h-full w-full"
          hint="Move your cursor over the portrait"
        />
      </div>

      {/* Message */}
      <div className="relative z-10 order-1 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-12 pt-32 md:min-h-screen md:px-10 md:pb-16">
        <RevealText
          as="p"
          delay={0.1}
          className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60"
        >
          {brand.eyebrow}
        </RevealText>

        <RevealText
          as="p"
          delay={0.2}
          className="mt-8 font-display text-xl italic text-white/75 md:text-3xl"
        >
          {hero.lineOne}
        </RevealText>

        <h1 className="mt-3 font-display text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.95]">
          {stack.map((line, i) => (
            <RevealText
              key={line}
              as="span"
              delay={0.3 + i * 0.12}
              className={`block ${i === stack.length - 1 ? 'text-electric' : ''}`}
            >
              {line}
            </RevealText>
          ))}
        </h1>

        <div className="mt-12 md:max-w-md">
          <p className="leading-relaxed text-white/70">{hero.text}</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-10 z-20 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80 md:flex">
        Scroll
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}