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
      viewBox="0 0 24 24"
      {...other}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
      ></path>
    </svg>
  );
}

export default forwardRef(Language);
