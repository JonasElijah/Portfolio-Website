import { education, profile } from '../../data/site'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function About() {
  return (
    <section id="about" className="container section">
      <Reveal>
        <span className="eyebrow">About</span>
        <h2 className="section-title">A bit about me.</h2>
      </Reveal>
      <div className={s.aboutGrid}>
        <Reveal className={s.aboutText}>
          {profile.about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </Reveal>
        <div className={s.eduList}>
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 100} className={`glass ${s.edu}`}>
              <div className={s.eduTop}>
                <h3 className={s.eduSchool}>{e.school}</h3>
                <span className={s.eduDates}>{e.dates}</span>
              </div>
              <div className={s.eduDegree}>{e.degree}</div>
              <div className={s.eduNote}>{e.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
