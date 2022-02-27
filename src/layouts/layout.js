import Head from 'next/head'
import Header from '@src/components/header/header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Golden Dao</title>
      </Head>
      <div className="page-background">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
