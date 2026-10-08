import { site } from '../content/site'

export default function Marquee() {
  const items = site.expertise.items.map((i) => i.title)
  const row = [...items, ...items]

  return (
    <div aria-hidden className="overflow-hidden border-y border-line-dark bg-ink py-6 text-white md:py-8">
      <div className="marquee-track flex w-max items-center">
        {row.map((title, i) => (
          <span key={i} className="mr-10 flex items-center gap-10 font-display text-3xl md:mr-14 md:gap-14 md:text-5xl">
            {title}
            <span className="h-2 w-2 shrink-0 rounded-full bg-electric" />
          </span>
        ))}
      </div>
    </div>
  )
}