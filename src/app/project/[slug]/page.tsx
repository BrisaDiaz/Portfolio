import { PROJECTS } from "@data";
import styles from "./page.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Link from "@/components/Link";
import Badge from "@/components/Badge";
import Table, {
  TableHead,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
} from "@/components/Table";

const Project: NextPage<{ params: { slug: string } }> = (p) => {
  const project = PROJECTS.find(
    (project) => project.slug === p.params.slug,
  ) as (typeof PROJECTS)[0];

  const techs = Object.freeze(project.technologies);
  type Category = keyof typeof techs;
  const categories = Object.keys(techs) as Category[];
  return (
    <main className={styles["page"]}>
      <section>
        <div className={styles["heading"]}>
          <Image
            className={styles["project-logo"]}
            src={project?.icon?.src}
            width={150}
            height={100}
            loading="eager"
            placeholder="blur"
            blurDataURL={project?.icon?.placeholder || project?.icon?.src}
            quality={100}
            alt={project?.icon?.alt}
          />
          <div>
            <h1 className={`${styles["title"]}`}>{project?.title}</h1>
            <h2 className={`${styles["subtitle"]}`}>{project?.subtitle}</h2>
          </div>
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
          <Table doubleEntry={true} size="sm" fullWidth={true}>
            <TableHead>
              {["", "technologies"].map((title) => (
                <TableHeadCell key={title}>{title}</TableHeadCell>
              ))}
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category}>
                  <TableCell>{category}</TableCell>
                  <TableCell>
                    <div className={styles["tech__list"]}>
                      {category in techs ? (
                        techs[category]?.map((tech: string) => (
                          <Badge
                            key={tech}
                            variant="subtle"
                            size="sm"
                            color="secondary"
                          >
                            {tech}
                          </Badge>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
          <h3 className={`${styles["section__title"]}`}>Screenshots </h3>

          {project?.captions.map((img) => (
            <Image
              className={styles["screenshots"]}
              src={img.src}
              alt={img.src}
              width={900}
              height={1200}
              placeholder="blur"
              loading="lazy"
              blurDataURL={img?.placeholder || img.src}
              key={img.src}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Project;
