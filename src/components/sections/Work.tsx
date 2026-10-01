import { projects } from '../../data/projects'
import { ProjectTile } from '../ProjectTile'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Work() {
  return (
    <section id="work" className="container section">
      <Reveal>
        <span className="eyebrow">Selected work</span>
        <h2 className="section-title">Things I’ve built.</h2>
      </Reveal>
      <div className={s.workGrid}>
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={p.featured ? 0 : (i % 2) * 120} className={p.featured ? s.full : ''}>
            <ProjectTile project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
