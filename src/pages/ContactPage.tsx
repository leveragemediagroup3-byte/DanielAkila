import PageHeader from '../components/PageHeader'
import Contact from '../sections/Contact'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function ContactPage() {
  const page = site.pages.contact
  usePageMeta('Contact | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="Contact" title={page.title} intro={page.intro} />
      <Contact />
    </>
  )
}