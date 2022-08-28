import { ActionIcon, Group, Stack, Text } from '@mantine/core'
import { IconMail, IconMapPin } from '@tabler/icons'

const ContactDialog = () => {
  return (
    <>
      <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
        Feel free to contact me
      </Text>
      <Stack>
        <Group>
          <ActionIcon
            variant="light"
            color="blue"
            size="md"
            component="a"
            href="mailto:srodonadrian@proton.me"
          >
            <IconMail size={18} />
          </ActionIcon>
          <Text size="sm">srodonadrian@proton.me</Text>
        </Group>
        <Group>
          <ActionIcon
            variant="light"
            color="blue"
            size="md"
            component="a"
            target="_blank"
            href="https://www.openstreetmap.org/#map=11/50.0470/19.9189"
          >
            <IconMapPin size={18} />
          </ActionIcon>
          <Text size="sm">Cracow, Poland</Text>
        </Group>
      </Stack>
    </>
  )
}

export default ContactDialog
