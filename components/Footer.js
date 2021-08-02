import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
  background: #3A396E;
  color: #20FFAF;
  text-align: center;
  padding: 64px 0;
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 32px;

  a {
    margin: 0 32px;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export default function Footer() {
  return (
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
      Copyright &copy; 2021 nwPlus
    </FooterContainer>
  )
}
