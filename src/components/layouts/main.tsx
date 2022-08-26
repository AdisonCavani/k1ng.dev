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
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {transitionStyles => (
            <ActionIcon
              size="lg"
              variant="filled"
              color="blue"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={16} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  )
}

export default MainLayout
