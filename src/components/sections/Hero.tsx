import { profile } from '../../data/site'
import { useSectionNav } from '../../hooks/useSectionNav'
import { Button } from '../Button'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Hero() {
  const goTo = useSectionNav()
  return (
    <section className={`container ${s.hero}`}>
      <Reveal>
        <span className="eyebrow">
          {profile.city} · {profile.location}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h1 className={s.heroTitle}>
          {profile.role}
          <br />
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className={s.heroLead}>{profile.hero.lead}</p>
      </Reveal>
      <Reveal delay={300} className={s.actions}>
        <Button
          href="#work"
          onClick={(e) => {
            e.preventDefault()
            goTo('work')
          }}
        >
          View my work
        </Button>
        <Button href={profile.resumeUrl} variant="secondary" download>
          Download résumé
        </Button>
      </Reveal>
    </section>
  )
}
