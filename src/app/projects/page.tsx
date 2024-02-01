"use client";
import styles from "./styles.module.css";
import { PROJECTS, PROJECTS_TAGS, TOPIC_TAGS, TECH_TAGS } from "@data";
import { useMemo, useState, useRef } from "react";
import TagManger, { TagManagerRefType } from "@/components/TagManager";
import { keyInsensitiveCoincidence } from "@/utils/strings";
import Select, { SelectOption } from "@/components/Select";
import Badge from "@/components/Badge";
import ProjectsContainer from "@/ui/ProjectsContainer";

export default function Projects() {
  class TagsMap {
    private static instance: TagsMap;
    private projectsTags: {
      id: number;
      tags: string[];
    }[];

    private constructor() {
      this.projectsTags = PROJECTS_TAGS;
    }

    public static getInstance(): TagsMap {
      if (!TagsMap.instance) {
        TagsMap.instance = new TagsMap();
      }
      return TagsMap.instance;
    }

    public getProjectsTags(): typeof this.projectsTags {
      return this.projectsTags;
    }

    public getProjectTags(
      projectId: number,
    ): (typeof this.projectsTags)[0]["tags"] | number {
      const foundProject = this.projectsTags.find(
        (projectTags) => projectTags.id == projectId,
      );
      if (foundProject) return foundProject.tags;
      return -1;
    }

    public getProjectsByTag(tag: string) {
      const ids = this.projectsTags.reduce(
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
    public getProjectsByAllTag(tags: string[]) {
      const resultsByTag: { [tag: string]: number[] } = {};
      tags.forEach((tag) => {
        const ids = this.getProjectsByTag(tag);
        resultsByTag[tag] = ids;
      });
      return resultsByTag;
    }

    public getProjectsByTags(tags: string[]) {
      const projectsIds: number[] = [];
      this.projectsTags.forEach((project) => {
        let isValid = tags.some((tag) =>
          keyInsensitiveCoincidence(project.tags, tag),
        );
        if (isValid) {
          projectsIds.push(project.id);
        }
      });
      return projectsIds;
    }
  }
  const projectsTagsDB = useMemo(() => TagsMap.getInstance(), []);
  const [searchResult, setSearchResult] = useState<number[]>([]);
  const [suggestions, setSuggestions] = useState(TECH_TAGS);

  function handleFilterChange(filter: string | number) {
    if (filter == "techs") {
      return setSuggestions(TECH_TAGS);
    }
    if (filter == "topics") {
      return setSuggestions(TOPIC_TAGS);
    }
  }
  function handleTagsChange(tags: string[]) {
    const results = projectsTagsDB.getProjectsByTags(tags);
    setSearchResult(results);
  }
  const projects = useMemo(
    () => PROJECTS.filter((project) => searchResult.includes(project.id)),
    [searchResult],
  );
  const tagManagerRef = useRef<TagManagerRefType>(null);
  const onDeleteTag = (tag: string) => {
    tagManagerRef.current?.removeTag(tag);
  };
  const tags = tagManagerRef.current?.tags || [];
  const resultsByTag = useMemo(
    () => projectsTagsDB.getProjectsByAllTag([...TECH_TAGS, ...TOPIC_TAGS]),
    [],
  );
  return (
    <main>
      <section className={styles.page}>
        <article>
          <div className={styles["tags__controls"]}>
            <Select
              label="Select type of filter"
              displayedValue="Technologies"
              defaultValue="techs"
              onChange={handleFilterChange}
            >
              <SelectOption value="techs">Technologies</SelectOption>
              <SelectOption value="topics">Topics</SelectOption>
            </Select>
            <TagManger
              suggestedTags={suggestions}
              onTagsChange={handleTagsChange}
              label="Select search tags"
              ref={tagManagerRef}
            />
          </div>
          {tags.length ? (
            <div className={styles["tags__container"]}>
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="subtle"
                  transformText="title"
                  size="sm"
                  count={tag in resultsByTag ? resultsByTag[tag].length : 0}
                  deletable={true}
                  onDelete={() => onDeleteTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : (
            <></>
          )}
        </article>

        <p className={styles["results__count"]}>
          {searchResult.length} Results
        </p>
        <ProjectsContainer projects={projects} />
      </section>
    </main>
  );
}
