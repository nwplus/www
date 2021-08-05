import Head from 'next/head'
import videoIcon from '../public/assets/logos/video-icon.svg'
import Image from 'next/image'


const resourceCard = (name, event = null, year, image, icon, badge = null) => (
  <div>
    <div style={{display: 'flex', backgroundImage: `url(${image})`, width:'295px', height:'210px', borderRadius: '10px', backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', justifyContent: 'center', alignItems: 'center'}}>
      <Image width='40px' height='40px' src={videoIcon} />
    </div>
    <h3 style={{color: '#20FFAF'}}>{name}</h3>
    <span style={{color: '#FFFFFF'}}>{event ? event + ' | ' + year : year}</span>
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
      <div style={{backgroundColor: 'rgb(44, 38, 66)'}}>
      {resourceCard('Ligma', 'Coachella', '2022', 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg')}
      </div>
    </>

  )
}
