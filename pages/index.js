import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
      </main>

      <footer className={styles.footer}>
        Copyright &copy; 2021 nwPlus
      </footer>
    </div>
  )
}
