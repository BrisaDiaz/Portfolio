import { forwardRef } from "react";
import styles from "./styles.module.css";
import { Project } from "@types";
import ProjectCard from "@/components/ProjectCard";
import NextLink from "next/link";
import {
  BookingApp,
  DeliveryApp,
  OrtexLogin,
  PhotographerPage,
  PinterestClone,
  SmartBuyApp,
  TecnoRevBlog,
  WikifitApp,
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
            href={"/project/" + project.slug}
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
  if (name == "smart-buy") return <SmartBuyApp fill="var(--primary-color)" />;
  if (name == "tecno-rev") return <TecnoRevBlog fill="var(--primary-color)" />;
  if (name == "ORTEX-login") return <OrtexLogin fill="var(--primary-color)" />;
  if (name == "hotel-booker") return <BookingApp fill="var(--primary-color)" />;
  if (name == "wikifit") return <WikifitApp fill="var(--primary-color)" />;
  if (name == "delivery-app")
    return <DeliveryApp fill="var(--primary-color)" />;
  if (name == "photographer-portfolio")
    return <PhotographerPage fill="var(--primary-color)" />;
  return <></>;
}
