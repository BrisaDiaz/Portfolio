import styles from './styles.module.css'
import { Pulse } from '@/components/SVG'
import { ProjectStatus } from '@types'

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  summary: string
  logo: React.ReactNode
  status: ProjectStatus
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
        {data.status ? (
          <span
            className={`tooltip tooltip--left ${styles['project__status']}`}
            data-tooltip={data.status}
          >
            <Pulse />
          </span>
        ) : (
          <></>
        )}
      </div>
      <p className={styles['project__summary']}>{data.summary}</p>
    </article>
  )
}
