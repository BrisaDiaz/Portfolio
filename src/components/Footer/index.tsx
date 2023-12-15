
import { forwardRef } from "react";
import styles from "./styles.module.css";
import NextLink from "next/link";

export interface Props extends React.HTMLAttributes<HTMLElement> {}
function footer(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { ...other } = props;

  return (
    <footer {...other} ref={ref} className={styles["footer"]}>
      <div className={styles["footer-inner"]}>
        <section className={styles["profile-section"]}>
          <h4>Brisa Díaz</h4>
          <p>
            A enthusiastic full-stack web developer, specialized in frontend
            performance, accessibility and SEO.
          </p>
        </section>
        <section>
          <h4>Contact Info</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/brisa-d%C3%ADaz/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BrisaDiaz"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Explore</h4>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Highlighted Projects</h4>
          <ul>
            <li>
              <NextLink href="/project/smart-buy">Smart Buy</NextLink>
            </li>
            <li>
              <NextLink href="/project/tecno-rev">TecnoRev</NextLink>
            </li>
            <li>
              <NextLink href="/project/delivery-app">Delivery App</NextLink>
            </li>
          </ul>
        </section>
      </div>
      <section>
        <p>© 2023 All Rights Reseved.</p>
      </section>
    </footer>
  );
}

export default forwardRef(footer);
