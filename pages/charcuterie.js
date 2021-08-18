import Head from 'next/head';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { ContentContainer } from '../components/ContentContainer';
import ResourceFilterCard from '../components/ResourceFilterCard';
import { ResourceType, ResourceEvent, ResourceYear } from '../utils/ResourceUtils';

const BADGE_ICON = 'assets/logos/our-pick-badge.svg';
const FILTER_TYPE = 'TYPE';
const FILTER_EVENT = 'EVENT';
const FILTER_YEAR = 'YEAR';

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
              padding: '8px',
            }}
          >
            <ResourceFilterCard header={FILTER_TYPE} items={Object.values(ResourceType)} />
            <ResourceFilterCard header={FILTER_EVENT} items={Object.values(ResourceEvent)} />
            <ResourceFilterCard header={FILTER_YEAR} items={Object.values(ResourceYear)} />
            <ResourceCard
              name='Ligma'
              event='Coachella'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              badge={BADGE_ICON}
              type={ResourceType.VIDEO}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              badge={BADGE_ICON}
              type={ResourceType.GITHUB}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              type={ResourceType.ARTICLES}
            />
            <ResourceCard
              name='Ligma'
              event='Coachella'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              badge={BADGE_ICON}
              type={ResourceType.VIDEO}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              badge={BADGE_ICON}
              type={ResourceType.GITHUB}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              type={ResourceType.ARTICLES}
              />
              <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              badge={BADGE_ICON}
              type={ResourceType.SLIDES}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              type={ResourceType.SLIDES}
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
    </>
  );
}
