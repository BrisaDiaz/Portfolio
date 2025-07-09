import Link from 'next/link'
import styles from './not-found.module.css'
import { ButtonLink } from '@/components/Button'

export default function NotFound() {
  return (
    <main>
      <section className={styles['page']}>
        <h1 className={styles['page-title']}>404</h1>
        <h2 className={styles['page-subtitle']}>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/' passHref={true} legacyBehavior>
          <ButtonLink className={styles['return-link']}>Return Home</ButtonLink>
        </Link>
      </section>
    </main>
  )
}
