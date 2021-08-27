import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faMediumM,
    faTwitter,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

import JoinUs from '../components/JoinUs';
import { BackgroundColor } from '../components/Background';
import NavBar from '../components/NavBar';
import fireDb from '../utilities/firebase';

const TryingContainer = styled.div` 
  width: 100%;
  height: 0;
  background: url(/assets/trying.svg); 
  background-repeat: no-repeat; 
  background-position: right; 
  background-size: contain; 
  position: absolute;
  top: 0;
  right: 0;
  padding-bottom: 53%; 

  ${(p) => p.theme.mediaQueries.mobile} {
    top: 65%;
    padding-bottom: 100%;
  }
`; 

const FooterContainer = styled.div`
  text-align: center;
  padding: 64px 0;
  width: 100%;
  color: ${p => p.theme.colors.secondary};
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 16px;

  a {
    margin: 0 32px;
  }
`;

const FullScreenBackgroundColor = styled(BackgroundColor)`
  min-height: 100vh;
`;

export default function ApplicationPage() {
  const application = fireDb.getCollection('www', 'Applications');
  const deadline = application.then(data => data[0].deadline);
  console.log(deadline, "this is the log");
  const livePortalLink = '#';
  const hiringLink = '#';
  const hiring = false;

  return (
    <>
      <Head>
        <title>Application Page | nwPlus</title>
      </Head>

      <FullScreenBackgroundColor>
        <NavBar hiring={hiring} hiringLink={hiringLink} livePortalLink={livePortalLink}/>
        <TryingContainer/>
        <JoinUs hiring={hiring} deadline={"Sept"}/>
          <FooterContainer>
              <SocialMediaIcons>
                  <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://twitter.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.linkedin.com/company/nwplus" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="https://www.youtube.com/c/nwPlusUBC" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://medium.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faMediumM} />
                  </a>
              </SocialMediaIcons>
              <div>Copyright &copy; 2021 nwPlus</div>
          </FooterContainer>
      </FullScreenBackgroundColor>
    </>
  )
}