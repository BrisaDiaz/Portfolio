import { PROJECTS } from "@data";
import styles from "./page.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Link from "@/components/Link";
import Badge from "@/components/Badge";
import Table from "@/components/Table";

const Project: NextPage<{ params: { slug: string } }> = (p) => {
  const project = PROJECTS.find(
    (project) => project.slug === p.params.slug,
  ) as (typeof PROJECTS)[0];

  const techs = Object.freeze(project.technologies);
  const category = Object.keys(techs);
  const dataTech = category.map((title) => [
    title,
    <div key={title} className={styles["tech__list"]}>
      {title in techs ? (
        techs[title as keyof typeof techs].map((tech: string) => (
          <Badge key={tech} variant="subtle" size="sm">
            {tech}
          </Badge>
        ))
      ) : (
        <></>
      )}
    </div>,
  ]);
  return (
    <main className={styles["page"]}>
      <section>
        <div className={styles["heading"]}>
          <h1 className={styles["title"]}>{project?.title}</h1>
          <h2 className={`poster-font poster-font--up  ${styles["subtitle"]}`}>
            {project?.subtitle}
          </h2>
        </div>
        <div>
          <h3 className={`${styles["section__title"]}`}>Summary</h3>
          <p>{project?.summary}</p>
        </div>
        <div className={styles["links"]}>
          <h3 className={`${styles["section__title"]}`}>Links</h3>
          <ul className={styles["links__container"]}>
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
          <h3 className={`${styles["section__title"]}`}>Tech Stack</h3>
          <Table
            titles={["", "technologies"]}
            data={dataTech}
            doubleEntry={true}
            size="sm"
            fullWidth={true}
          />
        </div>
        <div className={styles["features"]}>
          <h3 className={`${styles["section__title"]}`}>Features</h3>
          <div>
            <ul className="list">
              {project?.features.map((feature) => (
                <li key={feature} className="list__item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className={`${styles["section__title"]}`}>Logo</h3>
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
          <h3 className={`${styles["section__title"]}`}>Screenshots </h3>

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
export default Project;
