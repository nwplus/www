import Head from 'next/head'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import HackathonCard from '../components/HackathonCard'
import Button from '../components/Button'
import styled from 'styled-components'

const RowContainer = styled.div`
    display: flex;
`

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

      <h3>Hackathon cards</h3>
      <RowContainer>
        <HackathonCard 
          registrationOpen 
          link='https://www.google.com/' 
          dateString='Dec 5 - 6' 
          imageLink='https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg' 
        />
        <HackathonCard 
          link='https://www.google.com/' 
          dateString='Dec 5 - 6' 
          imageLink='https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg' 
        />
      </RowContainer>

      <h3>Buttons</h3>
      <RowContainer>
        <Button link='https://www.google.com/' width='200px' height='70px'>
          Visit Google
        </Button>
        <Button link='https://www.yahoo.com/' width='400px' height='50px' backgroundColor='red' borderRadius='12px' >
          Visit Yahoo
        </Button>
      </RowContainer>
    </>
  )
}