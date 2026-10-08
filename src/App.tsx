import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import Expertise from './sections/Expertise'
import Framework from './sections/Framework'
import About from './sections/About'
import Speaking from './sections/Speaking'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Mission />
        <Expertise />
        <Framework />
        <About />
        <Speaking />
      </main>
    </>
  )
}