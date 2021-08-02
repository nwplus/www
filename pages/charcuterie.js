import Head from 'next/head'
import Footer from '../components/Footer'

export default function Charcuterie() {
  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>

      <main>
        <h1>charcuterie 😋</h1>
        <p>Just a place where we put things</p>

        <h2>Footer</h2>
        <Footer />
      </main>
    </>
  )
}