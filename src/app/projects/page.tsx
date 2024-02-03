import PageClient from "./page.client";
import { getProjectsByTags, getResultsCountByTag } from "@/services/projects";
import { PROJECTS_FILTERS, DEFAULT_PROJECTS_FILTER } from "@data";
import { type ProjectsFilters, type ProjectsFilter } from "@types";
interface PageProps {
  params: {};
  searchParams: { tags: string; filter: string };
}
export default function ProjectsSearch(props: PageProps) {
  const urlTags = props.searchParams?.tags?.split(",") || [];
  const urlFilter = props.searchParams?.filter;
  const projects = getProjectsByTags(urlTags);
  const resultsByTag = getResultsCountByTag();

  let defaultFilter = DEFAULT_PROJECTS_FILTER;
  if (urlFilter in PROJECTS_FILTERS) {
    defaultFilter = urlFilter;
  }
  return (
    <PageClient
      defaultProjects={projects}
      defaultTags={urlTags}
      resultsByTag={resultsByTag}
      filters={PROJECTS_FILTERS}
      defaultFilter={defaultFilter as ProjectsFilter}
    />
  );
}
