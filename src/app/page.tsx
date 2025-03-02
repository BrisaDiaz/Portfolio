import styles from './page.module.css'
import Link from '@/components/Link'
import ProjectsContainer from '@/ui/ProjectsContainer'
import { Linkedin, Email, Github, Options } from '@/components/SVG'
import { ButtonLink } from '@/components/Button'
import NextLink from 'next/link'
import { getProjects } from '@/services/projects'
import { getTechStack } from '@/services/technologies'
import { getHeroData } from '@/services/layout'
import ResizeBox from '@/components/ResizeBox'
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
                {link?.name} <SocialIcon name={link?.name} />
              </ButtonLink>
            ))}
          </div>
        </article>
      </section>

      <section id="projects">
        <ResizeBox
          content="text"
          color="secondary"
          className={styles['page__section-title']}
        >
          <h2>My collection of projects</h2>
        </ResizeBox>
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
        <ResizeBox
          content="text"
          color="secondary"
          className={styles['page__section-title']}
        >
          <h2>Technologies I&#39;ve worked with</h2>
        </ResizeBox>
        <div className={styles['techs__container']}>
          {technologies ? (
            Object.entries(technologies).map((entry) => (
              <article key={entry[0]}>
                <h3 className={styles['tech-category__name']}>{entry[0]}</h3>
                <ul>
                  {entry[1].map((tech) => (
                    <li key={tech.name} className="link">
                      <Link external={true} href={tech.doc_url}>
                        {tech.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  )
}
export default Home

function SocialIcon({ name }: { name: string }) {
  if (name == 'linkedin') return <Linkedin />
  if (name == 'github') return <Github />
  if (name == 'email') return <Email />
  return <></>
}
