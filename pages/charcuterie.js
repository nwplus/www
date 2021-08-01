import Head from 'next/head'
import videoIcon from '../public/assets/logos/video-icon.svg'
import Image from 'next/image'


const logo = require('../public/assets/logos/video-icon.svg')
const resourceCard = (name, event = null, year, image, icon, badge = null) => (
  <div>
    <Image src={logo} />
    <img src={'../public/assets/logos/video-icon.svg'} />
    <img src={require('../public/assets/logos/video-icon.svg')} />
    <img src={videoIcon} />
    <img style={{borderRadius: '10px'}} src={image} width='295px' height='210px' />
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
