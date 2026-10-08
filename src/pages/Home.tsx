import Hero from '../sections/Hero'
import Mission from '../sections/Mission'
import PhotoStrip from '../sections/PhotoStrip'
import Expertise from '../sections/Expertise'
import Framework from '../sections/Framework'
import About from '../sections/About'
import Speaking from '../sections/Speaking'
import Danmac from '../sections/Danmac'
import Slf from '../sections/Slf'
import Insights from '../sections/Insights'
import Contact from '../sections/Contact'
import Marquee from '../components/Marquee'
import { usePageMeta } from '../lib/usePageMeta'
import { site } from '../content/site'

export default function Home() {
  usePageMeta(`Daniel Akila | ${site.brand.eyebrow}`, site.hero.text)

  return (
    <>
      <Hero />
      <Marquee />
      <Mission />
      <PhotoStrip />
      <Expertise />
      <Framework />
      <About />
      <Speaking />
      <Danmac />
      <Slf />
      <Insights />
      <Contact />
    </>
  )
}