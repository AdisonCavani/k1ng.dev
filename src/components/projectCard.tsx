import {
  Card,
  Group,
  Text,
  Badge,
  DefaultMantineColor,
  Button,
  Stack
} from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'
import Image from 'next/image'

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
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
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
