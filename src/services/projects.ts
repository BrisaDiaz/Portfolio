import { PROJECTS, PROJECTS_TAGS, TOPIC_TAGS, TECH_TAGS } from "@data";
import { keyInsensitiveCoincidence } from "@/utils/strings";
const FILTER_TAGS = [...TOPIC_TAGS, ...TECH_TAGS];
function getProjectsByTag(tag: string) {
  const ids = PROJECTS_TAGS.reduce(
    (
      idList: number[],
      current: {
        id: number;
        tags: string[];
      },
    ) => {
      if (keyInsensitiveCoincidence(current.tags, tag)) {
        idList.push(current.id);
      }
      return idList;
    },
    [],
  );
  return ids;
}
function getResultsCountByTag(tags: string[] = FILTER_TAGS) {
  const resultsByTag: { [tag: string]: number } = {};
  tags.forEach((tag) => {
    const cant = getProjectsByTag(tag).length;
    resultsByTag[tag] = cant;
  });
  return resultsByTag;
}
function getProjectsByTags(tags: string[] = FILTER_TAGS) {
  const projectsIds: number[] = [];
  PROJECTS_TAGS.forEach((project) => {
    let isValid = tags.some((tag) =>
      keyInsensitiveCoincidence(project.tags, tag),
    );
    if (isValid) {
      projectsIds.push(project.id);
    }
  });
  const projects = PROJECTS.filter((project) => project.id in projectsIds);
  return projects;
}

export { getProjectsByTags, getResultsCountByTag };
