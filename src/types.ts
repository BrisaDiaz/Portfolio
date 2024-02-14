export interface Caption {
  src: string
  alt: string
  placeholder?: string
}

export type TechCategory =
  | 'language'
  | 'frontend'
  | 'backend'
  | 'testing'
  | 'documentation'
  | 'hosting'
  | 'other'

export type TechStack = {
  [key in TechCategory]: {
    name: string
    logo_name: string
    doc_url: string
  }[]
}
export type ProjectStatus = 'Active' | 'Archived' | 'Paused' | 'Abandoned'
export interface Project {
  id: number
  slug: string
  color?: string
  background?: string
  title: string
  subtitle: string
  status: ProjectStatus
  summary: string
  icon: Caption
  captions: Caption[]
  technologies: {
    [key in TechCategory]?: string[]
  }
  features: string[]
  credentials?: {
    email: string
    password: string
  }
  source_code?: string
  demo?: string
  tags: string[]
}

export type ProjectsTagType = 'technologies' | 'topics'

export type ProjectsTags = {
  [key in ProjectsTagType]: string[]
}
export type ProjectsFilterTags = {
  [key in ProjectsTagType]: {
    tags: string[]
    label: string
  }
}

export interface Link {
  name: string
  url: string
}
export interface FooterData {
  about: {
    title: string
    summary: string
  }
  contact_links: Link[]
  highlighted_projects: Link[]
  rights?: string
}

export interface HeaderData {
  menu_links: Link[]
}

export interface HeroData {
  subtitle: string
  title: string
  text: string
  contact_links: Link[]
}
export interface Education {
  studies: string
  time_frame: string
  institution: string
}
export interface Experience {
  role: string
  company: string
  location: string
  time_frame: string
  responsibilities: string[]
}
export interface Language {
  name: string
  level: string
}
export interface AboutInfo {
  summary: string[]
  resume: string
  experience: Experience[]
  education: Education[]
  certifications: Education[]
  languages: Language[]
  achievements: string[]
}
