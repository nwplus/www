import Head from 'next/head'
import Footer from '../components/Footer'
import FaqBox from '../components/FaqBox'

const SAMPLE_PROPS = {
  HARDCODED_FAQ: {
    question: "question",
    answer: "<h1> answer </h1>",
    category: "category",
    isHardcoded: true
  },
  FAQ: {
    question: "question",
    answer: "<h1> answer </h1>",
    category: "category",
    isHardcoded: false
  }
}

export default function Charcuterie() {
  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>

      <main>
        <h1>charcuterie 😋</h1>
        <p>Just a place where we put things</p>

        <h2>Faq</h2>
        <FaqBox {...SAMPLE_PROPS.HARDCODED_FAQ}/>
        <FaqBox {...SAMPLE_PROPS.FAQ}/>

        <h2>Footer</h2>
        <Footer />
      </main>
    </>
  )
}
