import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'none',
  stroke: 'currentColor',
  width: '1em',
  height: '1em',
}
function Pulse(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...other}
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 320h64l64-256 64 384 64-224 32 96h64"
      ></path>
      <circle
        cx="432"
        cy="320"
        r="32"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
    </svg>
  )
}

export default forwardRef(Pulse)
