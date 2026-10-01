import { stats } from '../../data/site'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Stats() {
  return (
    <section className="container" aria-label="Highlights">
      <div className={s.stats}>
        {stats.map((st, i) => (
          <Reveal key={st.value} delay={i * 100} className={`glass ${s.stat}`}>
            <div className={s.statValue}>{st.value}</div>
            <div className={s.statLabel}>{st.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
