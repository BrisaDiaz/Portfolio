import styles from './styles.module.css'
import { forwardRef } from 'react'
import { Delete } from '@/components/SVG'

interface Props extends React.BaseHTMLAttributes<HTMLParagraphElement> {
  variant?: 'solid' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary'
  deletable?: boolean
  onDelete?: React.MouseEventHandler<HTMLButtonElement>
  transformText?: 'none' | 'uppercase' | 'capitalize' | 'uppercase' | 'title'
  count?: number
}
const defaultProps = {
  variant: 'solid',
  size: 'md',
  color: 'default',
  transformText: 'none',
  deletable: false,
  onDelete: () => {},
}

const Badge = (props: Props, ref?: React.LegacyRef<HTMLParagraphElement>) => {
  const {
    className = '',
    children,
    count = 0,
    variant = defaultProps.variant,
    size = defaultProps.size,
    color = defaultProps.color,
    deletable = defaultProps.deletable,
    transformText = defaultProps.transformText,
    onDelete = defaultProps.onDelete,
    ...others
  } = props
  return (
    <p
      {...others}
      ref={ref}
      className={`${className} ${styles['badge']} ${
        styles[`badge--${color}`]
      } ${styles[`badge--${variant}`]} ${styles[`badge--${size}`]} ${
        styles[`badge--transform-${transformText}`]
      } ${deletable ? styles['badge--deletable'] : ''} `}
    >
      <>
        {count ? (
          <span className={styles['badge__count']}>{count}</span>
        ) : (
          <></>
        )}
        <span className={styles['badge__text']}>{children}</span>
        {deletable && (
          <button className={styles['badge__remove-button']} onClick={onDelete}>
            <Delete className={styles['badge__remove-svg']} />
          </button>
        )}
      </>
    </p>
  )
}

export default forwardRef(Badge)
