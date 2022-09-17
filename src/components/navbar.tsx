import { Fragment, ReactNode } from 'react'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeButton from './themeButton'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

type NavbarProps = {
  links: NavbarLinkProps[]
  path: string
}

export type NavbarLinkProps = {
  href: string
  label: string
  icon?: ReactNode
}

const MobileMenu = dynamic(() => import('./mobileMenu'), {
  suspense: true
})

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ links, path }: NavbarProps) => {
  const items = links.map((link, index) => {
    return (
      <Fragment key={index}>
        {link.href.startsWith('/') ? (
          <NextLink href={link.href}>
            <div
              className={classNames(
                'flex flex-row items-center gap-2 cursor-pointer rounded px-3 py-2 text-sm font-medium leading-none text-neutral-600 hover:bg-neutral-600/5',
                path === link.href ? 'bg-blue-100 text-blue-600/80' : ''
              )}
            >
              {link.icon && <>{link.icon}</>}
              {link.label}
            </div>
          </NextLink>
        ) : (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded px-3 py-2 text-sm font-medium leading-none text-neutral-600 hover:bg-neutral-600/5 dark:text-neutral-300 dark:hover:bg-neutral-200/5"
          >
            <div className="flex flex-row items-center gap-2">
              {link.icon && <>{link.icon}</>}
              {link.label}
            </div>
          </a>
        )}
      </Fragment>
    )
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[56px] border-b border-neutral-200 bg-[#fff]/60 shadow-sm backdrop-blur dark:border-[#2c2e33] dark:bg-[#1a1b1e]/50">
      <nav className="mx-auto flex h-[56px] max-w-4xl items-center justify-between px-4">
        <div className="flex flex-row items-center gap-6">
          <Logo />
          <div className="flex flex-row gap-4 [@media(max-width:768px)]:hidden">
            {items}
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <ThemeButton />
          <div className="md:hidden">
            <Suspense fallback={null}>
              <MobileMenu links={links} />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
