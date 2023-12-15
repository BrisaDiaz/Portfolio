"use client";

import { forwardRef, useEffect, useState } from "react";
import styles from "./styles.module.css";
import ModeButton from "@/components/ModeButton";
import MenuButton from "@/components/MenuButton";
import Menu from "@/components/Menu";
import ThemeProvider from "@/providers/themeProvider";

export interface Props extends React.HTMLAttributes<HTMLElement> {}
function Header(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { ...other } = props;
  const [isOnClient, setIsOnClient] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((state) => !state);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    if (window) {
      setIsOnClient(true);
    }
  }, []);
  if (!isOnClient) return <></>;
  return (
    <ThemeProvider>
      <header {...other} ref={ref} className={styles["header"]}>
        <div className={styles["header-inner"]}>
          <ModeButton />
          <MenuButton onClick={toggleMenu} />
          <Menu onClose={closeMenu} isOpen={isMenuOpen} />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default forwardRef(Header);
