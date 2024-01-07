

import styles from "./styles.module.css";
import { forwardRef } from "react";


export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export function IconButton(
  props: Props,
  ref?: React.LegacyRef<HTMLButtonElement>,
) {
  const { children, className, ...other } = props;
  print;
  return (
    <button
      ref={ref}
      className={`${styles["icon-btn"]} ${className ?? ""}`}
      {...other}
    >
      {children}
    </button>
  );
}
export default forwardRef(IconButton);

