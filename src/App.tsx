import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SpeakingPage from './pages/SpeakingPage'
import DanmacPage from './pages/DanmacPage'
import SlfPage from './pages/SlfPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="speaking" element={<SpeakingPage />} />
          <Route path="danmac" element={<DanmacPage />} />
          <Route path="slf" element={<SlfPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}