import { forwardRef } from 'react'
import styles from './styles.module.css'

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
  bordered?: Boolean
  doubleEntry?: Boolean
  fullWidth: Boolean
  size?: 'sm' | 'md' | 'lg'
}
const defaultProps = {
  bordered: false,
  doubleEntry: false,
  fullWidth: false,
  size: 'md',
}
function Table(props: Props, ref?: React.LegacyRef<HTMLTableElement>) {
  const {
    children,
    bordered = defaultProps.bordered,
    fullWidth = defaultProps.fullWidth,
    doubleEntry = defaultProps.doubleEntry,
    size = defaultProps.size,
    ...other
  } = props
  return (
    <div
      className={`${styles['table__container']} ${
        fullWidth ? styles['table--full-width'] : ''
      }`}
    >
      <div className={styles['table__container--inner']}>
        <table
          ref={ref}
          {...other}
          className={`${styles['table']} ${styles[`table--${size}`]} ${
            bordered ? styles['table--bordered'] : ''
          } ${doubleEntry ? styles['table--double-entry'] : ''} `}
        >
          <>{children}</>
        </table>
      </div>
    </div>
  )
}
export const TableBody = forwardRef(
  (
    props: React.HTMLAttributes<HTMLTableSectionElement>,
    ref?: React.LegacyRef<HTMLTableSectionElement>
  ) => {
    const { children, ...other } = props
    return (
      <tbody {...other} ref={ref} className={styles['table__body']}>
        {children}
      </tbody>
    )
  }
)
TableBody.displayName = 'TableBody'

export const TableHead = forwardRef(
  (
    props: React.HTMLAttributes<HTMLTableSectionElement>,
    ref?: React.LegacyRef<HTMLTableSectionElement>
  ) => {
    const { children, ...other } = props
    return (
      <thead {...other} ref={ref} className={styles['table__head']}>
        <tr>{children}</tr>
      </thead>
    )
  }
)
TableHead.displayName = 'TableHead'

export const TableHeadCell = forwardRef(
  (
    props: React.HTMLAttributes<HTMLTableHeaderCellElement>,
    ref?: React.LegacyRef<HTMLTableHeaderCellElement>
  ) => {
    const { children, ...other } = props
    return (
      <th
        {...other}
        className={`${styles['table__title']} ${styles['table__row-item']}`}
        scope="col"
        ref={ref}
      >
        {children}
      </th>
    )
  }
)
TableHeadCell.displayName = 'TableHeadCell'
export const TableCell = forwardRef(
  (
    props: React.HTMLAttributes<HTMLTableDataCellElement>,
    ref?: React.LegacyRef<HTMLTableDataCellElement>
  ) => {
    const { children, ...other } = props
    return (
      <td ref={ref} {...other} className={styles['table__row-item']}>
        {children}
      </td>
    )
  }
)
TableCell.displayName = 'TableCell'

export const TableRow = forwardRef(
  (
    props: React.HTMLAttributes<HTMLTableRowElement>,
    ref?: React.LegacyRef<HTMLTableRowElement>
  ) => {
    const { children, ...other } = props
    return (
      <tr ref={ref} {...other} className={styles['table__row']}>
        <>{children}</>
      </tr>
    )
  }
)
TableRow.displayName = 'TableRow'

export default forwardRef(Table)
