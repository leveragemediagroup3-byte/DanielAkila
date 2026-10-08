import PageHeader from '../components/PageHeader'
import Insights from '../sections/Insights'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function InsightsPage() {
  const page = site.pages.insights
  usePageMeta('Insights | Daniel Akila', page.meta)

  return (
    <>
      <PageHeader label="Insights" title={page.title} intro={page.intro} />
      <Insights />
    </>
  )
}