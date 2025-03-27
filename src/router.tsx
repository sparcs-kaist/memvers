import { createBrowserRouter } from 'react-router'
import { Home } from '@/app/home'
import { Login } from '@/app/login'
import { Unauthorized } from '@/app/unauthorized'
import { GlobalLayout } from '@/layouts/global-layout'
import { authLoader } from '@/loader/authLoader'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: GlobalLayout,
    errorElement: <h1>Unexpected Error!</h1>,
    children: [
      {
        index: true,
        Component: Home,
        loader: authLoader,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/unauthorized',
        Component: Unauthorized,
      },
    ],
  },
])
