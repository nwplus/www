import Head from 'next/head';
import Footer from '../components/Footer';
import JoinUs from '../components/JoinUs';

export default function Charcuterie() {
  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>

      <main>
        <div style={{ background: '#000', padding: '81px' }}>
            <JoinUs hiring={true} deadlineDay={30} deadlineMonth="September"/>
        </div>
        <Footer />
      </main>
    </>
  )
}
