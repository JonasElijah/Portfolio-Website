const style: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  height: 32,
  padding: '0 14px',
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 500,
  background: 'rgb(42 107 92 / 0.35)',
  border: '1px solid var(--teal)',
  whiteSpace: 'nowrap',
}

export function Chip({ children }: { children: React.ReactNode }) {
  return <span style={style}>{children}</span>
}
