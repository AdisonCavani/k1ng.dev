import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import MainLayout from '@components/layouts/main'
import PlausibleAnalytics from '@lib/plausibleAnalytics'
import { useLocalStorage } from '@mantine/hooks'

import '@styles/globals.css'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, router } = props

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PlausibleAnalytics />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          colors: {
            secondary: [
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161',
              '#616161'
            ]
          }
        }}
      >
        <MainLayout router={router}>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
