import { profile } from '../data/site'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="container" style={{ marginTop: 'clamp(80px, 10vw, 120px)' }}>
      <div
        style={{
          borderTop: '1px solid var(--hairline)',
          padding: '28px 0 40px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 8,
          fontSize: 14,
          color: 'var(--text-subtle)',
        }}
      >
        <span>
          © {YEAR} {profile.name}
        </span>
        <span>Designed &amp; built with React</span>
      </div>
    </footer>
  )
}
