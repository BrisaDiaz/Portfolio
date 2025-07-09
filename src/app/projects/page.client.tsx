'use client'
import styles from './styles.module.css'
import { useState, useRef, useCallback } from 'react'
import TagManger, { TagManagerRefType } from '@/components/TagManager'
import Select, { SelectOption } from '@/components/Select'
import Badge from '@/components/Badge'
import ProjectsContainer from '@/ui/ProjectsContainer'
import { Logo } from '@/components/Illustrations'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { Project, type ProjectsFilterTags, type ProjectsTagType } from '@types'
import { getProjectsByTags } from '@/utils/projects'

interface PageProps {
  defaultProjects: Project[]
  projects: Project[]
  defaultTags: string[]
  resultsByTag: { [tag: string]: number }
  filters: ProjectsFilterTags
  defaultFilter: ProjectsTagType
}
export default function Projects(props: PageProps) {
  const {
    defaultProjects,
    defaultTags,
    resultsByTag,
    filters,
    defaultFilter,
    projects,
  } = props

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [displayedProjects, setDisplayProjects] =
    useState<Project[]>(defaultProjects)
  const [suggestions, setSuggestions] = useState(filters[defaultFilter].tags)
  const tagManagerRef = useRef<TagManagerRefType>(null)

  const handleSearch = useCallback(async (tags: string[]) => {
    const params = new URLSearchParams(searchParams)
    const key = 'tags'
    if (tags.length) {
      const urlTags = tags.join(',')
      params.set(key, urlTags)
      const results = getProjectsByTags(projects, tags)
      setDisplayProjects(results)
    } else {
      params.delete(key)
      setDisplayProjects([])
      params.delete(key)
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, [])

  function handleFilterChange<ProjectsTagType>(filter: ProjectsTagType) {
    setSuggestions(filters[filter as keyof ProjectsFilterTags].tags)
    const params = new URLSearchParams(searchParams)
    const key = 'filter'
    params.set(key, filter as string)
    router.replace(`${pathname}?${params.toString()}`)
  }

  const onDeleteTag = (tag: string) => {
    tagManagerRef.current?.removeTag(tag)
  }
  const tags = tagManagerRef.current?.tags || defaultTags

  return (
    <main>
      <section className={styles.page}>
        <article>
          <div className={styles['tags__controls']}>
            <Select
              label='Select type of filter'
              displayedValue={filters[defaultFilter].label}
              defaultValue={defaultFilter}
              onChange={handleFilterChange}
            >
              {Object.entries(filters).map((filter) => (
                <SelectOption value={filter[0]} key={filter[0]}>
                  {filter[1].label}
                </SelectOption>
              ))}
            </Select>
            <TagManger
              suggestedTags={suggestions}
              onTagsChange={handleSearch}
              defaultTags={defaultTags}
              label='Select search tags'
              ref={tagManagerRef}
            />
          </div>
          {tags.length ? (
            <div className={styles['tags__container']}>
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant='subtle'
                  transformText='title'
                  size='sm'
                  count={tag in resultsByTag ? resultsByTag[tag] : 0}
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

        <p className={styles['results__count']}>
          {displayedProjects.length} Results
        </p>
        {displayedProjects.length ? (
          <ProjectsContainer projects={displayedProjects} />
        ) : (
          <div className={styles['results__placeholder']}>
            <Logo />
          </div>
        )}
      </section>
    </main>
  )
}
