import { type FC, useState } from 'react'
import { Form } from 'react-router'
import { searchSparcsUsers } from '@/api/user-sparcs'
import styles from './home.module.scss'

type SparcsUser = {
  id: number
  nickname: string
  fullName: string
}

const PAGE_SIZE = 20
const INITIAL_PAGE = 0

export const Home: FC = () => {
  const [sparcsUsers, setSparcsUsers] = useState<SparcsUser[] | undefined>()

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const query = formData.get('q') as string

    if (!query) {
      setSparcsUsers(undefined)
      return
    }

    const users = await searchSparcsUsers({
      q: query,
      page: INITIAL_PAGE,
      size: PAGE_SIZE,
    })
    setSparcsUsers(users.data)
  }

  return (
    <main className={styles.main}>
      <Form action="/user" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="이름 or 닉네임"
          name="q"
          className={styles.search}
        />
      </Form>
      <div className={styles.searchResult}>
        {sparcsUsers?.length ? (
          <table className={styles.searchResultTable}>
            <thead>
              <tr>
                <th>이름</th>
                <th>닉네임</th>
              </tr>
            </thead>
            <tbody>
              {sparcsUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.nickname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>검색 결과가 없습니다.</span>
        )}
      </div>
    </main>
  )
}
