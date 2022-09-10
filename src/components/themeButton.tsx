import { IconSun, IconMoonStars } from '@tabler/icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button
          aria-label="Switch to light theme"
          onClick={() => setTheme('light')}
          className="rounded-md bg-yellow-200 p-2 text-black"
        >
          <IconSun size={18} />
        </button>
      )
    } else {
      return (
        <button
          aria-label="Switch to dark theme"
          onClick={() => setTheme('dark')}
          className="rounded-md bg-violet-500 p-2 text-white"
        >
          <IconMoonStars size={18} />
        </button>
      )
    }
  }

  return renderThemeChanger()
}

export default ThemeButton
