type Props = {
  children: string
  tone?: 'burgundy' | 'electric' | 'light'
}

const tones = {
  burgundy: 'text-burgundy',
  electric: 'text-electric',
  light: 'text-white/70',
}

export default function SectionLabel({ children, tone = 'burgundy' }: Props) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.22em] ${tones[tone]}`}>
      {children}
    </p>
  )
}