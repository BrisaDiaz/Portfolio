import styles from "./index.module.css";
import { forwardRef } from "react";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  content?: "block" | "text";
  tilt?: "none" | "up" | "down";
  color?: "default" | "primary" | "secondary"
}
function ResizeBox(props: Props, ref?: React.LegacyRef<HTMLDivElement>) {
  const { children, className = "", content = "block", tilt = "none", color = "default" } = props;
  return (
    <div
      ref={ref}
      className={`${styles["resize-box"]}
     ${styles[`resize-box--${content}`]} 
     ${styles[`resize-box--tilt-${tilt}`]} 
     ${styles[`resize-box--color-${color}`]} 
     ${className}`}
    >
      <div className={styles["resize-box__inner"]}>{children}</div>
    </div>
  );
}
export default forwardRef(ResizeBox);
