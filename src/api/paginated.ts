import { z } from 'zod'

type Paginated<T> = {
  data: T[]
  pageInfo: {
    page: number
    size: number
    totalElements: number
    totalPages: number
  }
}

export const paginatedSchema = <T extends z.ZodTypeAny>(
  schema: T,
): z.ZodType<Paginated<z.infer<T>>> =>
  z.object({
    data: z.array(schema),
    pageInfo: z.object({
      page: z.number(),
      size: z.number(),
      totalElements: z.number(),
      totalPages: z.number(),
    }),
  })
