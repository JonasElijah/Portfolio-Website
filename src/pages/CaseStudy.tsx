import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjectArt } from '../components/art/ProjectArt'
import { Reveal } from '../components/Reveal'
import { getProject, projects } from '../data/projects'
import styles from './CaseStudy.module.css'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/" replace />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const meta = [
    { label: 'Role', value: project.meta.role },
    { label: 'Stack', value: project.meta.stack.join(' · ') },
    ...(project.meta.tools ? [{ label: 'Tools', value: project.meta.tools.join(' · ') }] : []),
  ]

  return (
    <article className="container">
      <Link to="/" state={{ scrollTo: 'work' }} className={styles.back}>
        ← All work
      </Link>

      <header className={styles.header}>
        <Reveal>
          <span className="eyebrow">Case study · {project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
        </Reveal>
        <Reveal delay={120}>
          <dl className={styles.meta}>
            {meta.map((m) => (
              <div key={m.label} className={styles.metaItem}>
                <dt className={styles.metaLabel}>{m.label}</dt>
                <dd className={styles.metaValue} style={{ margin: 0 }}>
                  {m.value}
                </dd>
              </div>
            ))}
            {(project.sourceUrl || project.liveUrl) && (
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Links</dt>
                <dd className={styles.metaValue} style={{ margin: 0, display: 'flex', gap: 16 }}>
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                      Source code ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </header>

      <Reveal delay={200} className={`glass ${styles.visual}`}>
        <ProjectArt kind={project.art} />
      </Reveal>

      <section className="section">
        <Reveal className={styles.split}>
          <h2 className={styles.h2}>Overview</h2>
          <p className={styles.body}>{project.overview}</p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">How it works.</h2>
        </Reveal>
        <div className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <div className={`glass ${styles.highlight}`}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="section">
          <Reveal>
            <h2 className={`${styles.h2}`} style={{ marginBottom: 40 }}>
              A closer look.
            </h2>
          </Reveal>
          <div className={styles.gallery}>
            {project.gallery.map((g) => (
              <Reveal as="figure" key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                {g.caption && <figcaption>{g.caption}</figcaption>}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {project.learned ? (
        <section className="section">
          <Reveal className={styles.split}>
            <h2 className={styles.h2}>What I learned</h2>
            <p className={styles.body}>{project.learned}</p>
          </Reveal>
        </section>
      ) : (
        import.meta.env.DEV && (
          <section className="section">
            <div className={styles.todo}>
              Dev-only reminder: add <code>learned</code> (and optional <code>gallery</code> screenshots) for this
              project in <code>src/data/projects.ts</code>. This box never appears in the production build.
            </div>
          </section>
        )
      )}

      <section className="section">
        <Reveal>
          <Link to={`/work/${next.slug}`} className={`glass ${styles.next}`}>
            <span className="eyebrow">Next project</span>
            <h2 className={styles.nextTitle}>{next.title} →</h2>
            <p className={styles.nextTag}>{next.tagline}</p>
          </Link>
        </Reveal>
      </section>
    </article>
  )
}
