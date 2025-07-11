import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'none',
  stroke: 'currentColor',
  width: '1em',
  height: '1em',
}
function Archive(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
  const {
    width = defaultProps.width,
    height = defaultProps.height,
    fill = defaultProps.fill,
    stroke = defaultProps.stroke,
    ...other
  } = props
  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      {...other}
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeLinejoin='round'
        strokeWidth='32'
        d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z'
      ></path>
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160'
      ></path>
    </svg>
  )
}

export default forwardRef(Archive)
