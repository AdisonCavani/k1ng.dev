import {
  Button,
  Container,
  Group,
  Title,
  Text,
  createStyles
} from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5
  }
}))

export type ErrorPageProps = {
  number: number
  title: string
  description: string
}

const ErrorPage = ({ number, title, description }: ErrorPageProps) => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{number}</div>
      <Title className={classes.title}>{title}</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        {description}
      </Text>
      <Group position="center">
        <Link href="/" passHref>
          <Button variant="subtle" size="md">
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  )
}

export default ErrorPage
