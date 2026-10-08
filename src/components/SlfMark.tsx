// Shows src/assets/slf-logo.(png|svg|webp|jpg) if it exists, otherwise the plain "SLF" text.
const found = import.meta.glob('../assets/slf-logo.{png,svg,webp,jpg,jpeg,PNG,SVG,WEBP,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const logo = Object.values(found)[0]

// Set to true if the logo is a dark single-colour mark that disappears on the navy background.
// It turns the whole logo white.
const MAKE_WHITE = false

export default function SlfMark({ title }: { title: string }) {
  if (!logo) {
    return <p className="mt-6 font-display text-8xl leading-none md:text-[9rem]">{title}</p>
  }

  return (
    <img
      src={logo}
      alt="SLF Conference"
      className={`mt-6 h-auto max-h-40 w-auto max-w-full md:max-h-56 ${MAKE_WHITE ? 'brightness-0 invert' : ''}`}
    />
  )
}