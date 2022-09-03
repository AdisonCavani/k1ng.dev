import Navbar from '@components/navbar'
import NavigationSchema from '@data/navigationSchema'
import { Router } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  router: Router
}

const MainLayout = ({ children, router }: Props) => {
  return (
    <>
      <Navbar links={NavigationSchema} path={router.asPath} />
      <div style={{ marginTop: 72 }}>{children}</div>
    </>
  )
}

export default MainLayout
