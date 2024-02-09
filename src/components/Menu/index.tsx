import styles from './styles.module.css'
import { forwardRef } from 'react'
import NextLink from 'next/link'

export interface Props extends React.MenuHTMLAttributes<HTMLElement> {
  isOpen?: boolean
  links?: {
    name: string
    url:
      | string
      | {
          pathname: string
          query: { [key: string]: string }
        }
  }[]
  onClose?: () => void
}

function Menu(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { links = [], isOpen = false, className, ...other } = props

  return (
    <menu
      {...other}
      ref={ref}
      className={`${styles['menu']} ${className ?? ''}`}
    >
      {links.map((link) => (
        <NextLink
          href={link.url}
          key={link.name}
          passHref
          className={`${styles['menu-link']}`}
        >
          {link.name}
        </NextLink>
      ))}
    </menu>
  )
}

export default forwardRef(Menu)
