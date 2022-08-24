import Navbar, { NavbarProps } from '@components/navbar'
import { Affix, Button, Container, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp, IconBrandGithub } from '@tabler/icons'
import { Router } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  router: Router
}

const MainLayout = ({ children, router }: Props) => {
  const [scroll, scrollTo] = useWindowScroll()

  const items: NavbarProps = {
    links: [
      { href: '/about', label: 'About' },
      {
        href: 'https://github.com/AdisonCavani/adisoncavani.github.io',
        label: 'Source',
        icon: <IconBrandGithub size={16} />
      },
      { href: '/404', label: '404' },
      { href: '/500', label: '500' }
    ],
    path: router.asPath
  }

  const { links, path } = items

  return (
    <>
      <Navbar links={links} path={path} />
      <Container style={{ marginTop: 72 }}>{children}</Container>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {transitionStyles => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  )
}

export default MainLayout
