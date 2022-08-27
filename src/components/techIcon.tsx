import { Group, Text, Stack, Paper, createStyles } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles(theme => ({
  root: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[8]
        : theme.colors.gray[3],
    transition: 'all 0.25s',
    transitionTimingFunction: 'spring(1 100 10 10)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    padding: '.5rem'
  },
  background: {
    position: 'absolute',
    width: 52,
    height: 52,
    inset: 0,
    opacity: 0.2,
    borderRadius: 8
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: '0.375rem'
  }
}))

export type TechIconProps = {
  title: string
  description: string
  href: string
  image: string
  background: string
}

const TechIcon = ({
  title,
  description,
  href,
  image,
  background
}: TechIconProps) => {
  const { classes } = useStyles()

  return (
    <Paper
      component="a"
      href={href}
      target="_blank"
      className={classes.root}
      withBorder
      p="md"
    >
      <Group>
        <div className={classes.container}>
          <div
            style={{ backgroundColor: background }}
            className={classes.background}
          ></div>
          <Image
            src={image}
            alt={`${title} logo`}
            width={36}
            height={36}
            className={classes.image}
          />
        </div>

        <Stack spacing={0}>
          <Text weight="bold" size="md">
            {title}
          </Text>
          {/* TODO: change dimmed color to darker  */}
          <Text size="sm" color="dimmed">
            {description}
          </Text>
        </Stack>
      </Group>
    </Paper>
  )
}

export default TechIcon
