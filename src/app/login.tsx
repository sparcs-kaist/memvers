import type { FC } from 'react'
import styles from './login.module.scss'

export const Login: FC = () => {
  const googleLoginURL = `${import.meta.env.VITE_API_BASE_URL}/auth/google`

  return (
    <main className={styles.main}>
      <a href={googleLoginURL} className={styles.loginButton}>
        Sign in with Google
      </a>
    </main>
  )
}
