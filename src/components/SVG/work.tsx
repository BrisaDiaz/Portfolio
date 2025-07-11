import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'none',
  stroke: 'currentColor',
  width: '1em',
  height: '1em',
}
function Work(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...other}
    >
      <path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        d='M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22zM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6'
      ></path>
      <path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        d='M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1zM21.65 11A16.484 16.484 0 0114 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76'
      ></path>
    </svg>
  )
}

export default forwardRef(Work)
