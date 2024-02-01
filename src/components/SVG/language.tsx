import React, { forwardRef } from "react";
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: "none",
  stroke: "currentColor",
  width: "1em",
  height: "1em",
};
function Language(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
  const {
    width = defaultProps.width,
    height = defaultProps.height,
    fill = defaultProps.fill,
    stroke = defaultProps.stroke,
    ...other
  } = props;
  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...other}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 112h288M192 64v48m80 336l96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 336s-35-27-72-75-56-85-56-85"
      ></path>
    </svg>
  );
}

export default forwardRef(Language);
