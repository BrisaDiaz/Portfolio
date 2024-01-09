"use client";

import { forwardRef, useEffect, useState, useId } from "react";
import { useWindowScroll } from "@hooks";
import styles from "./styles.module.css";
import ModeButton from "@/components/ModeButton";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import { useParams } from "next/navigation";

export interface Props extends React.HTMLAttributes<HTMLElement> {}
function Header(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { ...other } = props;
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((state) => !state);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [params]);

  const menuID = useId();
  const menuButtonD = useId();

  const scrollPosition = useWindowScroll();
  return (
    <header
      {...other}
      ref={ref}
      className={`${styles["header"]} ${
        scrollPosition.y >= 64 ? styles["scrolled-header"] : ""
      }`}
    >
      <div className={styles["header-inner"]}>
        <ModeButton />

        {isMenuOpen ? (
          <div className={styles["backdrop"]} onClick={closeMenu} />
        ) : (
          <></>
        )}
        <MenuButton
          onClick={toggleMenu}
          isOpen={isMenuOpen}
          aria-haspopup="menu"
          aria-label="navigation menu"
          role="button"
          aria-expanded={isMenuOpen}
          className={styles["menu-button"]}
          aria-controls={menuID}
          id={menuButtonD}
        />
        <Menu
          onClose={closeMenu}
          isOpen={isMenuOpen}
          aria-orientation="vertical"
          className={styles["menu"]}
          id={menuID}
          aria-labelledby={menuButtonD}
        />
      </div>
    </header>
  );
}

export default forwardRef(Header);
