import {
  Card,
  Group,
  Text,
  Badge,
  DefaultMantineColor,
  Button,
  Stack,
  createStyles
} from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'
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
  }
}))

type Props = {
  title: string
  desc: string
  lang: string
  color: DefaultMantineColor
  img: string
  githubUrl?: string
  externalUrl?: string
}

const ProjectCard = ({
  title,
  desc,
  lang,
  color,
  img,
  githubUrl,
  externalUrl
}: Props) => {
  const { classes } = useStyles()

  return (
    <Card p="lg" radius="md" withBorder className={classes.root}>
      <Card.Section component="a" href={externalUrl} target="_blank">
        <Image width={600} height={280} src={img} alt="Project image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color={color}>{lang}</Badge>
      </Group>

      <Stack spacing="md">
        <Text size="sm" color="dimmed">
          {desc}
        </Text>

        <Button
          leftIcon={<IconBrandGithub size={20} />}
          variant="light"
          color="blue"
          fullWidth
          radius="md"
          component="a"
          target="_blank"
          href={githubUrl}
        >
          Github
        </Button>
      </Stack>
    </Card>
  )
}

export default ProjectCard
