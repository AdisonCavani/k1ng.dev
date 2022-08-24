import Navbar, { NavbarProps } from '@components/navbar'
import { Container } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'
import { Router } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  router: Router
}

const MainLayout = ({ children, router }: Props) => {
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
    </>
  )
}

export default MainLayout
