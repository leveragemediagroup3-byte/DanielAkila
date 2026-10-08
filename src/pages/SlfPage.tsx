import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Slf from '../sections/Slf'
import { slfLogo, slfLogoFilter } from '../components/SlfMark'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

// Set to true only if the SLF logo is square: it then becomes the browser-tab icon on this page
const SWAP_FAVICON = false

export default function SlfPage() {
  const page = site.pages.slf
  usePageMeta('SLF Conference | Daniel Akila', page.meta)

  useEffect(() => {
    if (!SWAP_FAVICON || !slfLogo) return
    const link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
    if (!link) return
    const previousHref = link.href
    const previousType = link.getAttribute('type')
    link.removeAttribute('type')
    link.href = slfLogo
    return () => {
      link.href = previousHref
      if (previousType) link.setAttribute('type', previousType)
    }
  }, [])

  return (
    <>
      <PageHeader
        label="SLF Conference"
        title={page.title}
        intro={page.intro}
        logo={slfLogo}
        logoClassName={slfLogoFilter}
      />
      <div className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="h-px bg-line-dark" />
        </div>
      </div>
      <Slf showMark={false} />
    </>
  )
}