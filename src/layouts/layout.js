import Head from 'next/head'
import Header from '@src/components/header/header'
import Footer from '@src/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Golden Dao</title>
      </Head>
      <div className="page-background">
        <Header />
        <main className="pb-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}
