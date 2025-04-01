import type { FC } from 'react'
import { Link } from 'react-router'
import styles from './oops.module.scss'

export const Oops: FC = () => (
  <main className={styles.main}>
    <h1>Error!</h1>
    <p>Oops, something went wrong.</p>
    <Link to="/" className={styles.backToHome}>
      Back to Home
    </Link>
  </main>
)
