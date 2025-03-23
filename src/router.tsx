import { createBrowserRouter } from 'react-router'
import { Home } from '@/app/Home'
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
    ],
  },
])
