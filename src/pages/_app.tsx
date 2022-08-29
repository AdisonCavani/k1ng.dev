import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import MainLayout from '@components/layouts/main'
import PlausibleAnalytics from '@lib/plausibleAnalytics'
import { useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { GetServerSidePropsContext } from 'next'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, router } = props

  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30
    })
  }

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PlausibleAnalytics />

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <MainLayout router={router}>
            <Component {...pageProps} />
          </MainLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light'
})
