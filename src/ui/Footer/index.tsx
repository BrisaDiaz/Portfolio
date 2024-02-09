import { forwardRef } from 'react'
import styles from './styles.module.css'
import NextLink from 'next/link'
import { getFooterData } from '@/services/layout'

export interface Props extends React.HTMLAttributes<HTMLElement> {}
async function footer(props: Props, ref?: React.LegacyRef<HTMLElement>) {
  const { ...other } = props
  const footer = await getFooterData()

  return (
    <footer {...other} ref={ref} className={styles['footer']}>
      <div className={styles['footer-inner']}>
        <section className={styles['profile-section']}>
          <h4>{footer?.about?.title}</h4>
          <p>{footer?.about?.summary}</p>
        </section>
        <section>
          <h4>Contact Info</h4>
          <ul>
            {footer?.contact_links?.map((link) => (
              <li key={link?.url}>
                <a
                  href={link?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {link?.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>Highlighted Projects</h4>
          <ul>
            {footer?.highlighted_projects.map((project) => (
              <li key={project?.url}>
                <NextLink href={project?.url} className="link">
                  {project?.name}
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {footer?.rights ? (
        <section>
          <p>{footer?.rights}</p>
        </section>
      ) : (
        <></>
      )}
    </footer>
  )
}

export default forwardRef(footer)
