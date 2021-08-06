import Head from 'next/head'
import videoIcon from '../public/assets/logos/video-icon.svg'
import badgeIcon from '../public/assets/logos/our-pick-badge.svg'
import Image from 'next/image'


const resourceCard = (name, event = null, year, image, icon, badge = null) => (
  <div>    
    <div style={{display: 'flex', position: 'absolute', marginTop: '-30px', marginLeft: '-30px'}}>
    <Image width='60px' height='60px' src={badgeIcon} />   
  </div>        
    <div style={{display: 'flex', backgroundImage: `url(${image})`, width:'295px', height:'210px', borderRadius: '10px', backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', justifyContent: 'center', alignItems: 'center'}}>   
      <Image width='40px' height='40px' src={videoIcon} />
    </div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <span style={{marginTop: '8px', color: '#20FFAF', fontWeight: '700', fontSize: '18px'}}>{name}</span>
      <span style={{marginTop: '8px', color: '#FFFFFF', fontSize: '13.5px'}}>{event ? event + ' | ' + year : year}</span>
    </div>
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
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(44, 38, 66)', padding: '20px'}}>
      {resourceCard('Ligma', 'Coachella', '2022', 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg')}
      </div>
    </>

  )
}
