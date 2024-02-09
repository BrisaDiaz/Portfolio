'use client'
import { forwardRef, useId, useEffect } from 'react'
import styles from './styles.module.css'
import ListBox, { Option, OptionProps } from '@/components/ListBox'
import { DropDown } from '../SVG'
import { SelectProvider, useSelect } from './provider'

type Value = string | number
type OnChange = <Type>(selectedValue: Value | Type) => void
export interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: Value
  displayedValue?: Value
  placeholder?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: OnChange
}
const SelectContainer = forwardRef(
  (props: Props, ref?: React.Ref<HTMLDivElement>) => {
    const { defaultValue = '', displayedValue = '' } = props
    return (
      <SelectProvider
        defaultValue={defaultValue}
        displayedValue={displayedValue}
      >
        <Select {...props} ref={ref} />
      </SelectProvider>
    )
  }
)
SelectContainer.displayName = 'SelectContainer'

const Select = forwardRef(
  (props: Props, ref?: React.LegacyRef<HTMLDivElement>) => {
    const {
      className = '',
      size = 'md',
      onChange,
      children,
      label,
      displayedValue: noUsed,
      placeholder = '-- Select option --',
      ...other
    } = props
    const dataListId = useId()
    const inputId = useId()
    const {
      selectedValue,
      isOpen,
      toggleOptions,
      closeOptions,
      openOptions,
      displayedValue,
      triggerRef,
    } = useSelect()

    useEffect(() => {
      onChange && onChange(selectedValue)
    }, [selectedValue])

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key == 'Tab') {
        return closeOptions()
      }
      if (e.key == 'ArrowDown') {
        e.preventDefault()
        openOptions()
      }
    }

    return (
      <div
        {...other}
        className={`${styles['select__container']} ${
          styles[`select--${size}`]
        } ${label ? styles[`select--labeled`] : ''} ${className} `}
        ref={ref}
      >
        {label ? (
          <label htmlFor={inputId} className={styles['select__label']}>
            {label}
          </label>
        ) : (
          <></>
        )}
        <button
          className={`${styles['select']}  `}
          role="combobox"
          ref={triggerRef}
          onKeyDown={handleKeyDown}
          aria-controls={dataListId}
          aria-expanded={true}
          onClick={toggleOptions}
        >
          <span>{displayedValue || selectedValue || placeholder}</span>
          <DropDown />
          <input
            className={styles['select__hidden-input']}
            aria-invalid="false"
            aria-hidden="true"
            tabIndex={-1}
            value={selectedValue}
            readOnly={true}
            id={inputId}
          />
        </button>
        <ListBox
          id={dataListId}
          role="listbox"
          isVisible={isOpen}
          onClickOutside={closeOptions}
        >
          <>{children}</>
        </ListBox>
      </div>
    )
  }
)
Select.displayName = 'Select'

interface SelectOption extends Omit<OptionProps, 'selected'> {
  children: string
}

export const SelectOption = forwardRef(
  (props: SelectOption, ref?: React.Ref<HTMLInputElement>) => {
    const { selectedValue, isOpen, closeOptions, onSelect, triggerRef } =
      useSelect()
    const { children } = props

    const handleChange = (value: OptionProps['value']) => {
      onSelect(value, children)
      closeOptions()
    }
    const handleFocusLeaves = (e: React.KeyboardEvent<HTMLInputElement>) => {
      closeOptions()
      if (e.key == 'Escape') {
        e.preventDefault()
        triggerRef.current?.focus()
      }
    }
    return (
      <Option
        {...props}
        ref={ref}
        isVisible={isOpen}
        selected={selectedValue == props?.value}
        onChange={handleChange}
        onFocusLeaves={handleFocusLeaves}
      >
        {children}
      </Option>
    )
  }
)
SelectOption.displayName = 'SelectOption'

export default SelectContainer
