import styles from "./page.module.css";
import { PROJECTS, TECHS, INTRO, TECH_CATEGORIES } from "@data";
import Link from "@/components/Link";
import IconButton from "@/components/IconButton";
import ProjectsContainer from "@/ui/ProjectsContainer";
import { Linkedin, Email, Github, Options } from "@/components/SVG";
import { ButtonLink } from "@/components/Button";
import NextLink from "next/link";

export default function Home() {
  return (
    <main>
      <section className={styles["hero-section"]} id="contact">
        <article className={styles["introduction"]}>
          <h1 className={styles["introduction__title"]}>
            <span className={styles["introduction__subtitle"]}>
              {INTRO.subtitle}
            </span>
            <br />
            {INTRO.title}
          </h1>
          <p className={styles["introduction__text"]}>{INTRO.text}</p>
          <div className={styles["contact-links"]}>
            {INTRO.socials.map((social, i) => (
              <ButtonLink
                key={social.href}
                color={i > 0 ? "default" : "primary"}
                variant={i > 0 ? "outline" : "solid"}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.name} <SocialIcon name={social.name} />
              </ButtonLink>
            ))}
          </div>
        </article>
      </section>
      <section>
        <h2 id="projects" className="poster-font poster-font--up">
          Projects
        </h2>
        <NextLink href="/projects" passHref={true} legacyBehavior>
          <IconButton
            className="tooltip tooltip--right"
            data-tooltip="Advance search"
            aria-label="advance projects search"
          >
            <Options />
          </IconButton>
        </NextLink>
        <ProjectsContainer
          projects={PROJECTS}
          className={styles["projects__container"]}
        />
      </section>
      <section>
        <h2 id="technologies" className="poster-font poster-font--down">
          Technologies
        </h2>
        <div className={styles["techs__container"]}>
          {TECH_CATEGORIES.map((category) => (
            <article key={category}>
              <h3 className={styles["tech-category__name"]}>{category}</h3>
              <ul>
                {TECHS.map(
                  (tech) =>
                    tech.category === category && (
                      <li key={tech.name} className="link">
                        <Link external={true} href={tech.resource_url}>
                          {tech.name}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name == "linkedin") return <Linkedin />;
  if (name == "github") return <Github />;
  if (name == "email") return <Email />;
  return <></>;
}
