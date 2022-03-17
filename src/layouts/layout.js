import Head from 'next/head'
import Header from '@src/components/header/header'
import Footer from '@src/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Golden Dao</title>
        <meta name="description" content="GoldenDao" />
        <meta property="og:title" content="GoldenDao" />
        <meta property="og:description" content="Also want these pretty website previews?" />
        <meta property="og:url" content="http://richpreview.com/" />
        <meta property="og:image" content="logo" />
        <meta name="description" content="GoldenDao" />
        <meta name="keywords" content="GoldenDao" />
      </Head>
      <div className="page-background">
        <Header />
        <main className="pb-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}
