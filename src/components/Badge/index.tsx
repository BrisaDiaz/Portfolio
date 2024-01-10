import styles from "./styles.module.css";
import { forwardRef } from "react";

type Variant = "solid" | "outline" | "subtle";
type Size = "sm" | "md" | "lg";
interface Props extends React.BaseHTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
}
const defaultProps = {
  variant: "solid",
  size: "md",
};

const Badge = (props: Props, ref?: React.LegacyRef<HTMLSpanElement>) => {
  const {
    className,
    children,
    variant = defaultProps.variant,
    size = defaultProps.size,
    ...others
  } = props;
  return (
    <span
      {...others}
      ref={ref}
      className={`${className ?? ""} ${styles["badge"]} ${
        styles[`badge--${variant}`]
      } ${styles[`badge--${size}`]}`}
    >
      {children}
    </span>
  );
};

export default forwardRef(Badge);
