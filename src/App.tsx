import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Mission from './sections/Mission'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Mission />
      </main>
    </>
  )
}