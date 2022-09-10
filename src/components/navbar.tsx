import { logEvent } from '@lib/plausibleAnalytics'
import { IconMenu2 } from '@tabler/icons'
import { ReactNode, useState } from 'react'
import ContactDialog from './contactDialog'
import Logo from './logo'
import ThemeButton from './themeButton'
import { Menu } from '@headlessui/react'

const HEADER_HEIGHT = 56

// const useStyles = createStyles(theme => ({
//   header: {
//     position: 'fixed',
//     backdropFilter: 'blur(10px)',
//     boxShadow: 'sm',
//     backgroundColor:
//       theme.colorScheme === 'dark'
//         ? `${theme.colors.dark[7]}80`
//         : 'rgba(255, 255, 255, .5)'
//   },
//   links: {
//     [theme.fn.smallerThan('sm')]: {
//       display: 'none'
//     }
//   },

//   menu: {
//     [theme.fn.largerThan('sm')]: {
//       display: 'none'
//     }
//   },
//   linkExternal: {
//     '&:hover': {
//       textDecoration: 'underline',
//       textUnderlineOffset: 3
//     }
//   },
//   item: {
//     '&, &:hover': {
//       backgroundColor: theme.fn.variant({
//         variant: 'light',
//         color: theme.primaryColor
//       }).background,
//       color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
//         .color
//     }
//   },
//   link: {
//     display: 'block',
//     cursor: 'pointer',
//     lineHeight: 1,
//     padding: '8px 12px',
//     borderRadius: theme.radius.sm,

//     '&:hover': {
//       backgroundColor:
//         theme.colorScheme === 'dark'
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0]
//     },

//     [theme.fn.smallerThan('sm')]: {
//       borderRadius: 0,
//       padding: theme.spacing.md
//     },

//     textDecoration: 'none',
//     color:
//       theme.colorScheme === 'dark'
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500
//   },

//   linkActive: {
//     '&, &:hover': {
//       backgroundColor: theme.fn.variant({
//         variant: 'light',
//         color: theme.primaryColor
//       }).background,
//       color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
//         .color
//     }
//   }
// }))

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
  /*const items = links.map((link, index) => {
    return (
      <div key={index}>
        {link.href.startsWith('/') ? (
          <NextLink
            href={link.href}
            className={cx(classes.link, {
              [classes.linkActive]: path === link.href
            })}
          >
            <div className="flex flex-row gap-2">
              {link.icon && <>{link.icon}</>}
              {link.label}
            </div>
          </NextLink>
        ) : (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={cx(classes.link, classes.linkExternal, {
              [classes.linkActive]: path === link.href
            })}
          >
            <div className="flex flex-row gap-2">
              {link.icon && <>{link.icon}</>}
              {link.label}
            </div>
          </a>
        )}
      </div>
    )
  })

  const menuItems = links.map((link, index) => {
    return (
      <div key={index}>
        {link.href.startsWith('/') ? (
          <Menu.Item
            component={NextLink}
            href={link.href}
            icon={link.icon}
            className={cx({
              [classes.item]: path === link.href
            })}
          >
            {link.label}
          </Menu.Item>
        ) : (
          <Menu.Item
            component="a"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            icon={link.icon}
            className={classes.linkExternal}
          >
            {link.label}
          </Menu.Item>
        )}
      </div>
    )
  })*/

  const links2 = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' }
  ]

  return (
    <>
      {/* dark:border-neutral-700 */}
      {/* dark:bg-black */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[56px] border-b border-neutral-200 bg-[#fff]/25 shadow-sm backdrop-blur dark:border-[#2c2e33] dark:bg-[#1a1b1e]/50">
        <nav className="mx-auto flex h-[56px] max-w-4xl items-center justify-between px-4">
          <div className="flex flex-row gap-4">
            <Logo />
            <div className="sm:hidden">
              {/* <button
                onClick={() => {
                  logEvent('Contact')
                }}
                className={cx(classes.link, {
                  [classes.linkActive]: opened
                })}
              >
                Contact
              </button>
              {items} */}
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <ThemeButton />
            <div className="sm:hidden">
              {/* <Menu shadow="md" width={200} offset={10}>
                <Menu.Target>
                  <ActionIcon
                    aria-label="Toggle menu"
                    size="lg"
                    sx={theme => ({
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[6]
                          : theme.colors.gray[0]
                    })}
                  >
                    <IconMenu2 size={18} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => {
                      logEvent('Contact')
                      setOpened(o => !o)
                    }}
                    className={cx({
                      [classes.linkActive]: opened
                    })}
                  >
                    Contact
                  </Menu.Item>
                  {menuItems}
                </Menu.Dropdown>
              </Menu> */}
              <Menu>
                <Menu.Button className="rounded-md bg-neutral-200 p-2 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                  <IconMenu2 size={18} />
                </Menu.Button>
                <Menu.Items>
                  {links2.map(link => (
                    <Menu.Item
                      as="a"
                      key={link.href}
                      href={link.href}
                      className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                    >
                      {link.label}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </nav>
      </header>
      {/* <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size={280}
        radius="md"
        shadow="xl"
      >
        <ContactDialog />
      </Dialog> */}
    </>
  )
}

export default Navbar
