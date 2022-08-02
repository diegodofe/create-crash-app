/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'

function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
      }}
    >
      <div
        style={{
          padding: '8px',
          borderRadius: '4px',
          backgroundColor: 'red',
          maxWidth: '720px',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
