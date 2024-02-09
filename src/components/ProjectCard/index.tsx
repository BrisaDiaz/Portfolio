import styles from './styles.module.css'

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  summary: string
  logo: React.ReactNode
}
interface Props extends React.HTMLAttributes<HTMLElement> {
  data: Project
}
export default function Project(props: Props) {
  const { data, className, ...other } = props
  return (
    <article {...other} className={`${styles['project']} ${className ?? ''}`}>
      <div className={styles['project__header']}>
        <div className={styles['project__logo']}>{data.logo}</div>
        <div>
          <span className={styles['project__subtitle']}>{data.subtitle}</span>

          <h3 className={styles['project__title']}>{data.title}</h3>
        </div>
      </div>
      <p className={styles['project__summary']}>{data.summary}</p>
    </article>
  )
}
