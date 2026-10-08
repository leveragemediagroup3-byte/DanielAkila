import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { getGallery } from '../lib/slfGallery'

type Props = { years: string[] }

export default function SlfGallery({ years }: Props) {
  const galleries = useMemo(
    () => Object.fromEntries(years.map((y) => [y, getGallery(y)])) as Record<string, string[]>,
    [years],
  )

  // Start on the latest year that has photos
  const initial = [...years].reverse().find((y) => galleries[y].length > 0) ?? years[years.length - 1]
  const [year, setYear] = useState(initial)
  const [open, setOpen] = useState<number | null>(null)
  const photos = galleries[year] ?? []

  // Keyboard controls for the full-size viewer
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % photos.length))
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, photos.length])

  return (
    <div>
      {/* Year tabs */}
      <div className="flex flex-wrap gap-3">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => {
              setYear(y)
              setOpen(null)
            }}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              y === year
                ? 'border-electric bg-electric text-white'
                : 'border-line-dark text-white/70 hover:border-white/50 hover:text-white'
            }`}
          >
            SLF {y}
          </button>
        ))}
      </div>

      {/* Photos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8"
        >
          {photos.length > 0 ? (
            <div className="columns-2 gap-3 md:columns-3">
              {photos.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setOpen(i)}
                  className="group relative mb-3 block w-full overflow-hidden rounded-lg"
                  aria-label={`Open SLF ${year} photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`SLF ${year}`}
                    loading="lazy"
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-line-dark px-6 py-16 text-center text-white/60">
              The SLF {year} gallery is coming soon.
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Full-size viewer */}
      {open !== null && photos[open] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-5 top-5 text-white/80 hover:text-white"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          {photos.length > 1 && (
            <>
              <button
                className="absolute left-3 text-white/80 hover:text-white md:left-8"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen((open - 1 + photos.length) % photos.length)
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={38} />
              </button>
              <button
                className="absolute right-3 text-white/80 hover:text-white md:right-8"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen((open + 1) % photos.length)
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={38} />
              </button>
            </>
          )}
          <img
            src={photos[open]}
            alt={`SLF ${year}`}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}