import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import MainLayout from '@components/layouts/main'
import PlausibleAnalytics from '@lib/plausibleAnalytics'

import '@styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps, router } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PlausibleAnalytics />
      <ThemeProvider enableSystem={true} attribute="class">
        <MainLayout router={router}>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}
