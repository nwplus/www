import Head from 'next/head'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import HackathonCard from '../components/HackathonCard'
import Button from '../components/Button'
import ResourceCard from '../components/ResourceCard';
import { ContentContainer } from '../components/ContentContainer';

const BADGE_ICON = 'assets/logos/our-pick-badge.svg';
const VIDEO_ICON = 'assets/logos/video-icon.svg';
const GITHUB_ICON = 'assets/logos/github-icon.svg';
const MEDIUM_ICON = 'assets/logos/medium-icon.svg';

export default function Charcuterie() {
  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>
      <main>
        <ContentContainer>
          <h1>charcuterie 😋</h1>
          <p>Just a place where we put things</p>
          <h2>ContentContainer</h2>
          <p>
            Each block of content is wrapped by a ContentContainer. This
            component uniformly applies the same spacing stylings for each
            section of the page. Note that it should not be used to wrap the
            entire page, because the background for each component would be
            pushed inwards as well.
          </p>
        </ContentContainer>
        <ContentContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgb(44, 38, 66)',
              padding: '8px',
            }}
          >
            <ResourceCard
              name='Ligma'
              event='Coachella'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={VIDEO_ICON}
              badge={BADGE_ICON}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={GITHUB_ICON}
              badge={BADGE_ICON}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={MEDIUM_ICON}
            />
          </div>
        </ContentContainer>
        <ContentContainer>
          <Carousel
            images={[
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
              'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg',
            ]}
            height={180}
            width={260}
          />

          <h2>Footer</h2>
        </ContentContainer>
        <Footer />
      </main>

      <ContentContainer>
        <h3>Hackathon cards</h3>
        <div style={{ display: 'flex' }}>
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
        </div>
      </ContentContainer>

      <ContentContainer>
        <h3>Buttons</h3>
        <div style={{ display: 'flex' }}>
          <Button link='https://www.google.com/' width='200px' height='70px'>
            Visit Google
          </Button>
          <Button link='https://www.yahoo.com/' width='400px' height='50px' backgroundColor='red' borderRadius='12px' >
            Visit Yahoo
          </Button>
          <Button link='https://www.yahoo.com/' hollow width='200px' height='50px' borderRadius='12px' >
            Visit Yahoo
          </Button>
        </div>
      </ContentContainer>
    </>
  );
}
