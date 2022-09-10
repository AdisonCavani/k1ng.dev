import { IconMenu2 } from '@tabler/icons'
import { Fragment, ReactNode } from 'react'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeButton from './themeButton'
import { Menu, Transition } from '@headlessui/react'

type NavbarProps = {
  links: LinkProps[]
  path: string
}

export type LinkProps = {
  href: string
  label: string
  icon?: ReactNode
}

const Navbar = ({ links, path }: NavbarProps) => {
  const items = links.map((link, index) => {
    return (
      <Fragment key={index}>
        {link.href.startsWith('/') ? (
          <NextLink
            href={link.href}
            className="cursor-pointer rounded px-3 py-2 text-sm font-medium leading-none text-neutral-600 hover:bg-neutral-600/5"
          >
            <div className="flex flex-row items-center gap-2">
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

  const menuItems = links.map((link, index) => {
    return (
      <Fragment key={index}>
        {link.href.startsWith('/') ? (
          <Menu.Item
            as={NextLink}
            href={link.href}
            className="group flex w-full items-center gap-2 rounded-md py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-[#383a40]"
          >
            {link.icon}
            {link.label}
          </Menu.Item>
        ) : (
          <Menu.Item
            as="a"
            href={link.href}
            target="_blank"
            className="group flex w-full items-center gap-2 rounded-md py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-[#383a40]"
          >
            {link.icon}
            {link.label}
          </Menu.Item>
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
            <Menu>
              <Menu.Button className="rounded-md bg-neutral-200 p-2 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                <IconMenu2 size={18} />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-[11px] mr-[1px] w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#212226]">
                  <div className="px-1 py-1">{menuItems}</div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
