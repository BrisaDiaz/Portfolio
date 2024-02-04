import styles from "./page.module.css";
import { ABOUT } from "@data";
import { School, Work, Language, Star } from "@/components/SVG";
import { ButtonLink } from "@/components/Button";
const About = () => {
  return (
    <main>
      <section className={styles["page"]}>
        <article className={styles["summary__section"]}>
          <h1>About Me</h1>
          <p className={styles["summary__text"]}>{ABOUT.summary}</p>
          <ButtonLink
            color="primary"
            target="_blank"
            rel="noreferrer"
            href={ABOUT.resume}
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
            {ABOUT.achievements.map((achievement: string) => (
              <li key={achievement} className="list__item">
                {achievement}
              </li>
            ))}
          </ul>
        </article>
        {ABOUT.experience.length ? (
          <article>
            <div className={styles["section__title"]}>
              <Work className={styles["section__svg"]} />
              <h2>Experience</h2>
            </div>
            <ul className={styles["timeline"]}>
              {ABOUT.experience.map(
                (work: {
                  role: string;
                  company: string;
                  location: string;
                  timeFrame: string;
                  responsibilities: string[];
                }) => (
                  <li
                    className={styles["timeline__item"]}
                    key={work.timeFrame + work.company}
                  >
                    <p className={`h4-font ${styles["timeline__item-title"]}`}>
                      {work.role}
                    </p>
                    <div className={styles["item__meta"]}>
                      <p>{`${work.company} - ${work.location}`}</p>
                      <p>{work.timeFrame}</p>
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
            {ABOUT.education.map(
              (edu: {
                institution: string;
                studies: string;
                timeFrame: string;
              }) => (
                <li key={edu.studies} className={styles["timeline__item"]}>
                  <p className={`h4-font ${styles["timeline__item-title"]}`}>
                    {edu.institution}
                  </p>
                  <div className={styles["item__meta"]}>
                    <p>{edu.studies}</p>
                    <p>{edu.timeFrame}</p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </article>
        <article>
          <div className={styles["section__title"]}>
            <Language className={styles["section__svg"]} />
            <h2>Idioms</h2>
          </div>
          <ul className={styles["language-list"]}>
            {ABOUT.idioms.map((idiom: { name: string; level: string }) => (
              <li key={idiom.name} className={styles["timeline__item"]}>
                <p className={`h4-font ${styles["timeline__item-title"]}`}>
                  {idiom.name}
                </p>
                <span className={styles["idiom__level"]}>{idiom.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
