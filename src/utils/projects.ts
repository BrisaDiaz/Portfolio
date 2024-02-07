import { keyInsensitiveCoincidence } from "./strings";
import { Project } from "@types";

 function getTagProjectCounts(projects: Project[] = [], tags: string[] = []) {
  const resultsByTag: { [tag: string]: number } = {};
  tags.forEach((tag) => {
    const cant = projects.filter((project) =>
      keyInsensitiveCoincidence(project.tags, tag),
    ).length;
    resultsByTag[tag] = cant;
  });
  return resultsByTag;
}
function getProjectsByTags(projects: Project[] = [], tags: string[] = []) {
  const result = projects.filter((project) =>
    tags.some((tag) => keyInsensitiveCoincidence(project.tags, tag)),
  );
  return result;
}

export {getProjectsByTags, getTagProjectCounts}