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
      <div className={styles["project-header"]}>
        <div className={styles["project-logo"]}>
          <Image
            src={`/Logo/${data.slug}.svg`}
            width={60}
            height={50}
            loading="lazy"
            placeholder="blur"
            quality={100}
            blurDataURL={data.logo.src}
            alt={data.logo.alt}
          />
        </div>
        <div>
          <span className={styles["project-subtitle"]}>{data.subtitle}</span>

          <h3 className={styles["project-title"]}>{data.title}</h3>
        </div>
      </div>
      <p className={styles["project-summary"]}>{data.summary}</p>
    </article>
  );
}
