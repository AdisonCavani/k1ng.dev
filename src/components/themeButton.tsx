import { useMantineColorScheme, ActionIcon } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'

export function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      variant="transparent"
      onClick={() => toggleColorScheme()}
      size="lg"
      sx={theme => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[2]
            : theme.colors.violet[5],
        color: theme.colorScheme === 'dark' ? 'black' : theme.white
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={18} />
      ) : (
        <IconMoonStars size={18} />
      )}
    </ActionIcon>
  )
}
