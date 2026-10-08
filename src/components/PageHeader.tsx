import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

type Props = {
  label: string
  title: string
  intro: string
  logo?: string
  logoClassName?: string
}

export default function PageHeader({ label, title, intro, logo, logoClassName = '' }: Props) {
  return (
    <header className="bg-ink pb-16 pt-40 text-white md:pb-24 md:pt-52">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <Reveal>
          <SectionLabel tone="electric">{label}</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{intro}</p>
        </Reveal>

        {logo && (
          <Reveal delay={0.2}>
            <img
              src={logo}
              alt=""
              className={`h-auto max-h-28 w-auto max-w-[240px] md:max-h-44 md:max-w-[320px] ${logoClassName}`}
            />
          </Reveal>
        )}
      </div>
    </header>
  )
}