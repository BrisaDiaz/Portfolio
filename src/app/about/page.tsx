import styles from './page.module.css'
import { Metadata } from 'next'
import {
  School,
  Work,
  Language,
  Rocket,
  Ribbon,
  Archive,
} from '@/components/SVG'
import { getAboutInfo } from '@/services/about'
import { notFound } from 'next/navigation'
import { ButtonLink } from '@/components/Button'
export const metadata: Metadata = {
  title: 'About',
}

const About = async () => {
  const about = await getAboutInfo()
  if (!about) return notFound()
  return (
    <main>
      <section className={styles['page']}>
        <div className={styles['heading__container']}>
          <h1 className={styles['summary__title']}>{'Get to know me'}</h1>
          <ButtonLink
            target='_blank'
            data-tooltip='Download CV'
            rel='noreferrer'
            aria-label='download cv'
            href={about?.resume}
            className={`tooltip tooltip--left ${styles['download-button']}`}
            download
            isIconButton={true}
            color='primary'
          >
            <Archive />
          </ButtonLink>
        </div>

        <article className={styles['summary__section']}>
          {about?.summary?.length ? (
            <div className={styles['summary__text']}>
              {about?.summary?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <></>
          )}
        </article>

        <article>
          <div className={styles['section__title']}>
            <Rocket className={styles['section__svg']} />
            <h2>Achievements</h2>
          </div>
          <ul className={`list ${styles['achievements__list']}`}>
            {about.achievements.map((achievement: string) => (
              <li key={achievement} className='list__item'>
                {achievement}
              </li>
            ))}
          </ul>
        </article>
        {about.experience.length ? (
          <article>
            <div className={styles['section__title']}>
              <Work className={styles['section__svg']} />
              <h2>Experience</h2>
            </div>
            <ul className={styles['timeline']}>
              {about.experience.map((work) => (
                <li
                  className={styles['timeline__item']}
                  key={work.time_frame + work.company}
                >
                  <p className={`h4-font ${styles['timeline__item-title']}`}>
                    {work.role}
                  </p>
                  <div className={styles['item__meta']}>
                    <p>{`${work.company} - ${work.location}`}</p>
                    <p>{work.time_frame}</p>
                  </div>
                  <ul className={styles['list']}>
                    {work.responsibilities.map((task: string) => (
                      <li key={task}>
                        <p>{task}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </article>
        ) : (
          <></>
        )}
        {about.education.length ? (
          <article>
            <div className={styles['section__title']}>
              <School className={styles['section__svg']} />
              <h2>Education</h2>
            </div>
            <ul className={styles['timeline']}>
              {about.education.map((edu) => (
                <li key={edu.studies} className={styles['timeline__item']}>
                  <p className={`h4-font ${styles['timeline__item-title']}`}>
                    {edu.institution}
                  </p>
                  <div className={styles['item__meta']}>
                    <p>{edu.studies}</p>
                    <p>{edu.time_frame}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ) : (
          <></>
        )}
        {about?.certifications?.length ? (
          <article>
            <div className={styles['section__title']}>
              <Ribbon className={styles['section__svg']} />
              <h2>Certifications</h2>
            </div>
            <ul className={styles['timeline']}>
              {about.certifications.map((cer) => (
                <li key={cer.studies} className={styles['timeline__item']}>
                  <p className={`h4-font ${styles['timeline__item-title']}`}>
                    {cer.institution}
                  </p>
                  <div className={styles['item__meta']}>
                    <p>{cer.studies}</p>
                    <p>{cer.time_frame}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ) : (
          <></>
        )}
        <article>
          <div className={styles['section__title']}>
            <Language className={styles['section__svg']} />
            <h2>Languages</h2>
          </div>
          <ul className={styles['language-list']}>
            {about.languages.map(
              (language: { name: string; level: string }) => (
                <li key={language.name} className={styles['timeline__item']}>
                  <p className={`h4-font ${styles['timeline__item-title']}`}>
                    {language.name}
                  </p>
                  <span className={styles['language__level']}>
                    {language.level}
                  </span>
                </li>
              )
            )}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default About
