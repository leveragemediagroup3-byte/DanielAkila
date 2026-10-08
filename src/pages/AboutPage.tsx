import PageHeader from '../components/PageHeader'
import About from '../sections/About'
import Mission from '../sections/Mission'
import Framework from '../sections/Framework'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function AboutPage() {
  const page = site.pages.about
  usePageMeta('About | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="About" title={page.title} intro={page.intro} />
      {/* Hides the "Read Daniel's story" link, since we are already on that page */}
      <div className="[&_a[href='/about']]:hidden">
        <About />
      </div>
      <Mission />
      <Framework />
    </>
  )
}