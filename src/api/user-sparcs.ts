import { z } from 'zod'
import { api } from './client'
import { paginatedSchema } from './paginated'

const sparcsUserSchema = z.object({
  id: z.number(),
  nickname: z.string(),
  fullName: z.string(),
})

export const searchSparcsUsers = async ({
  q,
  page = 0,
  size = 20,
}: {
  q: string
  page?: number
  size?: number
}) => {
  const sparcsUsers = await api
    .get(`users/sparcs`, { searchParams: { q, page, size } })
    .json()

  return paginatedSchema(sparcsUserSchema).parse(sparcsUsers)
}
