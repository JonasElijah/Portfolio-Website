import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './art.module.css'

const W = 520
const H = 300
const NODES: Record<string, [number, number]> = {
  Idle: [0.16, 0.5],
  Approach: [0.48, 0.14],
  Attack: [0.84, 0.32],
  Block: [0.84, 0.8],
  Retreat: [0.46, 0.86],
}
const EDGES: [string, string][] = [
  ['Idle', 'Approach'],
  ['Approach', 'Attack'],
  ['Attack', 'Block'],
  ['Block', 'Retreat'],
  ['Retreat', 'Idle'],
  ['Approach', 'Block'],
  ['Idle', 'Attack'],
]
// A loop through the machine that the animation follows.
const PATH = ['Idle', 'Approach', 'Attack', 'Block', 'Retreat', 'Idle', 'Attack', 'Block', 'Retreat']

const pos = (n: string) => [NODES[n][0] * W, NODES[n][1] * H] as const

/** Animated AI state machine — the active state walks around the graph. */
export function FsmArt() {
  const reduced = useReducedMotion()
  const [step, setStep] = useState(2)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setStep((s) => (s + 1) % PATH.length), 1300)
    return () => window.clearInterval(id)
  }, [reduced])

  const current = PATH[step]
  const prev = PATH[(step - 1 + PATH.length) % PATH.length]

  return (
    <svg className={styles.fsm} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {EDGES.map(([a, b]) => {
        const [x1, y1] = pos(a)
        const [x2, y2] = pos(b)
        const on = (a === prev && b === current) || (b === prev && a === current)
        return <line key={a + b} x1={x1} y1={y1} x2={x2} y2={y2} className={`${styles.edge} ${on ? styles.edgeActive : ''}`} />
      })}
      {Object.keys(NODES).map((n) => {
        const [x, y] = pos(n)
        const w = n.length * 9.5 + 36
        return (
          <g key={n} className={`${styles.node} ${n === current ? styles.nodeActive : ''}`}>
            <rect x={x - w / 2} y={y - 20} width={w} height={40} rx={20} />
            <text x={x} y={y + 5.5} textAnchor="middle">
              {n}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
