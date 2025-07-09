import styles from './page.module.css'
import ProjectsContainer from '@/ui/ProjectsContainer'
import { Options } from '@/components/SVG'
import { ButtonLink } from '@/components/Button'
import TechCard from '@/components/TechCard'
import NextLink from 'next/link'
import { getProjects } from '@/services/projects'
import { getTechStack } from '@/services/technologies'
import { getHeroData } from '@/services/layout'
import { getProjectListSchema, getTechnologiesSchema } from '@/utils/metadata'

async function Home() {
  const projects = await getProjects()
  const hero = await getHeroData()
  const technologies = await getTechStack()
  return (
    <main>
      {technologies && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getTechnologiesSchema(technologies),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getProjectListSchema(projects) }}
      />
      <section className={styles['hero-section']} id="contact">
        <article className={styles['introduction']}>
          <h1 className={styles['introduction__title']}>
            <span className={styles['introduction__subtitle']}>
              {hero?.subtitle}
            </span>
            <br />
            {hero?.title}
          </h1>
          <p className={styles['introduction__text']}>{hero?.text}</p>
          <div className={styles['contact-links']}>
            {hero?.contact_links.map((link, i) => (
              <ButtonLink
                key={link?.url}
                color={i > 0 ? 'default' : 'primary'}
                variant={i > 0 ? 'outline' : 'solid'}
                href={link?.url}
                target="_blank"
                rel="noreferrer"
              >
                {link?.name}
              </ButtonLink>
            ))}
          </div>
        </article>
      </section>

      <section id="projects">
        <div className={styles['page__section-title']}>
          <h2>Projects</h2>
        </div>
        <NextLink href="/projects" passHref={true} legacyBehavior>
          <ButtonLink
            className="tooltip tooltip--right"
            data-tooltip="Advance search"
            aria-label="advance projects search"
            color="primary"
            isIconButton={true}
          >
            <Options />
          </ButtonLink>
        </NextLink>
        <ProjectsContainer
          projects={projects}
          className={styles['projects__container']}
        />
      </section>

      <section id="technologies">
        <div className={styles['page__section-title']}>
          <h2>Tech Stack</h2>
        </div>
        <div className={styles['techs__grid']}>
          {technologies?.map((cat) => (
            <TechCard key={cat.category} data={cat} />
          ))}
        </div>
      </section>
    </main>
  )
}
export default Home
