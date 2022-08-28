import Navbar from '@components/navbar'
import NavigationSchema from '@lib/navigationSchema'
import { ActionIcon, Affix, Container, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons'
import { Router } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  router: Router
}

const MainLayout = ({ children, router }: Props) => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <Navbar links={NavigationSchema} path={router.asPath} />
      <Container style={{ marginTop: 72 }}>{children}</Container>
    </>
  )
}

export default MainLayout
