import { forwardRef } from 'react'
import styles from './styles.module.css'

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  isInvalid?: boolean
  isRequired?: boolean
  label?: string
  addonLeft?: React.ReactNode
  addonRight?: React.ReactNode
  dataList?: React.ReactNode
  hasButtonRight?: boolean
  hasButtonLeft?: boolean
  size?: 'sm' | 'md' | 'lg'
}
const defaultProps = {
  type: 'text',
  size: 'md',
  isInvalid: false,
  isRequired: false,
  hasButtonRight: false,
  hasButtonLeft: false,
  addonLeftProps: { className: '' },
  addonRightProps: { className: '' },
}

function TextInput(props: Props, ref?: React.LegacyRef<HTMLInputElement>) {
  const {
    className = '',
    type = defaultProps.type,
    isInvalid = defaultProps.isInvalid,
    isRequired = defaultProps.isRequired,
    hasButtonRight = defaultProps.hasButtonRight,
    hasButtonLeft = defaultProps.hasButtonLeft,
    size = defaultProps.size,
    addonLeft,
    addonRight,
    label,
    dataList,
    ...other
  } = props
  return (
    <div
      className={`${styles['text-input__container']} ${
        styles[`text-input--${size}`]
      } ${label ? styles['select--labeled'] : ''}`}
    >
      {addonLeft && (
        <div
          className={`${styles['text-input__addon-left-container']} ${
            hasButtonLeft ? styles['text-input__addon--button'] : ''
          }`}
        >
          {addonLeft}
        </div>
      )}
      <div className={styles['text-input__inner-container']}>
        <input
          ref={ref}
          type={type}
          {...other}
          className={`${styles['text-input']} ${className} ${
            isInvalid ? styles['text-input--invalid'] : ''
          } ${isRequired ? styles['text-input--required'] : ''}
         ${addonLeft ? styles['text-input--with-addon-left'] : ''}
          ${addonRight ? styles['text-input--with-addon-right'] : ''}`}
        />
        {dataList}
      </div>
      {addonRight && (
        <div
          className={`${styles['text-input__addon-right-container']} ${
            hasButtonRight ? styles['text-input__addon--button'] : ''
          }`}
        >
          {addonRight}
        </div>
      )}
      {label ? (
        <label className={styles['text-input__label']}>{label}</label>
      ) : (
        <></>
      )}
    </div>
  )
}
interface InputButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'subtle'
}
export const InputButton = forwardRef(
  (props: InputButtonProps, ref?: React.LegacyRef<HTMLButtonElement>) => {
    const { className = '', children, variant = 'subtle', ...other } = props
    return (
      <button
        className={`${styles['text-input__button']} ${
          styles[`text-input__button--${variant}`]
        } ${className}`}
        {...other}
        ref={ref}
      >
        <>{children}</>
      </button>
    )
  }
)
InputButton.displayName = 'InputButton'

export default forwardRef(TextInput)
