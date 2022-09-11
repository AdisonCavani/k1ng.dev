import Footer from '@components/footer'
import Navbar from '@components/navbar'
import FooterSchema from '@data/footerSchema'
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
      <div className="mt-[72px]">{children}</div>
      <Footer links={FooterSchema} />
    </>
  )
}

export default MainLayout
