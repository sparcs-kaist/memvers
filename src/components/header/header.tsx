import type { FC } from 'react'
import { Link } from 'react-router'
import styles from './header.module.scss'

export const Header: FC = () => (
  <div className={styles.headerWrapper}>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/memvers.svg" alt="Memvers" />
      </Link>
      <Link to="/login">Login</Link>
    </header>
  </div>
)
