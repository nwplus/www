import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nwPlus</title>
        <meta name="description" content="Website for all things nwPlus!" />
      </Head>

      <main className={styles.main}>
        <h1>hi how are ya 👋</h1>
        <Link href="/charcuterie">Charcuterie</Link>

        <div style={{ position: 'fixed', top: 0, background: '#000000', width: '100%' }}>
          <NavBar hiring={false}/>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; 2021 nwPlus
      </footer>
    </div>
  )
}
