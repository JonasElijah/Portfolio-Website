import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/site'
import { useSectionNav } from '../hooks/useSectionNav'
import { Button } from './Button'
import styles from './Nav.module.css'

export function Nav() {
  const [open, setOpen] = useState(false)
  const goTo = useSectionNav()
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes or Escape is pressed.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`${styles.nav} ${open ? styles.open : ''}`}>
      <nav className={`container ${styles.inner}`} aria-label="Main">
        <Link to="/" className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.mono} aria-hidden="true">
            {profile.initials}
          </span>
          {profile.shortName}
        </Link>

        <button
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <div id="nav-links" className={styles.links}>
          {navLinks.map((l) => (
            <button
              key={l.id}
              className={styles.link}
              onClick={() => {
                setOpen(false)
                goTo(l.id)
              }}
            >
              {l.label}
            </button>
          ))}
          <Button href={profile.resumeUrl} size="sm" className={styles.resume} target="_blank" rel="noreferrer">
            Résumé
          </Button>
        </div>
      </nav>
    </header>
  )
}
