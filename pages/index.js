import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
// Components
import { Background } from '../components/Background';
import { ContentContainer } from '../components/ContentContainer';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hackathons from '../components/Hackathons';
import Hero from '../components/Hero';
import ResourceContainer from '../components/ResourceContainer';
import Stats from '../components/Stats';
// import Banner from '../components/Banner'
// Typography
import { Title1, Title2, Body } from '../components/Typography';
// Utility
import fireDb from '../utilities/firebase';
import AboutUsGallery from '../components/AboutUsGallery';

import teamSocial1 from '../public/assets/images/team_social_1.jpg';
import teamSocial3 from '../public/assets/images/team_social_3.jpg';
import teamSocial4 from '../public/assets/images/team_social_4.jpg';
import teamSocial2 from '../public/assets/images/team_social_2.jpg';

import PurpleTexture from '../public/assets/purple-texture.svg';

const SECTION_MARGIN = '8em auto';

const AboutHeaderContainer = styled.div`
  position: relative;
  overflow-x: clip; /* so we can offset the planet graphic without scrollbar */
  z-index: 1;

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -150px;
    right: 0;
    background: url('assets/about-us-planet.svg');
    background-position: top right;
    background-repeat: no-repeat;
    width: 687px;
    height: 606px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    &:before {
      display: none;
    }
  }
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 52px;
  margin-bottom: 64px;
  width: 60%;

  ${(p) => p.theme.mediaQueries.mobile} {
    justify-items: center;
    gap: 40px;
    margin-bottom: 44px;
    width: 100%;
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  ${(p) => p.theme.mediaQueries.mobile} {
    gap: 32px;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 8em;

  ${(p) => p.theme.mediaQueries.mobile} {
    gap: 32px;
  }
`;

const ResourcesSection = styled.div`
  position: relative;
  z-index: 1;

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: -150px;
    left: 0;
    // background: url('assets/resources-mascot.svg'),
    //   url('assets/resources-planet.svg');
    background-position: bottom -10% left, bottom right;
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;

    &:before {
      background: none;
    }
  }
`;

// Added min-height so that planet peeks out
// When actual FAQs are populated I'm guessing it'll be taller anyways
const FaqSection = styled.div`
  background: url('assets/faq-stars.svg');
  background-position: top left;
  background-repeat: no-repeat;
  min-height: 600px;
`;

const PurpleTextureImg = styled.img`
  position: absolute;
  left: -20px;
  margin-top: -100px;
  float: left;

  ${(p) => p.theme.mediaQueries.mobile} {
  }
`;

const BearImgContainer = styled.img`
  animation: floatBear 5s ease-in-out infinite;
  margin-bottom: -50px;

  @keyframes floatBear {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(20deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const GreenPlanetImgContainer = styled.img`
  float: right;
  margin-top: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 160px;
    height: auto;
  }
`;

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const [faqs, setFaqs] = useState(null);
  const metaDescription =
    'We empower students from all backgrounds to solve meaningful problems together.';

  const getFaq = async () => {
    const faqs = await fireDb.getCollection('www', 'FAQ');
    setFaqs(faqs);
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <>
      <Head>
        <title>nwPlus</title>
        <meta name='description' content={metaDescription} />

        <meta itemProp='name' content='nwPlus' />
        <meta itemProp='description' content={metaDescription} />
        <meta itemProp='image' content='/assets/meta-image.png' />

        <meta property='og:url' content='https://nwplus.io' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='nwPlus' />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content='/assets/meta-image.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='nwPlus' />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content='/assets/meta-image.png' />
      </Head>
      <Background>
        <NavBar />
        {/* <Banner /> */}
        <Hero />
        <ContentContainer id='about' margin={SECTION_MARGIN}>
          <AboutHeaderContainer>
            <AboutHeader>
              <Title1 color={themeContext.colors.primary}>Who We Are</Title1>
              <div>
                <Title2 withGradient>{metaDescription}</Title2>
                <Body>
                  Based at the University of British Columbia, nwPlus is a
                  student-led club that fosters innovation and skill-building in
                  the tech space for students to connect with passionate peers
                  and mentors through events such as our annual hackathons. By
                  providing tools, resources, and support, we encourage students
                  to gain hands-on experience with cutting-edge technology
                  outside of the classroom.
                </Body>
              </div>
            </AboutHeader>
          </AboutHeaderContainer>
          <AboutSection>
            <AboutUsGallery
              videoSrc='https://www.youtube.com/embed/C_1ygFqM_oo'
              images={[
                {
                  leftImg: teamSocial1,
                  rightImg: teamSocial3,
                },
                {
                  leftImg: teamSocial4,
                  rightImg: teamSocial2,
                },
              ]}
            />
          </AboutSection>
          <StatsSection>
            <Title1 withGradient align='center'>
              Statistics
            </Title1>
            <Stats
              stats={[
                {
                  value: 13,
                  type: 'text',
                  description: 'hackathons hosted since 2018',
                },
                { value: 280, type: 'text', description: 'projects built' },
                {
                  value: 110230,
                  type: 'moneysign',
                  description: 'in prizes awarded since 2021',
                },
                { value: 50, type: 'text', description: 'workshops organized' },
                {
                  value: 5075,
                  type: 'moneysign',
                  description: 'donations to charity since 2021',
                },
              ]}
            />
          </StatsSection>
        </ContentContainer>
        <ContentContainer id='hackathons' margin={SECTION_MARGIN}>
          <Title1 withGradient align='center'>
            Our hackathons
          </Title1>
          <Hackathons />
        </ContentContainer>
        <PurpleTextureImg src={PurpleTexture} />
        <ContentContainer id='resources' margin={SECTION_MARGIN}>
          <ResourcesSection>
            <ResourceContainer />
            <BearImgContainer src='assets/resources-mascot.svg' />
            <GreenPlanetImgContainer src='assets/resources-planet.svg' />
          </ResourcesSection>
        </ContentContainer>
        {faqs && (
          <ContentContainer id='faq' margin={SECTION_MARGIN}>
            <FaqSection>
              <Title1 withGradient align='center'>
                Frequently Asked Questions
              </Title1>
              <Faq faqs={faqs} />
            </FaqSection>
          </ContentContainer>
        )}
        <Footer />
      </Background>
    </>
  );
}
