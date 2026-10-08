import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

type Props = {
  label: string
  title: string
  intro: string
}

export default function PageHeader({ label, title, intro }: Props) {
  return (
    <header className="relative overflow-hidden bg-ink pb-16 pt-40 text-white md:pb-24 md:pt-52">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(23,105,255,0.2),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal>
          <SectionLabel tone="electric">{label}</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{intro}</p>
        </Reveal>
      </div>
    </header>
  )
}