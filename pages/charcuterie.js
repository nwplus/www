import Head from 'next/head'
import videoIcon from '../public/assets/logos/video-icon.svg'
import githubIcon from '../public/assets/logos/github-icon.svg'
import mediumIcon from '../public/assets/logos/medium-icon.svg'
import badgeIcon from '../public/assets/logos/our-pick-badge.svg'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import ResourceCard from '../components/ResourceCard'

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
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(44, 38, 66)', padding: '20px'}}>
        <ResourceCard 
          name='Ligma' 
          event='Coachella'
          year='2022' 
          image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg' 
          icon={videoIcon} 
          badge={badgeIcon} />
        <ResourceCard 
          name='Ligma' 
          year='2022' 
          image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg' 
          icon={githubIcon} 
          badge={badgeIcon} />
        <ResourceCard 
          name='Ligma' 
          year='2022' 
          image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg' 
          icon={mediumIcon} />
      </div>
      <Carousel images={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg', 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg']}
                height={180}
                width={260} />
    </>

  )
}
