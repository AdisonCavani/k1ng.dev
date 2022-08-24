import {
  Container,
  Group,
  Header,
  Paper,
  Transition,
  createStyles,
  ActionIcon
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NextLink } from '@mantine/next'
import { IconMenu2, IconX } from '@tabler/icons'
import { ReactNode } from 'react'
import Logo from './logo'
import { ThemeButton } from './themeButton'

const HEADER_HEIGHT = 56

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
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
  },
  linkExternal: {
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }
}))

export type NavbarProps = {
  links: LinkProps[]
  path: string
}

type LinkProps = {
  href: string
  label: string
  icon?: ReactNode
}

const Navbar = ({ links, path }: NavbarProps) => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <>
      {link.href.startsWith('/') ? (
        <NextLink
          onClick={toggle}
          key={link.label}
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
          onClick={toggle}
          key={link.label}
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
    </>
  ))

  return (
    <Header
      height={HEADER_HEIGHT}
      style={{
        position: 'fixed',
        backdropFilter: 'blur(10px)',
        boxShadow: 'sm',
        backgroundColor: 'transparent'
      }}
    >
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
            {items}
          </Group>
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>

        <Group spacing="xs">
          <ThemeButton />
          <ActionIcon
            className={classes.burger}
            onClick={toggle}
            size="lg"
            sx={theme => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0]
            })}
          >
            {opened ? <IconX size={18} /> : <IconMenu2 size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}

export default Navbar
