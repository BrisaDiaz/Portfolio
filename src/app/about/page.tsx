import styles from "./page.module.css";
import { ABOUT } from "@data";
const About = () => {
  return (
    <main>
      <section className={styles["page"]}>
        <article className={styles["summary-section"]}>
          <h1>About Me</h1>
          <p className={styles["summary-text"]}>
            {
              "I'm a passionate Information Systems Engineering student, dedicated to applying technology to solve real-world challenges for people and businesses. My expertise lies in JavaScript, showcased through practical and user-friendly personal projects. With a keen understanding of the ever-changing tech landscape and a proactive learning mindset, I'm ready to contribute to diverse software projects, delivering solutions that exceed expectations for both users and businesses. "
            }
          </p>
          <a
            className="button-link"
            target="_blank"
            rel="noreferrer"
            href={ABOUT.resume}
            download
          >
            Download CV
          </a>
        </article>
        <article>
          <div className={styles["section-title"]}>
            <Skills />
            <h2>Skills</h2>
          </div>
          <ul className={styles["list"]}>
            {ABOUT.skills.map((skill: string) => (
              <li key={skill}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </article>
        {ABOUT.experience.length ? (
          <article>
            <div className={styles["section-title"]}>
              <Work />
              <h2>Experience</h2>
            </div>
            <ul className={styles["timeline-list"]}>
              {ABOUT.experience.map(
                (work: {
                  role: string;
                  company: string;
                  location: string;
                  timeFrame: string;
                  responsibilities: string[];
                }) => (
                  <li
                    className={styles["timeline-item"]}
                    key={work.timeFrame + work.company}
                  >
                    <h3>{work.role}</h3>
                    <div className={styles["item-meta"]}>
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
          <div className={styles["section-title"]}>
            <Education />
            <h2>Education</h2>
          </div>
          <ul className={styles["timeline-list"]}>
            {ABOUT.education.map(
              (edu: {
                institution: string;
                studies: string;
                timeFrame: string;
              }) => (
                <li key={edu.studies} className={styles["timeline-item"]}>
                  <h3>{edu.institution}</h3>
                  <div className={styles["item-meta"]}>
                    <p>{edu.studies}</p>
                    <p>{edu.timeFrame}</p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </article>
        <article>
          <div className={styles["section-title"]}>
            <Language />
            <h2>Idioms</h2>
          </div>
          <ul className={styles["language-list"]}>
            {ABOUT.idioms.map((idiom: { name: string; level: string }) => (
              <li key={idiom.name} className={styles["timeline-item"]}>
                <h3>{idiom.name}</h3>
                <span>{idiom.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

function Education() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
        stroke="var(--main-color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
        stroke="var(--main-color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.4 15V9"
        stroke="var(--main-color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Skills() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="var(--main-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.73 3.51l1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0z"
      ></path>
    </svg>
  );
}

function Language() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="var(--main-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
      ></path>
      <path
        stroke="var(--main-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
      ></path>
    </svg>
  );
}
function Work() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="var(--main-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22zM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
      ></path>
      <path
        stroke="var(--main-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1zM21.65 11A16.484 16.484 0 0114 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
      ></path>
    </svg>
  );
}
export default About;
