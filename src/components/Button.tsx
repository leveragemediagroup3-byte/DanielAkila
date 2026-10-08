import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'outlineDark'
}

const styles = {
  primary: 'bg-electric text-white hover:bg-[#0f55d6]',
  outline: 'border border-white/30 text-white hover:border-white',
  outlineDark: 'border border-ink/25 text-ink hover:border-ink',
}

export default function Button({ href, children, variant = 'primary' }: Props) {
  return (
    <a
      href={href}
      className={`inline-block rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  )
}