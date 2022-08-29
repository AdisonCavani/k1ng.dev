import { logEvent } from '@lib/plausibleAnalytics'
import {
  Container,
  Group,
  Header,
  createStyles,
  ActionIcon,
  Menu,
  Dialog,
  UnstyledButton
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconMenu2 } from '@tabler/icons'
import { ReactNode, useState } from 'react'
import ContactDialog from './contactDialog'
import Logo from './logo'
import { ThemeButton } from './themeButton'

const HEADER_HEIGHT = 56

const useStyles = createStyles(theme => ({
  header: {
    position: 'fixed',
    backdropFilter: 'blur(10px)',
    boxShadow: 'sm',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? `${theme.colors.dark[7]}80`
        : 'rgba(255, 255, 255, .5)'
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  menu: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },
  linkExternal: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  },
  item: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  },
  link: {
    display: 'block',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    },

    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  }
}))

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
  const { classes, cx } = useStyles()
  const [opened, setOpened] = useState(false)

  const items = links.map(function (link, index) {
    return (
      <div key={index}>
        {link.href.startsWith('/') ? (
          <NextLink
            href={link.href}
            className={cx(classes.link, {
              [classes.linkActive]: path === link.href
            })}
          >
            <Group spacing="xs">
              {link.icon && <>{link.icon}</>}
              {link.label}
            </Group>
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
            <Group spacing="xs">
              {link.icon && <>{link.icon}</>}
              {link.label}
            </Group>
          </a>
        )}
      </div>
    )
  })

  const menuItems = links.map(function (link, index) {
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
  })

  return (
    <>
      <Header height={HEADER_HEIGHT} className={classes.header}>
        <Container
          style={{
            height: HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Group>
            <Logo />
            <Group spacing={5} className={classes.links}>
              <UnstyledButton
                onClick={() => {
                  logEvent('Contact')
                  setOpened(o => !o)
                }}
                className={cx(classes.link, {
                  [classes.linkActive]: opened
                })}
              >
                Contact
              </UnstyledButton>
              {items}
            </Group>
          </Group>

          <Group spacing="xs">
            <ThemeButton />
            <div className={classes.menu}>
              <Menu shadow="md" width={200} offset={10}>
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
              </Menu>
            </div>
          </Group>
        </Container>
      </Header>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size={280}
        radius="md"
        shadow="xl"
      >
        <ContactDialog />
      </Dialog>
    </>
  )
}

export default Navbar
