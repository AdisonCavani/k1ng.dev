import Navbar from '@components/navbar'
import FooterSchema from '@data/footerSchema'
import NavigationSchema from '@data/navigationSchema'
import { Router } from 'next/router'
import { ReactNode, Suspense } from 'react'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@components/footer'), {
  suspense: true
})

type Props = {
  children: ReactNode
  router: Router
}

const MainLayout = ({ children, router }: Props) => {
  return (
    <>
      <Navbar links={NavigationSchema} path={router.asPath} />
      <div className="mt-[72px]">{children}</div>
      <Suspense fallback={null}>
        <Footer links={FooterSchema} />
      </Suspense>
    </>
  )
}

export default MainLayout
