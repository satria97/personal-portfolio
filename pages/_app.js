import '@/styles/globals.css'
import Header from '@/components/common/header'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
