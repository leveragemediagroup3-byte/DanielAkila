import PageHeader from '../components/PageHeader'
import Danmac from '../sections/Danmac'
import Expertise from '../sections/Expertise'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function DanmacPage() {
  const page = site.pages.danmac
  usePageMeta('DANMAC Consulting | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="DANMAC Consulting" title={page.title} intro={page.intro} />
      <Danmac />
      <Expertise />
    </>
  )
}