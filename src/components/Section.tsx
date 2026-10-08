import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">{children}</div>
    </section>
  )
}