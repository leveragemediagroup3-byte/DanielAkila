import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { BOOKING_EVENT } from '../lib/booking'
import { site } from '../content/site'

type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea'
  options?: string[]
  required?: boolean
  placeholder?: string
}

const personFields: Field[] = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'organisation', label: 'Organisation' },
]

const speakingFields: Field[] = [
  { name: 'eventName', label: 'Event name', required: true },
  { name: 'eventDate', label: 'Event date', type: 'date' },
  { name: 'audienceSize', label: 'Audience size', placeholder: 'e.g. 300' },
  { name: 'audienceType', label: 'Audience type', placeholder: 'e.g. founders, students, executives' },
  { name: 'theme', label: 'Topic or theme' },
  { name: 'location', label: 'Location' },
  {
    name: 'duration',
    label: 'Speaking duration',
    type: 'select',
    options: ['15 to 20 minutes', '30 minutes', '45 minutes', '60 minutes', 'Not sure yet'],
  },
]

const otherFields: Field[] = [
  { name: 'project', label: 'Event / project name' },
  { name: 'date', label: 'Preferred date', type: 'date' },
  {
    name: 'mode',
    label: 'Location / delivery mode',
    type: 'select',
    options: ['In person', 'Virtual', 'Hybrid', 'Not sure yet'],
  },
  { name: 'budget', label: 'Budget range (optional)', placeholder: 'Currency and range' },
]

const messageField: Field = { name: 'message', label: 'Message', type: 'textarea', required: true }

const inputClass =
  'w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<string | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const close = () => setOpen(false)

  const openWith = (t: string | null) => {
    setType(t)
    setSent(false)
    setOpen(true)
  }

  // Opens from "Book Daniel" links and from openBooking()
  useEffect(() => {
    const onEvent = (e: Event) => openWith((e as CustomEvent<string | null>).detail ?? null)
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href="#book"]')
      if (link) {
        e.preventDefault()
        openWith(null)
      }
    }
    window.addEventListener(BOOKING_EVENT, onEvent)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener(BOOKING_EVENT, onEvent)
      document.removeEventListener('click', onClick)
    }
  }, [])

  // Escape closes, and the page behind stops scrolling
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  const isSpeaking = type?.startsWith('Speaking') ?? false
  const fields = [...personFields, ...(isSpeaking ? speakingFields : otherFields), messageField]

  const set = (name: string, value: string) => setValues((v) => ({ ...v, [name]: value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = fields.map((f) => `${f.label}: ${values[f.name]?.trim() || '-'}`)
    const subject = `Enquiry: ${type}`
    const body = `Engagement type: ${type}\n\n${lines.join('\n')}`
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const renderField = (f: Field) => {
    const common = {
      id: f.name,
      required: f.required,
      value: values[f.name] ?? '',
    }
    return (
      <div key={f.name} className={f.type === 'textarea' ? 'md:col-span-2' : ''}>
        <label htmlFor={f.name} className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {f.label}
          {f.required && ' *'}
        </label>
        {f.type === 'textarea' ? (
          <textarea {...common} rows={4} className={inputClass} onChange={(e) => set(f.name, e.target.value)} />
        ) : f.type === 'select' ? (
          <select {...common} className={inputClass} onChange={(e) => set(f.name, e.target.value)}>
            <option value="">Select</option>
            {f.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...common}
            type={f.type ?? 'text'}
            placeholder={f.placeholder}
            className={inputClass}
            onChange={(e) => set(f.name, e.target.value)}
          />
        )}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/80 backdrop-blur-sm md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book Daniel"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-paper p-6 md:rounded-2xl md:p-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} aria-label="Close" className="absolute right-5 top-5 text-ink/60 hover:text-ink">
              <X size={24} />
            </button>

            {/* Step 3: sent */}
            {sent ? (
              <div className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">Almost done</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">Your enquiry is ready to send.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Your email app should have opened with everything filled in. Press send there to
                  complete it. If nothing opened, write to us directly at{' '}
                  <a href={`mailto:${site.contact.email}`} className="font-semibold text-electric">
                    {site.contact.email}
                  </a>
                  .
                </p>
                <button
                  onClick={close}
                  className="mt-8 rounded-lg bg-electric px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0f55d6]"
                >
                  Close
                </button>
              </div>
            ) : type === null ? (
              /* Step 1: choose the type */
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">Book Daniel</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">What would you like to explore?</h2>
                <div className="mt-8 border-b border-line">
                  {site.engagement.options.map((o) => (
                    <button
                      key={o.title}
                      onClick={() => setType(o.title)}
                      className="group flex w-full items-center justify-between gap-4 border-t border-line py-5 text-left"
                    >
                      <span>
                        <span className="block font-display text-xl transition-colors group-hover:text-electric md:text-2xl">
                          {o.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{o.text}</span>
                      </span>
                      <ArrowRight size={20} className="shrink-0 text-electric transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Step 2: the form */
              <form onSubmit={submit}>
                <button
                  type="button"
                  onClick={() => setType(null)}
                  className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
                >
                  <ArrowLeft size={16} /> Change type
                </button>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">{type}</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">Tell us a little about it.</h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">{fields.map(renderField)}</div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-lg bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f55d6] md:w-auto"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}