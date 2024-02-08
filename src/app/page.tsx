import styles from "./page.module.css";
import Link from "@/components/Link";
import { IconButtonLink } from "@/components/IconButton";
import ProjectsContainer from "@/ui/ProjectsContainer";
import { Linkedin, Email, Github, Options } from "@/components/SVG";
import { ButtonLink } from "@/components/Button";
import NextLink from "next/link";
import { getProjects } from "@/services/projects";
import { getTechStack } from "@/services/technologies";
import { getHeroData } from "@/services/layout";
import { TechStack } from "@types";
import ResizeBox from "@/components/ResizeBox";
import { getProjectListSchema, getTechnologiesSchema  } from "@/utils/metadata";
async function Home() {
  const projects = await getProjects();
  const hero = await getHeroData();
  const technologies = await getTechStack();
  const techStack = technologies ?? ({} as TechStack);

  type TechCategory = keyof typeof techStack;
  const techCategories = Object.keys(techStack) as TechCategory[];
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getTechnologiesSchema(techStack) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getProjectListSchema(projects) }}
      />
      <section className={styles["hero-section"]} id="contact">
        <article className={styles["introduction"]}>
          <h1 className={styles["introduction__title"]}>
            <span className={styles["introduction__subtitle"]}>
              {hero?.subtitle}
            </span>
            <br />
            {hero?.title}
          </h1>
          <p className={styles["introduction__text"]}>{hero?.text}</p>
          <div className={styles["contact-links"]}>
            {hero?.contact_links.map((link, i) => (
              <ButtonLink
                key={link?.url}
                color={i > 0 ? "default" : "primary"}
                variant={i > 0 ? "outline" : "solid"}
                href={link?.url}
                target="_blank"
                rel="noreferrer"
              >
                {link?.name} <SocialIcon name={link?.name} />
              </ButtonLink>
            ))}
          </div>
        </article>
      </section>
      <section>
        <ResizeBox
          content="text"
          tilt="down"
          color="secondary"
          className={styles["page__section-title"]}
        >
          <h2>Projects</h2>
        </ResizeBox>
        <NextLink href="/projects" passHref={true} legacyBehavior>
          <IconButtonLink
            className="tooltip tooltip--right"
            data-tooltip="Advance search"
            aria-label="advance projects search"
          >
            <Options />
          </IconButtonLink>
        </NextLink>
        <ProjectsContainer
          projects={projects}
          className={styles["projects__container"]}
        />
      </section>
      <section>
        <ResizeBox
          content="text"
          color="secondary"
          tilt="up"
          className={styles["page__section-title"]}
        >
          <h2>Technologies</h2>
        </ResizeBox>
        <div className={styles["techs__container"]}>
          {techCategories.length ? (
            techCategories.map((category) => (
              <article key={category}>
                <h3 className={styles["tech-category__name"]}>{category}</h3>
                <ul>
                  {techStack[category].map((tech) => (
                    <li key={tech.name} className="link">
                      <Link external={true} href={tech.doc_url}>
                        {tech.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
}
export default Home;

function SocialIcon({ name }: { name: string }) {
  if (name == "linkedin") return <Linkedin />;
  if (name == "github") return <Github />;
  if (name == "email") return <Email />;
  return <></>;
}
