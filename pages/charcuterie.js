import Head from 'next/head'

const resourceCard = (name, event = null, year, image, badge = null, resourceTypeLogo) => (
  <div>
    <img src={image} width='295px' height='210px' />
    <h3 style={{color: '#20FFAF'}}>{name}</h3>
    <span>{event ? event + ' | ' + year : year}</span>
  </div>
)
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
      {resourceCard('ligma', 'coachella', '2022', 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg')}
    </>
  )
}
