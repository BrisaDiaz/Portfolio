import styles from "./styles.module.css";
import Image from "next/image";
export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  logo: {
    src: string;
    alt: string;
  };
}
interface Props extends React.HTMLAttributes<HTMLElement> {
  data: Project;
}
export default function Project(props: Props) {
  const { data, ...other } = props;
  return (
    <article className={styles["project-card"]} {...other}>
      {/* <div className={styles["project-logo"]}>
        <Image
          src={data.logo.src}
          width={60}
          height={50}
          loading="lazy"
          placeholder="blur"
          blurDataURL={data.logo.src}
          alt={data.logo.alt}
        />
      </div> */}
      <div className={styles["project-content"]}>
        <p className={styles["project-widget"]}>{data.subtitle}</p>
        <h3 className={styles["project-title"]}>{data.title}</h3>
        <p className={styles["project-summary"]}>{data.summary}</p>
      </div>
    </article>
  );
}
