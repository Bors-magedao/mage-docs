// pages/_app.jsx
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/mage-token.png" />
        <title>Mage Labs Docs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}