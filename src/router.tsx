import { createBrowserRouter } from 'react-router'
import { Home } from '@/app/home'
import { Login } from '@/app/login'
import { GlobalLayout } from '@/layouts/global-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: GlobalLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      },
    ],
  },
])
