import type { FC } from 'react'
import { RouterProvider as Provider, createBrowserRouter } from 'react-router'
import { Home } from '@/app/home'
import { Login } from '@/app/login'
import { Oops } from '@/app/oops'
import { Unauthorized } from '@/app/unauthorized'
import { UserSearch } from '@/app/user-search'
import { GlobalLayout } from '@/layouts/global-layout'
import { authLoader } from '@/loader/authLoader'

const router = createBrowserRouter([
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
      {
        path: '/unauthorized',
        Component: Unauthorized,
      },
      {
        path: '/user',
        Component: UserSearch,
        // TODO: Search for a user based on the query string
        //       Replace authLoader with a userSearchLoader
        loader: authLoader,
        errorElement: <Oops />,
      },
    ],
  },
])

export const RouterProvider: FC = () => <Provider router={router} />
