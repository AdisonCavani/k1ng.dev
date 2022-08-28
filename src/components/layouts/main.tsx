import Navbar from '@components/navbar'
import NavigationSchema from '@lib/navigationSchema'
import { Container } from '@mantine/core'
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
      <Container style={{ marginTop: 72 }}>{children}</Container>
    </>
  )
}

export default MainLayout
