import React, { useState } from 'react';
import Head from 'next/head';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Modal from '../components/Modal';
import HackathonCard from '../components/HackathonCard';
import Button from '../components/Button';
import FaqBox from '../components/FaqBox';
import { ContentContainer } from '../components/ContentContainer';
import { MOCK_RESOURCES_DATA } from '../utils/ResourceUtils';
import ResourceContainer from '../components/ResourceContainer';
import { Background } from '../components/Background';
import { LargeTitle, Title2, Body } from '../components/Typography';
import ResourcePage from '../components/ResourcePage';

export default function Charcuterie() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>
      <Background>
        <NavBar hiring={false}/>
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
          <FaqBox question='Test?' answer='Test'/>
          <FaqBox question='Test?' answer='<h1>H1 test</h1>' isHardcoded={true}/>
          <FaqBox question='Test?' answer='<h1>H1 test</h1>' isHardcoded={false}/>
        </ContentContainer>
        <ContentContainer>
          <ResourceContainer />
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
        </ContentContainer>

        <ContentContainer>
          <Body onClick={() => setShowModal(true)}>Click me to open a modal!</Body>
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
          >
            <Title2>nwPlus Newsletter Sign-up</Title2>
            <Body>Subscribe to our newsletter to stay up to date and for upcoming events!</Body>
          </Modal>
        </ContentContainer>

        <ContentContainer>
          <Title2>Paginated Resources</Title2>
          <ResourcePage
            resources={MOCK_RESOURCES_DATA}
          />
        </ContentContainer>

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
      <Carousel images={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg', 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg']}
                height={180}
                width={260} />
        <ContentContainer>
          <h3>Buttons</h3>
          <div style={{ display: 'flex' }}>
            <Button link='https://www.google.com/' width='200px' height='70px'>
              Visit Google
            </Button>
            <Button
              link='https://www.yahoo.com/'
              width='400px'
              height='50px'
              backgroundColor='red'
              borderRadius='12px'
            >
              Visit Yahoo
            </Button>
            <Button
              link='https://www.yahoo.com/'
              hollow
              width='200px'
              height='50px'
              borderRadius='12px'
            >
              Visit Yahoo
            </Button>
          </div>
        </ContentContainer>
      </Background>
    </>
  );
}
