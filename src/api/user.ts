import { z } from 'zod'
import { api } from '@/api/client'

const userSchema = z.object({
  id: z.number(),
  lastName: z.string(),
  firstName: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export const getMyself = async () => {
  const user = await api.get('users/me').json()
  return userSchema.parse(user)
}
