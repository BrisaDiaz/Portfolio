import PageClient from "./page.client";
import { getProjects } from "@/services/projects";
import { type ProjectsFilterTags, type ProjectsTagType } from "@types";
import { getProjectsByTags, getTagProjectCounts } from "@/utils/projects";
import { notFound } from "next/navigation";
import { getTags } from "@/services/tags";
interface PageProps {
  params: {};
  searchParams: { tags: string; filter: string };
}
async function ProjectsSearch(props: PageProps) {
  const projectsTags = await getTags();
  if (!projectsTags) return notFound();
  const projects = await getProjects();
  if (!projects) return notFound();

  const urlTags = props.searchParams?.tags?.split(",") || [];
  const urlFilter = props.searchParams?.filter;
  const resultProjects = getProjectsByTags(projects, urlTags);
  const resultsByTag = getTagProjectCounts(projects, [
    ...projectsTags.technologies,
    ...projectsTags.topics,
  ]);

  const projectsFilters: ProjectsFilterTags = {
    technologies: { tags: projectsTags.technologies, label: "Technologies" },
    topics: { tags: projectsTags.topics, label: "Topics" },
  };

  let defaultFilter = "technologies";
  if (urlFilter in projectsFilters) {
    defaultFilter = urlFilter;
  }
  return (
    <PageClient
      defaultProjects={resultProjects}
      projects={projects}
      defaultTags={urlTags}
      resultsByTag={resultsByTag}
      filters={projectsFilters}
      defaultFilter={defaultFilter as ProjectsTagType}
    />
  );
}
export default ProjectsSearch;