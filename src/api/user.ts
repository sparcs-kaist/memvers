import { z } from 'zod'
import { api } from '@/api/client'

const userSchema = z.object({
  id: z.number(),
  lastName: z.string(),
  firstName: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

type UserResponse = z.input<typeof userSchema>
export type User = z.infer<typeof userSchema>

export const getMyself = async (): Promise<User> => {
  const user = await api.get<UserResponse>('users/me').json()
  return userSchema.parse(user)
}
