import { type FC, useRef, useState } from 'react'
import { Form } from 'react-router'
import { Paginated } from '@/api/paginated'
import { searchSparcsUsers } from '@/api/user-sparcs'
import { Pagination } from '@/components/pagination/pagination'
import styles from './home.module.scss'

type SparcsUser = {
  id: number
  nickname: string
  fullName: string
}

const PAGE_SIZE = 10
const INITIAL_PAGE = 0

export const Home: FC = () => {
  const [paginatedSparcsUsers, setPaginatedSparcsUsers] = useState<
    Paginated<SparcsUser> | undefined
  >()
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSearchPage = async (
    e?: React.FormEvent<HTMLFormElement>,
    page: number = INITIAL_PAGE,
    size: number = PAGE_SIZE,
  ) => {
    if (e) {
      e.preventDefault()
    }

    if (!formRef.current) {
      return
    }

    const formData = new FormData(formRef.current)
    const q = formData.get('q') as string

    if (!q) {
      setPaginatedSparcsUsers(undefined)
      return
    }

    const paginatedSparcsUsers = await searchSparcsUsers({
      q,
      page,
      size,
    })

    setPaginatedSparcsUsers(paginatedSparcsUsers)
  }

  return (
    <main className={styles.main}>
      <Form
        action="/user"
        onSubmit={(e) => handleSearchPage(e, INITIAL_PAGE)}
        ref={formRef}
      >
        <input
          type="search"
          placeholder="이름 or 닉네임"
          name="q"
          className={styles.search}
        />
      </Form>
      <div className={styles.searchResult}>
        {paginatedSparcsUsers?.data.length ? (
          <>
            <table className={styles.searchResultTable}>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>닉네임</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSparcsUsers?.data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.fullName}</td>
                    <td>{user.nickname}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={paginatedSparcsUsers.pageInfo.page}
              totalPages={paginatedSparcsUsers.pageInfo.totalPages}
              onClickPage={(page) => handleSearchPage(undefined, page)}
            />
          </>
        ) : (
          <span>검색 결과가 없습니다.</span>
        )}
      </div>
    </main>
  )
}
