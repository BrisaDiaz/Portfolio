
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/Link";
import Badge from "@/components/Badge";
import Table, {
  TableHead,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
} from "@/components/Table";
import { fetchProjectById } from "@/services/projects";
import { BASE_META, getProjectSchema } from "@/utils/metadata";

export interface Props {
  params: { slug: string };
  searchParams: { id: string };
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = searchParams.id;

  const project = await fetchProjectById(parseInt(id));

  const orgImages = (await parent).openGraph?.images || [];
  const twitterImages = (await parent).twitter?.images || [];
  const articleUrl = `${BASE_META.siteUrl}/projects/${project?.slug || ""}?id=${
    project?.id || ""
  }`;
  const title = project?.title || "";
  const description = project?.summary || "";

  if (project) {
    orgImages.unshift({
      url: project?.captions[0]?.src,
      width: 1200,
      height: 630,
    });
    twitterImages.unshift({
      url: project?.captions[0]?.src,
      alt: `${project.title} capture`,
    });
  }
  return {
    title,
    description,
    openGraph: {
      type: "article",
      images: orgImages,
      title,
      description,
      url: articleUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: BASE_META.siteUrl,
      creator: BASE_META.twitterUser,
      images: twitterImages,
    },
  };
}
const Project: NextPage<Props> = async (pageProps) => {
  const {
    searchParams: { id },
  } = pageProps;
  if (!id) return notFound();
  const project = await fetchProjectById(parseInt(id));
  if (!project) return notFound();

  const techs = Object.freeze(project.technologies);
  type Category = keyof typeof techs;
  const categories = Object.keys(techs) as Category[];
  return (
    <main className={styles["page"]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getProjectSchema(project) }}
      />
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
            {project?.demo && (
              <li>
                <Link
                  external={true}
                  href={project?.demo}
                  primary={true}
                  btn={true}
                  className="link"
                >
                  Live Demo
                </Link>
              </li>
            )}
            {project?.source_code && (
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
            )}
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
