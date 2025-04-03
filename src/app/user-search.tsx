import type { FC } from 'react'
import { useSearchParams } from 'react-router'

export const UserSearch: FC = () => {
  const [searchParams] = useSearchParams()

  return (
    <main>
      <pre>
        {JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
      </pre>
    </main>
  )
}
