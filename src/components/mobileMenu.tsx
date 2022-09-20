import { Menu, Transition } from '@headlessui/react'
import { IconMenu2 } from '@tabler/icons'
import { Fragment } from 'react'
import NextLink from 'next/link'
import { NavbarLinkProps } from './navbar'

type Props = {
  links: NavbarLinkProps[]
  path: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const classes =
  'cursor-pointer group flex w-full items-center gap-2 rounded-md py-2 px-3 text-sm'
const colors = 'hover:bg-neutral-100 dark:hover:bg-[#383a40]'

const MobileMenu = ({ links, path }: Props) => {
  const menuItems = links.map((link, index) => {
    return (
      <Fragment key={index}>
        {link.href.startsWith('/') ? (
          <Menu.Item as={NextLink} href={link.href}>
            <a
              className={classNames(
                classes,
                path === link.href
                  ? 'text-blue-600 bg-blue-100 hover:bg-blue-200 dark:text-blue-300 dark:bg-blue-400/20 dark:hover:bg-blue-500/20'
                  : colors
              )}
            >
              {link.icon}
              {link.label}
            </a>
          </Menu.Item>
        ) : (
          <Menu.Item
            as="a"
            href={link.href}
            target="_blank"
            className={`${classes} ${colors}`}
          >
            {link.icon}
            {link.label}
          </Menu.Item>
        )}
      </Fragment>
    )
  })

  return (
    <Menu>
      <Menu.Button
        className="rounded-md bg-neutral-200 p-2 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
        aria-label="Toggle menu"
      >
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
          <div className="px-1 py-1 space-y-1">{menuItems}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileMenu
