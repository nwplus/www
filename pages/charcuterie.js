import { useState } from 'react';
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ResourceCard from '../components/ResourceCard';
import { ContentContainer } from '../components/ContentContainer';
import { Background } from '../components/Background';
import { LargeTitle, Title2, Body } from '../components/Typography';
import Pagination, { getClickedPageIndex } from '../components/Pagination';

const BADGE_ICON = 'assets/logos/our-pick-badge.svg';
const VIDEO_ICON = 'assets/logos/video-icon.svg';
const GITHUB_ICON = 'assets/logos/github-icon.svg';
const MEDIUM_ICON = 'assets/logos/medium-icon.svg';

export default function Charcuterie() {
  const [currPage, setCurrPage] = useState(0);
  const TOTAL_PAGES = 10;
  const handlePageChange = (nextPageIndex) => {
    if (nextPageIndex === TOTAL_PAGES || nextPageIndex < 0) {
      return;
    }
    setCurrPage(nextPageIndex);
  };

  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>
      <Background>
        <Hero />
        <ContentContainer>
          <LargeTitle>charcuterie 😋</LargeTitle>
          <Body>Just a place where we put things</Body>
          <Title2>ContentContainer</Title2>
          <Body>
            Each block of content is wrapped by a ContentContainer. This
            component uniformly applies the same spacing stylings for each
            section of the page.
          </Body>
          <Body>
            <strong>Usage note: </strong>This container would be used in the
            internals of each page/section - i.e. we would use this in the
            internals of FAQ, Resources, and all other sections.
          </Body>
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
          <Title2>Pagination</Title2>
          <Body>Current Page: {currPage + 1}</Body>
          <Pagination
            count={TOTAL_PAGES}
            pageIndex={currPage}
            onPageClick={(e) => setCurrPage(getClickedPageIndex(e))}
            onPrevClick={() => handlePageChange(currPage - 1)}
            onNextClick={() => handlePageChange(currPage + 1)}
          />
          <Title2>Footer</Title2>
        </ContentContainer>
        <Footer />
      </Background>
    </>
  );
}
