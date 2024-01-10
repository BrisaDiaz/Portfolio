import Project from "@/components/Project";

import styles from "./page.module.css";
import { PROJECTS, TECHS, INTRO } from "@data";
import NextLink from "next/link";
import Link from "@/components/Link";
import { Linkedin, Email, Github } from "@/components/SVG";
import {
  Avatar,
  BookingApp,
  DeliveryApp,
  OrtexLogin,
  PhotographerPage,
  PinterestClone,
  SmartBuyApp,
  TecnoRevBlog,
  WikifitApp,
} from "@/components/Illustrations";

const TECH_CATEGORIES = [
  "language",
  "frontend",
  "backend",
  "testing",
  "documentation",
  "others",
];
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
              <a
                key={social.href}
                className={`button-link ${i > 0 ? "button-secondary" : ""}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.name} <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </article>
      </section>
      <section>
        <h2 id="projects" className="poster-font poster-font--up">
          Projects
        </h2>
        <div className={styles["projects__container"]}>
          {PROJECTS.map((project, index) => (
            <NextLink
              href={"/project/" + project.slug}
              key={project.id}
              className={`link-box ${styles["project__link"]}`}
            >
              <Project
                className={styles["project"]}
                data={{
                  id: project.id,
                  title: project.title,
                  subtitle: project.subtitle,
                  logo: <ProjectLogo name={project.slug} />,
                  slug: project.slug,
                  summary: project.summary,
                }}
              />
            </NextLink>
          ))}
        </div>
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
function ProjectLogo({ name }: { name: string }) {
  if (name == "pinterest-clone")
    return <PinterestClone fill="var(--main-color)" />;
  if (name == "smart-buy") return <SmartBuyApp fill="var(--main-color)" />;
  if (name == "tecno-rev") return <TecnoRevBlog fill="var(--main-color)" />;
  if (name == "ORTEX-login") return <OrtexLogin fill="var(--main-color)" />;
  if (name == "booking-app") return <BookingApp fill="var(--main-color)" />;
  if (name == "wikifit-app") return <WikifitApp fill="var(--main-color)" />;
  if (name == "delivery-app") return <DeliveryApp fill="var(--main-color)" />;
  if (name == "photographer-portfolio")
    return <PhotographerPage fill="var(--main-color)" />;
  return <></>;
}