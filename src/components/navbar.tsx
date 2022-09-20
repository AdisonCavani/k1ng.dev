import { Fragment, ReactNode } from 'react'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeButton from './themeButton'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MobileMenu = dynamic(() => import('./mobileMenu'), {
  suspense: true
})

type NavbarProps = {
  links: NavbarLinkProps[]
  path: string
}

export type NavbarLinkProps = {
  href: string
  label: string
  icon?: ReactNode
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ links, path }: NavbarProps) => {
  const classes =
    'cursor-pointer rounded px-3 py-2 text-sm font-medium leading-none'
  const colors =
    'text-neutral-600 hover:bg-neutral-600/5 dark:text-neutral-300 dark:hover:bg-neutral-200/5'

  const items = links.map((link, index) => {
    return (
      <Fragment key={index}>
        {link.href.startsWith('/') ? (
          <NextLink href={link.href}>
            <a
              className={`${classes} ${
                path === link.href
                  ? 'text-blue-600 bg-blue-100 hover:bg-blue-200 dark:text-blue-300 dark:bg-blue-400/20 dark:hover:bg-blue-500/20'
                  : colors
              }`}
            >
              {link.icon && <>{link.icon}</>}
              {link.label}
            </a>
          </NextLink>
        ) : (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`${classes} ${colors}`}
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
    <header className="fixed top-0 left-0 right-0 z-50 h-[56px] border-b border-neutral-200 bg-white/60 shadow-sm backdrop-blur dark:border-dark-500 dark:bg-dark-700/50">
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
              <MobileMenu links={links} path={path} />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
