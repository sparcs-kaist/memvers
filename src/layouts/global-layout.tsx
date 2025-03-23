import type { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'

export const GlobalLayout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)
