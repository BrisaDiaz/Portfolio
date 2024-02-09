import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'currentColor',
  stroke: 'currentColor',
  width: '1em',
  height: '1em',
}
function Filter(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      {...other}
      strokeWidth="0"
      viewBox="0 0 512 512"
    >
      <path stroke="none" d="M128 192l128 128 128-128z"></path>
    </svg>
  )
}

export default forwardRef(Filter)
