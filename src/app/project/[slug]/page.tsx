import { PROJECTS } from "@data";
import styles from "./page.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Link from "@/components/Link";

const Project: NextPage<{ params: { slug: string } }> = (p) => {
  const project = PROJECTS.find(
    (project) => project.slug === p.params.slug,
  ) as (typeof PROJECTS)[0];

  const generateTechnologies = () => {
    const techsList: { category: string; techs: string[] }[] = [];
    const categories = ["language", "frontend", "backend", "testing"];
    categories.forEach((cat) => {
      if (cat in project.technologies) {
        type Category = keyof typeof project.technologies;
        techsList.push({
          category: cat,
          techs: project.technologies[cat as Category] as string[],
        });
      }
    });

    return techsList;
  };
  const technologies = generateTechnologies();
  return (
    <main className={styles["page"]}>
      <section>
        <div className={styles["heading"]}>
          <h1 className={styles["title"]}>{project?.title}</h1>
          <h2 className={styles["subtitle"]}>{project?.subtitle}</h2>
        </div>
        <div>
          <h3>Summary </h3>
          <p>{project?.summary}</p>
        </div>
        <div className={styles["links"]}>
          <h3>Links </h3>
          <ul>
            <li>
              <Link
                external={true}
                href={project?.demo || ""}
                primary={true}
                btn={true}
                className="link"
              >
                Live Demo
              </Link>
            </li>
            <li>
              <Link
                external={true}
                className="link"
                href={project?.source_code}
                primary={true}
                btn={true}
              >
                Repository
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Technologies </h3>
          <div className={styles["techs"]}>
            {technologies.map((group) => (
              <article key={group.category}>
                <h4 className={styles["tech-category"]}>{group.category}:</h4>
                <ul>
                  {group.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className={styles["features"]}>
          <h3>Features </h3>
          <div>
            <ul>
              {project?.features.map((feature) => (
                <li key={feature}>
                  <CockedIcon />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3>Logo </h3>
          <Image
            className={styles["project-logo"]}
            src={project?.icon?.src}
            width={150}
            height={100}
            loading="eager"
            quality={100}
            alt={project?.icon?.alt}
          />
        </div>
        <div>
          <h3>Screenshots </h3>

          {project?.captions.map(
            (img: { src: string; original?: string; alt: string }) => (
              <Image
                className={styles["screenshots"]}
                src={(img?.original as string) || img.src}
                alt={img.src}
                width={900}
                height={1200}
                placeholder="blur"
                loading="lazy"
                blurDataURL={img?.original || img.src}
                key={img.src}
              />
            ),
          )}
        </div>
      </section>
    </main>
  );
};
function CockedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="var(--main-color)"
      stroke="var(--main-color)"
      strokeWidth="0"
      viewBox="0 0 512 512"
    >
      <path
        stroke="none"
        d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z"
      ></path>
    </svg>
  );
}
export default Project;
