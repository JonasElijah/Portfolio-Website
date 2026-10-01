import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { Toolkit } from '../components/sections/Toolkit'
import { Work } from '../components/sections/Work'

export function Home() {
  const location = useLocation()
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo

  // Arriving from a case study via the nav: jump to the requested section.
  useEffect(() => {
    if (!scrollTo) return
    const t = window.setTimeout(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' }), 60)
    return () => window.clearTimeout(t)
  }, [scrollTo, location.key])

  return (
    <>
      <Hero />
      <Stats />
      <Work />
      <Experience />
      <About />
      <Toolkit />
      <Contact />
    </>
  )
}
