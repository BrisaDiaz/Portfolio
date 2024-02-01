import { forwardRef } from "react";
import styles from "./styles.module.css";

interface Props {
  variant?: "solid" | "outline" | "subtle";
  color?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isIconButton?: boolean;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    Props {}
export const Button = forwardRef(
  (props: ButtonProps, ref?: React.LegacyRef<HTMLButtonElement>) => {
    const {
      className = "",
      children,
      variant = "solid",
      color = "default",
      size = "md",
      isIconButton = false,
      ...other
    } = props;
    return (
      <button
        {...other}
        ref={ref}
        className={`${styles["button"]} ${styles[`button--${variant}`]} ${
          styles[`button--${color}`]
        } ${styles[`button--${size}`]} ${
          isIconButton ? styles[`icon-button`] : ""
        }  ${className}`}
      >
        <>{children}</>
      </button>
    );
  },
);
Button.displayName = "Button";

export interface ButtonLink
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    Props {}
export const ButtonLink = forwardRef(
  (props: ButtonLink, ref?: React.LegacyRef<HTMLAnchorElement>) => {
    const {
      className = "",
      children,
      variant = "solid",
      color = "default",
      size = "md",
      isIconButton = false,
      ...other
    } = props;
    return (
      <a
        {...other}
        ref={ref}
        className={`${styles["button"]} ${styles[`button--${variant}`]} ${
          styles[`button--${color}`]
        } ${styles[`button--${size}`]} ${
          isIconButton ? styles[`icon-button`] : ""
        } ${className}`}
      >
        <>{children}</>
      </a>
    );
  },
);
ButtonLink.displayName = "ButtonLink";
