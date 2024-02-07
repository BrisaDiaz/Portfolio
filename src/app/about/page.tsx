import styles from "./page.module.css";
import { School, Work, Language, Star } from "@/components/SVG";
import { ButtonLink } from "@/components/Button";
import { getAboutInfo } from "@/services/about";
import { notFound } from "next/navigation";

const About = async () => {
  const about = await getAboutInfo();
  if (!about) return notFound();
  return (
    <main>
      <section className={styles["page"]}>
        <article className={styles["summary__section"]}>
          <h1>About Me</h1>
          {about?.summary?.length ? (
            <div className={styles["summary__text"]}>
              {about?.summary?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <></>
          )}
          <ButtonLink
            color="primary"
            target="_blank"
            rel="noreferrer"
            href={about?.resume}
            download
          >
            Download CV
          </ButtonLink>
        </article>

        <article>
          <div className={styles["section__title"]}>
            <Star className={styles["section__svg"]} />
            <h2>Achievements</h2>
          </div>
          <ul className={`list ${styles["achievements__list"]}`}>
            {about.achievements.map((achievement: string) => (
              <li key={achievement} className="list__item">
                {achievement}
              </li>
            ))}
          </ul>
        </article>
        {about.experience.length ? (
          <article>
            <div className={styles["section__title"]}>
              <Work className={styles["section__svg"]} />
              <h2>Experience</h2>
            </div>
            <ul className={styles["timeline"]}>
              {about.experience.map(
                (work: {
                  role: string;
                  company: string;
                  location: string;
                  time_frame: string;
                  responsibilities: string[];
                }) => (
                  <li
                    className={styles["timeline__item"]}
                    key={work.time_frame + work.company}
                  >
                    <p className={`h4-font ${styles["timeline__item-title"]}`}>
                      {work.role}
                    </p>
                    <div className={styles["item__meta"]}>
                      <p>{`${work.company} - ${work.location}`}</p>
                      <p>{work.time_frame}</p>
                    </div>
                    <ul className={styles["list"]}>
                      {work.responsibilities.map((task: string) => (
                        <li key={task}>
                          <p>{task}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ),
              )}
            </ul>
          </article>
        ) : (
          <></>
        )}
        <article>
          <div className={styles["section__title"]}>
            <School className={styles["section__svg"]} />
            <h2>Education</h2>
          </div>
          <ul className={styles["timeline"]}>
            {about.education.map(
              (edu: {
                institution: string;
                studies: string;
                time_frame: string;
              }) => (
                <li key={edu.studies} className={styles["timeline__item"]}>
                  <p className={`h4-font ${styles["timeline__item-title"]}`}>
                    {edu.institution}
                  </p>
                  <div className={styles["item__meta"]}>
                    <p>{edu.studies}</p>
                    <p>{edu.time_frame}</p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </article>
        <article>
          <div className={styles["section__title"]}>
            <Language className={styles["section__svg"]} />
            <h2>Languages</h2>
          </div>
          <ul className={styles["language-list"]}>
            {about.languages.map(
              (language: { name: string; level: string }) => (
                <li key={language.name} className={styles["timeline__item"]}>
                  <p className={`h4-font ${styles["timeline__item-title"]}`}>
                    {language.name}
                  </p>
                  <span className={styles["language__level"]}>
                    {language.level}
                  </span>
                </li>
              ),
            )}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
