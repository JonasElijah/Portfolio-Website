import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectArt } from './art/ProjectArt'
import styles from './ProjectTile.module.css'

export function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`glass ${styles.tile} ${project.featured ? styles.featured : ''}`}
      aria-label={`${project.title} — view case study`}
    >
      <span className="eyebrow">{project.category}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <span className={styles.cta}>
        View case study <span aria-hidden="true">→</span>
      </span>
      <div className={styles.art}>
        <ProjectArt kind={project.art} />
      </div>
    </Link>
  )
}
