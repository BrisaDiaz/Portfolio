
import { forwardRef } from "react";
import styles from "./styles.module.css";
import NextLink from "next/link";
import { FOOTER } from "@data";
export interface Props extends React.HTMLAttributes<HTMLElement> {}
function footer(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { ...other } = props;

  return (
    <footer {...other} ref={ref} className={styles["footer"]}>
      <div className={styles["footer-inner"]}>
        <section className={styles["profile-section"]}>
          <h4>{FOOTER.title}</h4>
          <p>{FOOTER.summary}</p>
        </section>
        <section>
          <h4>Contact Info</h4>
          <ul>
            {FOOTER.contact.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>Highlighted Projects</h4>
          <ul>
            {FOOTER.highlightedProjects.map((project) => (
              <li key={project.slug}>
                <NextLink href={`/project/${project.slug}`} className="link">
                  {project.name}
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        <p>{FOOTER.rights}</p>
      </section>
    </footer>
  );
}

export default forwardRef(footer);
