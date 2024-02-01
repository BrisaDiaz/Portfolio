import React, { forwardRef } from "react";
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: "none",
  stroke: "currentColor",
  width: "1em",
  height: "1em",
};
function Options(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="32"
      viewBox="0 0 512 512"
      {...other}
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"
      ></path>
      <circle
        cx="336"
        cy="128"
        r="32"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="176"
        cy="256"
        r="32"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="336"
        cy="384"
        r="32"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
    </svg>
  );
}

export default forwardRef(Options);
