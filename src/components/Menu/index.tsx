import styles from "./styles.module.css";
import { forwardRef } from "react";
import NextLink from "next/link";

export interface Props extends React.MenuHTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  onClose?: () => void;
}
const MENU_LINKS = [
  {
    url: "/#contact",
    name: "contact"
  },
  {
    url: "/#projects",
    name: "projects"
  },
  {
    url: "/#technologies",
    name: "technologies"
  },
  {
    url: "/about",
    name: "about"
  },
];
function Menu(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { isOpen = false, className, ...other } = props;

  return (
    <menu
      {...other}
      data-open={isOpen}
      ref={ref}
      className={`${styles["menu"]} ${className ?? ""}`}
    >
      {MENU_LINKS.map((link) => (
        <NextLink
          href={link.url}
          key={link.url}
          passHref
          className={`link ${styles["menu-link"]}`}
        >
          {link.name}
        </NextLink>
      ))}
    </menu>
  );
}

export default forwardRef(Menu);

