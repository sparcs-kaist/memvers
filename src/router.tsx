import { createBrowserRouter } from 'react-router'
import { Home } from '@/app/home'
import { Login } from '@/app/login'
import { Oops } from '@/app/oops'
import { Unauthorized } from '@/app/unauthorized'
import { GlobalLayout } from '@/layouts/global-layout'
import { authLoader } from '@/loader/authLoader'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: GlobalLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: authLoader,
        errorElement: <Oops />,
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
