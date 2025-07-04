import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faMediumM,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

import JoinUs from '../components/JoinUs';
import { BackgroundColor } from '../components/Background';
import NavBar from '../components/NavBar';

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

  ${(p) => p.theme.mediaQueries.tablet} {
    top: 10%;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    top: 42%;
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
  min-height: 120vh;
`;

export default function ApplicationPage() {
  const metaDescription = "Apply to join the nwPlus team today!";
  
  return (
    <>
      <Head>
        <title>Apply | nwPlus</title>
        <meta name="description" content={metaDescription} />

        <meta itemProp="name" content="nwPlus" />
        <meta itemProp="description" content={metaDescription} />
        <meta itemProp="image" content="/assets/meta-image.png" />

        <meta property="og:url" content="https://nwplus.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nwPlus" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/assets/meta-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="nwPlus" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/assets/meta-image.png" />
      </Head>

      <FullScreenBackgroundColor>
        <NavBar/>
        <TryingContainer/>
        <JoinUs/>
          <FooterContainer>
              <SocialMediaIcons>
                  <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
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
              <div>Copyright &copy; 2024 nwPlus</div>
          </FooterContainer>
      </FullScreenBackgroundColor>
    </>
  )
}
