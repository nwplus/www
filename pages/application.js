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

const ApplicationPageContainer = styled.div`
  background: ${p => p.theme.colors.background};
  height: fit-content;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 510px;
  right: 0;
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


export default function Charcuterie() {
  return (
    <>
      <Head>
        <title>Application Page | nwPlus</title>
      </Head>

      <main>
        <ApplicationPageContainer>
            <BackgroundImage src="/assets/logos/trying.svg" alt="an astronaut reaching inside a window"/>
            <JoinUs hiring={true} deadlineDay={30} deadlineMonth="September"/>
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
        </ApplicationPageContainer>
      </main>
    </>
  )
}
