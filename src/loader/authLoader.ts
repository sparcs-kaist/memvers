import { HTTPError } from 'ky'
import { redirect } from 'react-router'
import { getMyself } from '@/api/user'

export const authLoader = async () => {
  try {
    return await getMyself()
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401)
      return redirect('/login')
    throw error
  }
}
