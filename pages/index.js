import Head from 'next/head'
import styled, { ThemeContext } from 'styled-components'
import { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
// Components
import { Background } from '../components/Background'
import { ContentContainer } from '../components/ContentContainer';
import Carousel from '../components/Carousel'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hackathons from '../components/Hackathons'
import Hero from '../components/Hero'
import ResourceContainer from '../components/ResourceContainer'
import Stats from '../components/Stats'
// Typography
import {
  Title1,
  Title2,
  Body,
} from '../components/Typography';
// Utility
import fireDb from '../utilities/firebase';

const SECTION_MARGIN = '10em auto'

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  margin-bottom: 64px;

  ${(p) => p.theme.mediaQueries.mobile} {
    justify-content: center;
    gap: 40px;
    margin-bottom: 44px;
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const CarouselContainer = styled.div`
  height: 50vh;
  min-width: 40%;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 100%;
  }
`;

// Added min-height so that planet peeks out
// When actual FAQs are populated I'm guessing it'll be taller anyways
const FaqSection = styled.div`
  background: url('assets/faq-stars.svg'), url('assets/faq-planet.svg');
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  min-height: 600px;
`;

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Who We Are');
  const [faqs, setFaqs] = useState(null);

  const getFaq = async () => {
    const faqs = await fireDb.getCollection('www', 'FAQ');
    setFaqs(faqs);
  }

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <>
      <Head>
        <title>nwPlus</title>
        <meta name="description" content="Website for all things nwPlus!" />
      </Head>
      <Background>
        <NavBar/>
        <Hero />
        <ContentContainer
          id="about"
          margin={SECTION_MARGIN}
        >
          <AboutHeader>
            <Title1
              color={activeTab === 'Who We Are' ? themeContext.colors.primary : themeContext.colors.tertiary}
              underline={activeTab === 'Who We Are'}
              hover
              onClick={() => setActiveTab('Who We Are')}
            >
              Who We Are
            </Title1>
            <Title1
              color={activeTab === 'What We Do' ? themeContext.colors.primary : themeContext.colors.tertiary}
              underline={activeTab === 'What We Do'}
              hover
              onClick={() => setActiveTab('What We Do')}
            >
              What We Do
            </Title1>
          </AboutHeader>
          {activeTab === 'Who We Are' ?
            <AboutSection>
              <CarouselContainer>
                <Carousel
                  images={[
                    '/assets/images/team_nwplus.png',
                    '/assets/images/team_social_1.png',
                    '/assets/images/team_hackcamp.png',
                    '/assets/images/team_nwhacks.png',
                    '/assets/images/team_social_2.png',
                    '/assets/images/team_design.png',
                    '/assets/images/team_dev.png'
                  ]}
                />
              </CarouselContainer>
              <div>
                <Title2 withGradient>nwPlus is a student-led club supporting aspiring programmers and designers, based out of University of British Columbia.</Title2>
                <Body>Our mission: foster innovation and creativity in tech for students to connect with passionate peers and mentors, through events such as our annual hackathons. By providing the right tools, resources, and support, the team at nwPlus aims to encourage students to gain hands-on experience with cutting-edge technology outside of classroom settings.</Body>
              </div>
            </AboutSection>
            :
            <Stats numHackathons={13} numProjects={280} prizesValue={'$110,230'} numWorkshops={50} donationsValue={'$5,075'} />
          }
        </ContentContainer>
        <ContentContainer
          id="hackathons"
          margin={SECTION_MARGIN}
        >
          <Title1 withGradient align="center">
            Hackathons
          </Title1>
          <Hackathons />
        </ContentContainer>
        <ContentContainer
          id="resources"
          margin={SECTION_MARGIN}
        >
          <ResourceContainer />
        </ContentContainer>
        {faqs &&
          <ContentContainer
            id="faq"
            margin={SECTION_MARGIN}
          >
            <FaqSection>
              <Title1
                withGradient
                align="center"
              >
                Frequently Asked Questions
              </Title1>
              <Faq faqs={faqs} />
            </FaqSection>
          </ContentContainer>
        }
        <Footer />
      </Background>
    </>
  )
}
