import PageClient from "./page.client";
import { getProjectsByTags, getResultsCountByTag } from "@/services/projects";
import { PROJECTS_FILTERS, DEFAULT_PROJECTS_FILTER } from "@data";
import { ProjectsFilters } from "@types";
interface PageProps {
  params: {};
  searchParams: { tags: string; filter: string };
}
export default function ProjectsSearch(props: PageProps) {
  const urlTags = props.searchParams?.tags?.split(",") || [];
  const urlFilter = props.searchParams?.filter;
  const projects = getProjectsByTags(urlTags);
  const resultsByTag = getResultsCountByTag();

  let defaultFilter = DEFAULT_PROJECTS_FILTER as keyof ProjectsFilters;
  if (urlFilter in PROJECTS_FILTERS) {
    defaultFilter = urlFilter as keyof ProjectsFilters;
  }
  return (
    <PageClient
      defaultProjects={projects}
      defaultTags={urlTags}
      resultsByTag={resultsByTag}
      filters={PROJECTS_FILTERS}
      defaultFilter={defaultFilter}
    />
  );
}
