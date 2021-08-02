import Head from 'next/head'
import HackathonCard from '../components/HackathonCard'
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

      <RowContainer>
        <HackathonCard/>
        <HackathonCard/>
      </RowContainer>
    </>
  )
}
