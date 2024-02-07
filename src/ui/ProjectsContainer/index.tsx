import { forwardRef } from "react";
import styles from "./styles.module.css";
import { Project } from "@types";
import ProjectCard from "@/components/ProjectCard";
import NextLink from "next/link";
import {
  BookingApp,
  DeliveryApp,
  Ortex,
  PhotographerPage,
  PinterestClone,
  SmartBuy,
  TecnoRev,
  Wikifit,
  Portfolio,
} from "@/components/Illustrations";

interface ProjectsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  projects: Project[];
}
const ProjectsContainer = forwardRef(
  (props: ProjectsContainerProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    const { projects = [], className = "", ...other } = props;

    return (
      <div
        {...other}
        className={`${styles["projects__container"]} ${className}`}
        ref={ref}
      >
        {projects.map((project) => (
          <NextLink
            href={`/project/${project.slug}?id=${project.id}`}
            key={project.id}
            className={`link-box ${styles["project__link"]}`}
          >
            <ProjectCard
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
    );
  },
);
ProjectsContainer.displayName = "ProjectsContainer";
export default ProjectsContainer;

function ProjectLogo({ name }: { name: string }) {
  if (name == "pinterest-clone")
    return <PinterestClone fill="var(--primary-color)" />;
  if (name == "smart-buy") return <SmartBuy fill="var(--primary-color)" />;
  if (name == "tecno-rev") return <TecnoRev fill="var(--primary-color)" />;
  if (name == "ORTEX-login") return <Ortex fill="var(--primary-color)" />;
  if (name == "hotel-booker") return <BookingApp fill="var(--primary-color)" />;
  if (name == "wikifit") return <Wikifit fill="var(--primary-color)" />;
  if (name == "delivery-app")
    return <DeliveryApp fill="var(--primary-color)" />;
  if (name == "photographer-portfolio")
    return <PhotographerPage fill="var(--primary-color)" />;
  return <Portfolio fill="var(--primary-color)" />;
}
