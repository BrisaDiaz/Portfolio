import { Project, TechStack } from '@types'

export const BASE_META = {
  title: 'Brisa Díaz | Full-Stack Developer & Frontend Development Specialist',
  siteName: 'Brisa Díaz | Portfolio',
  author: 'Brisa Díaz',
  role: 'full-stack developer',
  knowledge: 'web development',
  description:
    'I\'m enthusiastic full-stack web developer, specialized in frontend performance, accessibility and SEO.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  twitterUser: '@Brisa_A_Diaz',
  email: 'brisaabigaildiaz2000@gmail.com',
  sameAs: [
    'https://linkedin.com/in/brisa-díaz',
    'https://github.com/BrisaDiaz',
    'https://mobile.twitter.com/Brisa_A_Diaz',
  ],
}

export function getWebsiteSchema() {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: BASE_META.siteUrl,
    name: BASE_META.siteName,
    description: BASE_META.description,
    creator: {
      '@type': 'Person',
      name: BASE_META.author,
      knowsAbout: BASE_META.knowledge,
      email: BASE_META.email,
      url: BASE_META.siteUrl,
      image:
        'https://avatars.githubusercontent.com/u/80206872?s=400&u=be6bbe546e131904a49630c7e1eded15dbff4d45&v=4',
      sameAs: BASE_META.sameAs,
      jobTitle: BASE_META.role,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_META.siteUrl}/projects?tags={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
  return JSON.stringify(schema)
}
export function getNavigationSchema() {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_META.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${BASE_META.siteUrl}/about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Search Projects',
        item: `${BASE_META.siteUrl}/projects`,
      },
    ],
  }
  return JSON.stringify(schema)
}
export function getProjectListSchema(projects: Project[]) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'projects',
    description:
      'software development projects i have worked in, from stand alone websites, single page applications, progressive web apps to websites implementing multiples content management systems',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        image: project.captions[0].src,
        mainEntityOfPage: `${BASE_META.siteUrl}/project/${project.slug}`,
        url: `${BASE_META.siteUrl}/project/${project.slug}`,
        sameAs: [project.demo, project.source_code],
        description: project.summary,
        author: {
          '@type': 'Person',
          name: BASE_META.author,
        },
      },
    })),
  }
  return JSON.stringify(schema)
}
export interface TechListItem {
  '@type': string
  position: number
  item: {
    name: string
    description: string
    sameAs: string[]
  }
}
export function getTechnologiesSchema(technologies: TechStack[]) {
  let techList: TechListItem[] = []
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'technologies',
    description:
      'Technologies and tools used during the software development process.',
    numberOfItems: techList.length,
    itemListElement: techList,
  }

 
  technologies.forEach((group) => {
    const partial = group.technologies.map(
      (tech, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          name: group.category,
          description:
          group.category === 'language'
              ? 'programming language'
              : `${
                group.category === 'other' ? 'service/development' : group.category
                } tool`,
          sameAs: [tech.doc_url],
        },
      })
    )
    techList = [...techList, ...partial]
  })
  return JSON.stringify(schema)
}

export function getProjectSchema(project: Project) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    author: {
      '@type': 'Person',
      name: BASE_META.author,
    },
    image: project.captions[0].src,
    alternateName: project.subtitle,
    sameAs: [
      `${BASE_META.siteUrl}/project/${project.slug}?id=${project.id}`,
      project.demo,
      project.source_code,
    ],
    keywords: project.tags,
    description: project.summary + '\nFeatures: ' + project.features.join(''),
  }
  return JSON.stringify(schema)
}
