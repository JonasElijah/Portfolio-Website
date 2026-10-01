import { experience } from '../../data/site'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Experience() {
  return (
    <section id="experience" className="container section">
      <Reveal>
        <span className="eyebrow">Experience</span>
        <h2 className="section-title">Where I’ve worked.</h2>
      </Reveal>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {experience.map((job) => (
          <Reveal as="li" key={job.role + job.org} className={s.job}>
            <div className={s.jobDates}>{job.dates}</div>
            <div>
              <h3 className={s.jobRole}>{job.role}</h3>
              <div className={s.jobOrg}>{job.org}</div>
            </div>
            <p className={s.jobSummary}>{job.summary}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
