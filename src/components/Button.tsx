import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'outlineDark'
}

const styles = {
  primary: { base: 'bg-electric text-white', overlay: 'bg-white', hover: 'hover:text-ink' },
  outline: { base: 'border border-white/30 text-white', overlay: 'bg-white', hover: 'hover:text-ink' },
  outlineDark: { base: 'border border-ink/25 text-ink', overlay: 'bg-ink', hover: 'hover:text-white' },
}

export default function Button({ href, children, variant = 'primary' }: Props) {
  const s = styles[variant]

  return (
    <Magnetic>
      <a
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 ${s.base} ${s.hover}`}
      >
        <span
          aria-hidden
          className={`absolute inset-0 translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(.65,0,.35,1)] group-hover:translate-y-0 ${s.overlay}`}
        />
        <span className="relative z-10">{children}</span>
        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </Magnetic>
  )
}