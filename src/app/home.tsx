import type { FC } from 'react'
import { Form } from 'react-router'
import styles from './home.module.scss'

export const Home: FC = () => (
  <main className={styles.main}>
    <Form action="/user">
      <input
        type="search"
        placeholder="이름 or 닉네임"
        name="q"
        className={styles.search}
      />
    </Form>
  </main>
)
