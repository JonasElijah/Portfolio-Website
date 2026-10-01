import { toolkit } from '../../data/site'
import { Chip } from '../Chip'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Toolkit() {
  return (
    <section id="toolkit" className="container section">
      <Reveal>
        <span className="eyebrow">Toolkit</span>
        <h2 className="section-title">What I work with.</h2>
      </Reveal>
      <div className={s.toolkit}>
        {toolkit.map((g, i) => (
          <Reveal key={g.group} delay={i * 80} className={`glass ${s.toolGroup}`}>
            <h3>{g.group}</h3>
            <div className={s.chips}>
              {g.items.map((it) => (
                <Chip key={it}>{it}</Chip>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
