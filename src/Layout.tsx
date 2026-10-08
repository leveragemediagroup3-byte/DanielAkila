import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function Layout() {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  // New page: scroll to the top (or to the #section if the link has one)
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  // Internal links (href="/about" etc.) navigate without reloading the page
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.('a')
      if (!a || a.target === '_blank') return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return (
    <>
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}