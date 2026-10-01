import { profile } from '../../data/site'
import { Button } from '../Button'
import { Reveal } from '../Reveal'
import s from './sections.module.css'

export function Contact() {
  return (
    <section id="contact" className={`container section ${s.contact}`}>
      <Reveal>
        <h2 className={s.contactTitle}>
          <span className="gold-text" style={{ backgroundImage: 'linear-gradient(90deg, var(--cream), var(--gold))' }}>
            {profile.contact.title}
          </span>
        </h2>
        <p className={s.contactLead}>{profile.contact.lead}</p>
      </Reveal>
      <Reveal delay={150} className={s.actions}>
        <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
        <Button href={profile.links.linkedin} variant="secondary">
          LinkedIn
        </Button>
        <Button href={profile.links.github} variant="secondary">
          GitHub
        </Button>
      </Reveal>
    </section>
  )
}
