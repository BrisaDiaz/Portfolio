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
      <h1 className={styles["title"]}>{project?.title} </h1>

      <section>
        <div>
          <h2>Summary </h2>

          {project?.summary}
        </div>
        <div className={styles["links"]}>
          <h2>Links </h2>
          <ul>
            <li>
              <Link
                external={true}
                href={project?.demo || ""}
                primary={true}
                btn={true}
              >
                Live Demo
              </Link>
            </li>
            <li>
              <Link
                external={true}
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
          <h2>Technologies </h2>
          <div className={styles["techs"]}>
            {technologies.map((group) => (
              <article key={group.category}>
                <h3 className={styles["tech-category"]}>{group.category}</h3>
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
          <h2>Features </h2>
          <div>
            <ul>
              {project?.features.map((feature) => (
                <li key={feature}>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    aria-hidden="true"
                  />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2>Screenshots </h2>
          {project?.captions.map((img) => (
            <Image
              className={styles["screenshots"]}
              src={img?.original || img.src}
              alt={img.src}
              width={900}
              height={1200}
              placeholder="blur"
              loading="lazy"
              blurDataURL={img?.original || img.src}
              key={img.src}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Project;
