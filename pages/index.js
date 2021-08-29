import Head from 'next/head'
import styled from 'styled-components'
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import NavBar from '../components/NavBar';
// Components
import { Background } from '../components/Background'
import { ContentContainer } from '../components/ContentContainer';
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Hackathons from '../components/Hackathons'
import Hero from '../components/Hero'
// Typography
import {
  Title1,
  Title2,
  Body,
} from '../components/Typography';

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Who We Are');

  const AboutHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 52px;
    margin-bottom: 64px;

    ${themeContext.mediaQueries.mobile} {
      justify-content: center;
      gap: 40px;
      margin-bottom: 44px;
    }
  `;

  const AboutSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 128px;

    ${themeContext.mediaQueries.mobile} {
      flex-direction: column;
      gap: 32px;
    }
  `;

  return (
    <>
      <Head>
        <title>nwPlus</title>
        <meta name="description" content="Website for all things nwPlus!" />
      </Head>
      <Background>
        <NavBar/>
        <Hero />
        <ContentContainer>
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
              <Carousel
                images={[
                  'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/171788186_1090725268105290_344021127570405381_n.png?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=QP6tZOAfk-0AX-mb3TQ&_nc_ht=scontent.fyvr3-1.fna&oh=2c924af3eaa2d87f45483473d3d4a0a7&oe=614148B6',
                  'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/158891616_1070573106787173_8122468539488463532_n.png?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=KsBDFeeQzUMAX--wM9s&_nc_ht=scontent.fyvr3-1.fna&oh=9e70e738f9716ca4edccf3d9db09df56&oe=61429F8A',
                  'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/158819777_1070572326787251_7225962860519033885_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=sGZSN1F_uPAAX9fRRJM&_nc_ht=scontent.fyvr3-1.fna&oh=0f84d4c57cd59472cdf75420135410e2&oe=6140EDAB'
                ]}
                height={363}
                width={520}
              />
              <div>
                <Title2 withGradient>nwPlus is a student-led club supporting aspiring programmers and designers, based out of University of British Columbia.</Title2>
                <Body>Our mission: foster innovation and creativity in tech for students to connect with passionate peers and mentors, through events such as our annual hackathons. By providing the right tools, resources, and support, the team at nwPlus aims to encourage students to gain hands-on experience with cutting-edge technology outside of classroom settings.</Body>
              </div>
            </AboutSection>
            :
            <Body>This second part still needs to be done</Body>
          }
        </ContentContainer>
        <ContentContainer>
          <Title1 withGradient align="center">
            Hackathons
          </Title1>
          <Hackathons />
        </ContentContainer>
        <Footer />
      </Background>
    </>
  )
}
