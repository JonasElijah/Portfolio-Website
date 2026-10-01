import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './art.module.css'

const SIZE = 32
const START = new Set([1, 5, 10, 11, 15, 16, 19, 22, 28, 31])

/** Animated cache grid: each tick "accesses" a line and records a hit or miss. */
export function CacheArt() {
  const reduced = useReducedMotion()
  const [hits, setHits] = useState(START)
  const hitsRef = useRef(START)
  const [active, setActive] = useState(-1)
  const [stats, setStats] = useState({ hit: 71, total: 100 })

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      const i = Math.floor(Math.random() * SIZE)
      const isHit = hitsRef.current.has(i)
      if (!isHit) {
        const next = new Set(hitsRef.current)
        next.add(i)
        // Evict a random line so the grid never fills up.
        if (next.size > 12) next.delete([...next][Math.floor(Math.random() * next.size)])
        hitsRef.current = next
        setHits(next)
      }
      setActive(i)
      setStats((s) => ({ hit: s.hit + (isHit ? 1 : 0), total: s.total + 1 }))
    }, 900)
    return () => window.clearInterval(id)
  }, [reduced])

  const rate = Math.round((stats.hit / stats.total) * 100)

  return (
    <div className={styles.cache} aria-hidden="true">
      <div className={styles.cells}>
        {Array.from({ length: SIZE }, (_, i) => (
          <div
            key={i}
            className={`${styles.cell} ${hits.has(i) ? styles.hit : ''} ${i === active ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={styles.legend}>
        <span>
          <i style={{ background: 'var(--gold)' }} />
          Hit
        </span>
        <span>
          <i style={{ background: 'rgb(42 107 92 / 0.6)' }} />
          Miss
        </span>
        <span className={styles.rate}>Hit rate {rate}%</span>
      </div>
    </div>
  )
}
