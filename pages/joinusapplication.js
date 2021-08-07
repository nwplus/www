import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from '../components/Footer'

export default function JoinUsApplication() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nwPlus</title>
        <meta name="description" content="Website for all things nwPlus!" />
      </Head>

      <Footer/>
    </div>
  )
}