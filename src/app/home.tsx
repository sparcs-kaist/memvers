import { type FC, Suspense, use } from 'react'
import { type User, getMyself } from '@/api/user'
import styles from './home.module.scss'

const Welcome: FC<{ userPromise: Promise<User> }> = ({ userPromise }) => {
  const user = use(userPromise)

  return (
    <div>
      <h1>
        Hi, {user.firstName} {user.lastName}!
      </h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export const Home: FC = () => {
  // TODO: Use TanStack Query to cache the user data
  //       Invalidate the cache when the user logs out
  const mePromise = getMyself()

  return (
    <main className={styles.main}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Welcome userPromise={mePromise} />
      </Suspense>
    </main>
  )
}
