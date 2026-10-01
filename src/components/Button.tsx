import type { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

type Props = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
}

/** Pill-shaped link styled as a button. External links open in a new tab. */
export function Button({ variant = 'primary', size = 'md', className = '', href, ...rest }: Props) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]} ${size === 'sm' ? styles.sm : ''} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    />
  )
}
