import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Smooth-scrolls to a homepage section. HashRouter owns the URL hash,
 * so we can't use plain #anchors — from another page we navigate home
 * and pass the section id through router state.
 */
export function useSectionNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(
    (id: string) => {
      if (pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: id } })
      }
    },
    [navigate, pathname],
  )
}
