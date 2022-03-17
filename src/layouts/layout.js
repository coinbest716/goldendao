import Head from 'next/head'
import Header from '@src/components/header/header'
import Footer from '@src/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>GoldenDao</title>
        <meta name="title" content="GoldenDao NFT" />
        <meta name="description" content="GoldenDao NFT" />
        <meta name="keywords" content="GoldenDao" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldendao.xyz/" />
        <meta property="og:title" content="GoldenDao NFT" />
        <meta
          property="og:description"
          content="Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives."
        />
        <meta property="og:image" content="logo.png" />
        <meta property="og:site_name" content="GoldenDao NFT" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.goldendao.xyz/" />
        <meta property="twitter:title" content="GoldenDao NFT" />
        <meta
          property="twitter:description"
          content="Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives."
        />
        <meta property="twitter:card" content="logo.png" />
        <meta property="twitter:site_name" content="GoldenDao NFT" />
      </Head>
      <div className="page-background">
        <Header />
        <main className="pb-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}
