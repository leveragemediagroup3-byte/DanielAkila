import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { site } from '../content/site'
import portrait from '../assets/portrait.jpg'
import aboutImg from '../assets/about.jpg'
import speakingImg from '../assets/speaking.jpg'
import leadershipImg from '../assets/leadership-quote.png'

const modules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

// "03-keynote-at-slf.jpg" becomes the caption "Keynote at slf". Camera-style names get no caption.
function captionFrom(path: string) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '')
  const clean = name.replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim()
  if (!clean || /^(img|dsc|photo|image|screenshot|whatsapp|pxl)/i.test(clean)) return ''
  return clean.charAt(0).toUpperCase() + clean.slice(1)
}

const found = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({ src, caption: captionFrom(path) }))

const fallback = [portrait, aboutImg, speakingImg, leadershipImg].map((src) => ({ src, caption: '' }))
const photos = found.length > 0 ? found : fallback

// Width-to-height ratios: portrait, landscape, square (repeating)
const ratios = [0.8, 1.5, 1]
const offsets = ['md:-translate-y-2', 'md:translate-y-5', 'md:-translate-y-4']

export default function PhotoStrip() {
  const { gallery } = site
  const reduce = useReducedMotion()
  const outer = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const current = useTransform(scrollYProgress, (v) =>
    String(Math.min(photos.length, Math.floor(v * photos.length) + 1)).padStart(2, '0'),
  )

  useEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const header = (
    <div className="max-w-xl">
      <SectionLabel tone="electric">{gallery.label}</SectionLabel>
      <h2 className="mt-4 font-display text-2xl leading-tight md:text-4xl">{gallery.heading}</h2>
    </div>
  )

  const items = photos.map((p, i) => (
    <figure
      key={p.src}
      data-cursor=""
      className={`shrink-0 ${offsets[i % 3]}`}
      style={{ width: `calc(var(--h) * ${ratios[i % 3]})` }}
    >
      <div className="group relative w-full overflow-hidden bg-white/5" style={{ height: 'var(--h)' }}>
        <img
          src={p.src}
          alt={p.caption || 'Daniel Akila'}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      </div>
      {p.caption && (
        <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
          {p.caption}
        </figcaption>
      )}
    </figure>
  ))

  // Reduced motion: an ordinary swipeable row
  if (reduce) {
    return (
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">{header}</div>
        <div className="mt-10 flex gap-5 overflow-x-auto px-6 pb-6 [--h:36vh] md:px-10 md:[--h:46vh]">
          {items}
        </div>
      </section>
    )
  }

  return (
    <section
      ref={outer}
      className="relative bg-ink text-white"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pb-6 pt-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{header}</div>

        <motion.div
          ref={track}
          style={{ x }}
          className="mt-8 flex w-max items-start gap-5 pl-6 pr-[12vw] [--h:36vh] md:mt-10 md:gap-8 md:pl-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] md:[--h:46vh]"
        >
          {items}
        </motion.div>

        <div className="mx-auto mt-8 flex w-full max-w-[1240px] items-center gap-5 px-6 md:mt-10 md:px-10">
          <span className="text-xs font-bold tracking-[0.2em] text-white/60">
            <motion.span>{current}</motion.span> / {String(photos.length).padStart(2, '0')}
          </span>
          <div className="h-px flex-1 bg-line-dark">
            <motion.div className="h-px origin-left bg-electric" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </section>
  )
}