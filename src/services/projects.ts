import { PROJECTS, TOPIC_TAGS, TECH_TAGS } from "@data";
import { keyInsensitiveCoincidence } from "@/utils/strings";
const FILTER_TAGS = [...TOPIC_TAGS, ...TECH_TAGS];
function getProjectsByTag(tag: string) {
  const projects = PROJECTS.filter((project) =>
    keyInsensitiveCoincidence(project.tags, tag),
  );
  return projects;
}
function getTagProjectCounts(tags: string[] = FILTER_TAGS) {
  const resultsByTag: { [tag: string]: number } = {};
  tags.forEach((tag) => {
    const cant = getProjectsByTag(tag).length;
    resultsByTag[tag] = cant;
  });
  return resultsByTag;
}
function getProjectsByTags(tags: string[] = FILTER_TAGS) {
  const projects = PROJECTS.filter((project) =>
    tags.some((tag) => keyInsensitiveCoincidence(project.tags, tag)),
  );
  return projects;
}

export { getProjectsByTags, getTagProjectCounts };
