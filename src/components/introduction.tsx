import { createStyles, Title, Text } from '@mantine/core'
import Image from 'next/image'
import AvatarImage from '@images/avatar.webp'

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',

    maxWidth: '42rem',

    '@media (min-width: 640px)': {
      flexDirection: 'row'
    }
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '2rem'
  },

  image: {
    position: 'relative',
    marginBottom: '2rem',
    marginRight: 'auto',
    width: 80,

    borderWidth: 2,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor:
      theme.colorScheme === 'dark' ? theme.colors.gray[6] : 'transparent',

    '@media (min-width: 640px)': {
      width: 176,
      marginBottom: 0
    }
  }
}))

const Introduction = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <Title mb=".25rem">Adison Cavani</Title>
        <Text mb="1rem">
          Full-stack Developer, <strong>student</strong>
        </Text>
        <Text>
          .NET Backend Developer. Currently learning web development - cloud,
          serverless and React w/ Next.js.
        </Text>
      </div>
      <div className={classes.image}>
        <Image
          src={AvatarImage}
          alt="Adison Cavani"
          width={176}
          height={176}
          sizes="30vw"
          priority
        />
      </div>
    </div>
  )
}

export default Introduction
