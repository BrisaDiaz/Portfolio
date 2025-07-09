import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'currentColor',
  stroke: 'currentColor',
  width: '1em',
  height: '1em',
}
function Add(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      xmlns='http://www.w3.org/2000/svg'
      strokeWidth='0'
      viewBox='0 0 24 24'
      {...other}
    >
      <path fill='none' strokeWidth='2' d='M12 22V2M2 12h20'></path>
    </svg>
  )
}

export default forwardRef(Add)
