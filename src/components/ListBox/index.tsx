import React, { forwardRef, useId, useEffect, useRef } from 'react'
import styles from './styles.module.css'

type DivDataBoxProps = React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDataListElement>
export interface ListBoxProps extends Omit<DivDataBoxProps, 'autoFocus'> {
  isVisible?: boolean
  children?: React.ReactNode
  multiple?: boolean
  autoFocus?: boolean
  onClickOutside?: () => void
  size?: 'sm' | 'md' | 'lg'
  id: string
}
const ListBox = forwardRef(
  (props: ListBoxProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    const {
      isVisible = true,
      multiple = false,
      children,
      size = 'md',
      id = '',
      className = '',
      autoFocus = true,
      onClickOutside = () => {},
      ...other
    } = props
    const listboxRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if (isVisible && autoFocus) {
        const firstChild = listboxRef.current
          ?.firstElementChild as HTMLLabelElement
        if (firstChild && typeof firstChild?.focus == 'function') {
          firstChild?.focus()
        }
      }
    }, [isVisible, autoFocus])

    return (
      <>
        <div
          ref={ref}
          onClick={onClickOutside}
          className={`${styles['datalist__backdrop']} `}
          data-visible={isVisible}
        />
        <div
          role="listbox"
          id={id}
          ref={listboxRef}
          className={`link-box ${styles['datalist']} ${
            styles[`datalist--${size}`]
          } ${multiple ? styles['datalist--multiple'] : ''} ${
            isVisible ? styles['datalist--visible'] : ''
          } ${className}`}
          {...other}
        >
          <>{children}</>
        </div>
      </>
    )
  }
)
ListBox.displayName = 'ListBox'
export default ListBox

export interface OptionProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  children?: React.ReactNode
  isVisible?: boolean
  onChange?: (value: string | number) => void
  onFocusLeaves?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value: string | number
  selected: boolean
}
export const Option = forwardRef(
  (props: OptionProps, ref?: React.LegacyRef<HTMLInputElement>) => {
    const {
      isVisible = true,
      children,
      className = '',
      selected = false,
      value = '',
      onKeyDown,
      onMouseDown,
      onFocusLeaves,
      onChange = () => {},
      ...other
    } = props

    const handleChange = (
      e:
        | React.KeyboardEvent<HTMLInputElement>
        | React.MouseEvent<HTMLInputElement>
    ) => {
      e.stopPropagation()

      if (e.type == 'mousedown') {
        onMouseDown && onMouseDown(e as React.MouseEvent<HTMLInputElement>)
        return onChange(value)
      }
      if (e.type == 'keydown') {
        const event = e as React.KeyboardEvent<HTMLInputElement>
        onKeyDown && onKeyDown(event)
        if (event.key == 'Enter') {
          e.preventDefault()
          return onChange(value)
        }
        if (event.key == 'Tab' || event.key == 'Escape') {
          onFocusLeaves && onFocusLeaves(event)
        }
      }
    }
    const inputId = useId()
    return (
      <label className={`${styles['option']} ${className}`} htmlFor={inputId}>
        <input
          ref={ref}
          tabIndex={isVisible ? 0 : -1}
          value={value}
          data-value={value}
          type="radio"
          role="option"
          aria-selected={selected}
          {...other}
          id={inputId}
          onKeyDown={handleChange}
          onMouseDown={handleChange}
          className={styles['option__input']}
        />
        <div className={styles['option__content']}>{children}</div>
      </label>
    )
  }
)
Option.displayName = 'Option'
