import Head from 'next/head'
import Carousel from '../components/Carousel'
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
      <Carousel images={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg', 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg']}
                height={180}
                width={260} />
    </>
  )
}
