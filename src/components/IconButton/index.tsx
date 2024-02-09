import styles from './styles.module.css'
import { forwardRef } from 'react'

function Button(
  props: React.ComponentPropsWithoutRef<'button'>,
  ref?: React.LegacyRef<HTMLButtonElement>
) {
  const { children, className, ...other } = props
  return (
    <button
      ref={ref}
      className={`${styles['icon-btn']} ${className ?? ''}`}
      {...other}
    >
      <>{children}</>
    </button>
  )
}
function ButtonLink(
  props: React.ComponentPropsWithoutRef<'a'>,
  ref?: React.LegacyRef<HTMLAnchorElement>
) {
  const { children, className, ...other } = props
  return (
    <a
      ref={ref}
      className={`${styles['icon-btn']} ${className ?? ''}`}
      {...other}
    >
      <>{children}</>
    </a>
  )
}
export const IconButton = forwardRef(Button)
export const IconButtonLink = forwardRef(ButtonLink)
