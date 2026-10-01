import styles from './art.module.css'

const COLS = [
  [3, 2, 3],
  [2, 3, 2],
  [3, 2, 2],
  [2, 3, 3],
]
const FILLS = [
  'linear-gradient(135deg, #2a6b5c, #c49a45cc)',
  'linear-gradient(135deg, #c49a45, #2a6b5cbb)',
  'linear-gradient(135deg, #123f36, #2a6b5c)',
]

/** Decorative browser window with a masonry photo grid. */
export function PhotoArt() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.chrome}>
        {['#c49a45', '#2a6b5c', '#e8dcc4'].map((c) => (
          <span key={c} className={styles.dot} style={{ background: c }} />
        ))}
        <span className={styles.url} />
      </div>
      <div className={styles.masonry}>
        {COLS.map((col, ci) => (
          <div key={ci} className={styles.col}>
            {col.map((grow, ri) => (
              <div key={ri} className={styles.photo} style={{ flex: grow, background: FILLS[(ci + ri) % 3] }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
