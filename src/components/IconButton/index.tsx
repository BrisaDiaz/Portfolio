

import styles from "./styles.module.css";
import { forwardRef } from "react";


export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export function ModeButton(
  props: Props,
  ref?: React.LegacyRef<HTMLButtonElement>,
) {
  const { children, ...other } = props;

  return (
    <button ref={ref} className={styles["icon-btn"]} {...other}>
      {children}
    </button>
  );
}
export default forwardRef(ModeButton);

