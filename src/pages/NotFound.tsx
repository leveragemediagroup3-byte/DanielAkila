import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Button from '../components/Button'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found | Daniel Akila', 'This page could not be found.')

  return (
    <>
      <PageHeader
        label="404"
        title="This page doesn't exist."
        intro="The link may be old, or the address may have been typed incorrectly."
      />
      <Section>
        <Button href="/">Back to the homepage</Button>
      </Section>
    </>
  )
}