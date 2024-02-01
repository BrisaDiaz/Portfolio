import React, { forwardRef } from "react";
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: "currentColor",
  stroke: "currentColor",
  width: "1em",
  height: "1em",
};
function Filter(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
      strokeWidth="32"
      viewBox="0 0 512 512"
      {...other}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 144h448M112 256h288M208 368h96"
      ></path>
    </svg>
  );
}

export default forwardRef(Filter);
