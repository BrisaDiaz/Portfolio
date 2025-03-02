import styles from './styles.module.css'
import Badge from '@/components/Badge'
export interface TechCategory {
  category: string
  technologies: {
    name: string;
    logo_name: string;
    doc_url: string;
}[]
}
interface Props extends React.HTMLAttributes<HTMLElement> {
  data: TechCategory
}
export default function TechCard(props: Props) {
  const { data, className, ...other } = props

return <article {...other} className={`${styles['card']} ${className ?? ''}`}>
        <h3 className={`${styles['card__title']}`}>{data?.category}</h3>
        <div className={`${styles['card__body']}`}>
            {data?.technologies?.map(tech => <a key={tech.name} href={tech.doc_url} target='_blank'>
                                     <Badge
                                        
                                        variant="subtle"
                                        size="sm"
                                        color="secondary"
                                      >
                                        {tech.name}
                                      </Badge>
                                      </a>)}
        </div>
</article>
}