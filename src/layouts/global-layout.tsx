import type { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import styles from './global-layout.module.scss'

export const GlobalLayout: FC = () => (
  <>
    <Header />
    <div className={styles.responsiveWrapper}>
      <Outlet />
    </div>
    <Footer />
  </>
)
