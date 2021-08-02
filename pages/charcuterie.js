import Head from 'next/head'
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
      </main>

      <h3>Hackathon cards</h3>
      <RowContainer>
        <HackathonCard/>
        <HackathonCard/>
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
