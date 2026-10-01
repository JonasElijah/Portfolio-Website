import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'

/** Reset scroll on page change (unless we're heading to a homepage section). */
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!(state as { scrollTo?: string } | null)?.scrollTo) window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

export default function App() {
  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
