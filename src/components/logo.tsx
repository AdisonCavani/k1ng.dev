import { ActionIcon, Text } from '@mantine/core'
import { IconCode } from '@tabler/icons'
import Link from 'next/link'

const Logo = () => {
  return (
    <div
      style={{
        cursor: 'pointer'
      }}
    >
      <Link href="/" passHref>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: 10
          }}
        >
          <ActionIcon
            mr="sm"
            color="blue"
            variant="transparent"
            aria-label="Go to home page"
          >
            <IconCode />
          </ActionIcon>
          <Text weight="bold">Adison Cavani</Text>
        </span>
      </Link>
    </div>
  )
}

export default Logo
