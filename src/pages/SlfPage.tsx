import PageHeader from '../components/PageHeader'
import Slf from '../sections/Slf'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function SlfPage() {
  const page = site.pages.slf
  usePageMeta('SLF Conference | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="SLF Conference" title={page.title} intro={page.intro} />
      <div className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="h-px bg-line-dark" />
        </div>
      </div>
      <Slf />
    </>
  )
}