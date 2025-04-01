import type { FC } from 'react'
import { Link } from 'react-router'
import styles from './unauthorized.module.scss'

export const Unauthorized: FC = () => (
  <main className={styles.main}>
    <h1>Unauthorized</h1>
    <p>Current user is unauthorized to view this page.</p>
    <Link to="/login" className={styles.goToLoginButton}>
      Go to Login
    </Link>
  </main>
)
